// Vercel Edge Function: proxies the "trial course" form to FormSubmit.
//
// Keeping this server-side (instead of calling FormSubmit directly from the browser) avoids problems with the
// previous client-side setup:
// - `VITE_*` env vars are inlined in plain text into the shipped JS bundle, so the FormSubmit endpoint and CC
//   addresses were readable by anyone (and scrapable by bots) via view-source/devtools.
// - The honeypot + anti-bot delay were client-side JS only, so a direct `curl`/script POST to the leaked
//   FormSubmit URL bypassed them entirely. Re-checking both here means bypassing the client no longer helps.
// - A same-origin check (Origin/Referer) and an upper bound on the fill-time window add further friction against
//   scripted abuse without requiring a third-party captcha service.
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

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_AGE = 14;
const MIN_FILL_TIME_MS = 3000;
const MAX_FILL_TIME_MS = 30 * 60 * 1000; // Beyond this, treat `openedAt` as stale/replayed rather than a slow human.
const MAX_TEXT_FIELD_LENGTH = 200;

// Strips ASCII/Unicode control characters — in particular `\r`/`\n`, the classic email-header-injection vector —
// from free-text fields before they're forwarded to FormSubmit (e.g. via `_subject`, built from `firstName`/
// `lastName` below), and caps their length as a further defensive bound.
const sanitizeField = (value: string): string =>
  value
    .replace(/\p{Cc}+/gu, ' ')
    .trim()
    .slice(0, MAX_TEXT_FIELD_LENGTH);

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

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }

  if (!isSameOrigin(request)) {
    return jsonResponse({ error: 'Rejected' }, 403);
  }

  const formSubmitUrl = process.env.FORM_SUBMIT_ENDPOINT?.trim();
  if (!formSubmitUrl) {
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

  const cc = process.env.FORM_SUBMIT_CC?.trim();

  const upstream = await fetch(formSubmitUrl, {
    body: JSON.stringify({
      _captcha: 'false',
      _cc: cc,
      _replyto: email,
      _subject: `Cours d'essai - ${firstName} ${lastName}`,
      _template: 'table',
      Age: age,
      Cours: course,
      Email: email,
      Nom: lastName,
      Prénom: firstName,
      Téléphone: telephone,
    }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Referer: `${new URL(request.url).origin}/cours-essai`,
    },
    method: 'POST',
  });

  let upstreamBody: unknown;
  try {
    upstreamBody = await upstream.json();
  } catch {
    upstreamBody = null;
  }

  // FormSubmit can report a failure (e.g. the missing-Referer case above) with an HTTP 200, so `upstream.ok` alone
  // isn't a reliable success signal — the JSON body's own `success` field (a string, not a boolean) must agree.
  const upstreamSucceeded =
    upstream.ok &&
    typeof upstreamBody === 'object' &&
    upstreamBody !== null &&
    'success' in upstreamBody &&
    String((upstreamBody as { success: unknown }).success) === 'true';

  if (!upstreamSucceeded) {
    // biome-ignore lint/suspicious/noConsole: server-side diagnostic for an otherwise-silent upstream failure.
    console.error('FormSubmit rejected the trial-course submission', { body: upstreamBody, status: upstream.status });
    return jsonResponse({ error: 'Upstream submission failed' }, 502);
  }

  return jsonResponse({ ok: true }, 200);
}
