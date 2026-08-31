// Vercel Edge Function: relays the "trial course" form to email via the Resend API.
//
// Keeping this server-side (instead of calling a third-party form backend directly from the browser) avoids
// problems with the previous client-side setup:
// - `VITE_*` env vars are inlined in plain text into the shipped JS bundle, so a form-backend endpoint/API key
//   would be readable by anyone (and scrapable by bots) via view-source/devtools.
// - The honeypot + anti-bot delay were client-side JS only, so a direct `curl`/script POST to a leaked endpoint
//   bypassed them entirely. Re-checking both here means bypassing the client no longer helps.
// - A same-origin check (Origin/Referer) and an upper bound on the fill-time window add further friction against
//   scripted abuse without requiring a third-party captcha service.
//
// Previously this proxied to FormSubmit, but FormSubmit sits behind Cloudflare's bot-management JS challenge,
// which flags traffic from cloud/datacenter IP ranges (including Vercel's shared egress IPs) and cannot be solved
// by any server-side HTTP client — no header or transport change can get past a challenge that requires executing
// JavaScript in a real browser. Resend is a plain token-authenticated API built for programmatic/serverless
// sending, so it doesn't have that problem.
export const config = { runtime: 'edge' };

type TrialCoursePayload = {
  firstName?: string;
  lastName?: string;
  age?: string;
  course?: string;
  email?: string;
  telephone?: string;
  website?: string; // Honeypot: must stay empty, real visitors never see/fill this field.
  openedAt?: number; // Date.now() captured client-side when the form mounted.
};

const RESEND_API_URL = 'https://api.resend.com/emails';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_AGE = 14;
const MIN_FILL_TIME_MS = 3000;
const MAX_FILL_TIME_MS = 30 * 60 * 1000; // Beyond this, treat `openedAt` as stale/replayed rather than a slow human.
const MAX_TEXT_FIELD_LENGTH = 200;

// Strips ASCII/Unicode control characters — in particular `\r`/`\n`, the classic email-header-injection vector —
// from free-text fields before they're used to build the outgoing email, and caps their length as a further
// defensive bound.
const sanitizeField = (value: string): string =>
  value
    .replace(/\p{Cc}+/gu, ' ')
    .trim()
    .slice(0, MAX_TEXT_FIELD_LENGTH);

const HTML_ESCAPES: Record<string, string> = {
  "'": '&#39;',
  '"': '&quot;',
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
};

// Escapes text dropped into the notification email's HTML body — sanitizeField only strips control characters, not
// HTML-significant ones, so this is still needed to stop a submitted field from injecting markup into the email.
const escapeHtml = (value: string): string => value.replace(/[&<>"']/g, (char) => HTML_ESCAPES[char] ?? char);

const jsonResponse = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
    status,
  });

// Real visitors submit this form via same-origin `fetch()`, which browsers tag with an Origin header even for
// same-origin requests. A direct `curl`/script POST straight to this endpoint won't carry a matching one unless
// the caller deliberately spoofs it — raising the bar over a client-side-only check without needing a captcha.
const isSameOrigin = (request: Request): boolean => {
  const { origin } = new URL(request.url);
  const requestOrigin = request.headers.get('origin');
  if (requestOrigin) {
    return requestOrigin === origin;
  }

  const referer = request.headers.get('referer');
  if (referer) {
    try {
      return new URL(referer).origin === origin;
    } catch {
      return false;
    }
  }

  return false;
};

// TRIAL_COURSE_RECIPIENTS is positional: [0] is the academy address (always notified), [1] is the Montpellier
// instructor, [2] is the Nîmes instructor. Only the instructor matching the submitted course is added alongside
// the academy address, so each instructor only gets notified about their own trial-course requests.
const getRecipients = (course: string, recipients: string[]): string[] => {
  const [academy, montpellierInstructor, nimesInstructor] = recipients;
  if (/^Nîmes\b/i.test(course)) {
    return [academy, nimesInstructor];
  }
  if (/^Montpellier\b/i.test(course)) {
    return [academy, montpellierInstructor];
  }
  // Unrecognized course label (e.g. a future option not yet handled here) — fail open to every recipient rather
  // than silently dropping the notification.
  return recipients;
};

const buildEmailHtml = (fields: {
  firstName: string;
  lastName: string;
  age: string;
  course: string;
  email: string;
  telephone: string;
}): string => {
  const rows: Array<[string, string]> = [
    ['Prénom', fields.firstName],
    ['Nom', fields.lastName],
    ['Âge', fields.age],
    ['Email', fields.email],
    ['Téléphone', fields.telephone],
    ['Cours', fields.course],
  ];

  const rowsHtml = rows
    .map(
      ([label, value]) =>
        `<tr><th align="left" style="padding:4px 12px 4px 0">${escapeHtml(label)}</th><td style="padding:4px 0">${escapeHtml(value)}</td></tr>`,
    )
    .join('');

  return `<table>${rowsHtml}</table>`;
};

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  if (!isSameOrigin(request)) {
    return jsonResponse({ error: 'Rejected' }, 403);
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  const recipients = process.env.TRIAL_COURSE_RECIPIENTS?.trim()
    .split(',')
    .map((recipient) => recipient.trim())
    .filter(Boolean);
  if (!(apiKey && from && recipients?.length === 3)) {
    return jsonResponse({ error: 'Server misconfigured' }, 500);
  }

  let payload: TrialCoursePayload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Invalid JSON body' }, 400);
  }

  if (payload.website?.trim()) {
    return jsonResponse({ error: 'Rejected' }, 400);
  }

  if (!payload.openedAt) {
    return jsonResponse({ error: 'Rejected' }, 400);
  }

  const fillTime = Date.now() - payload.openedAt;
  if (fillTime < MIN_FILL_TIME_MS || fillTime > MAX_FILL_TIME_MS) {
    return jsonResponse({ error: 'Rejected' }, 400);
  }

  const age = payload.age?.trim();
  const course = payload.course && sanitizeField(payload.course);
  const email = payload.email?.trim();
  const firstName = payload.firstName && sanitizeField(payload.firstName);
  const lastName = payload.lastName && sanitizeField(payload.lastName);
  const telephone = payload.telephone && sanitizeField(payload.telephone);

  if (!(age && course && email && firstName && lastName && telephone)) {
    return jsonResponse({ error: 'Missing required fields' }, 400);
  }

  if (!EMAIL_PATTERN.test(email)) {
    return jsonResponse({ error: 'Invalid email' }, 400);
  }

  const ageNumber = Number(age);
  if (!Number.isFinite(ageNumber) || ageNumber < MIN_AGE) {
    return jsonResponse({ error: 'Invalid age' }, 400);
  }

  let upstream: Response;
  try {
    upstream = await fetch(RESEND_API_URL, {
      body: JSON.stringify({
        from,
        html: buildEmailHtml({ age, course, email, firstName, lastName, telephone }),
        reply_to: email,
        subject: `Cours d'essai - ${firstName} ${lastName}`,
        to: getRecipients(course, recipients),
      }),
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: server-side diagnostic for an otherwise-opaque upstream fetch failure.
    console.error('Fetch to Resend threw', error);
    return jsonResponse({ error: 'Upstream submission failed' }, 502);
  }

  if (!upstream.ok) {
    let upstreamBody: unknown;
    try {
      upstreamBody = await upstream.json();
    } catch {
      upstreamBody = null;
    }
    // biome-ignore lint/suspicious/noConsole: server-side diagnostic for an otherwise-silent upstream failure.
    console.error('Resend rejected the trial-course submission', { body: upstreamBody, status: upstream.status });
    return jsonResponse({ error: 'Upstream submission failed' }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}
