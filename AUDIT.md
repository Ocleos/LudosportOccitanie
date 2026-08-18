# Project Audit — Ludosport Occitanie

Audit performed on 2026-08-18 against the current state of the repository (`main` branch). Groups the vulnerabilities
found, technical improvements, and the functional roadmap into a single prioritized backlog.

## Priority legend

| Priority | Meaning | Target timeframe |
|---|---|---|
| **P0** | Critical — actively impacts security or the main conversion channel | Within 1 week |
| **P1** | High — real risk (security, legal, perf, SEO) or major conversion lever | Within 1 month |
| **P2** | Medium — quality, maintainability, content | This quarter |
| **P3** | Low — polish, cleanup, nice-to-have | Whenever available |

Estimates assume a single dev already familiar with the project (Bun/Vite/React/Tailwind/Biome stack).

---

## P0 — Critical

### 1. "Trial course" form bypassable client-side (spam / abuse)
- **Category**: Security
- **Estimate**: 3–4h
- **Problem**: [trialCourses.component.tsx](src/components/trialCourses.component.tsx) POSTs JSON directly to
  `VITE_FORM_SUBMIT_ENDPOINT` (FormSubmit) with `_captcha: 'false'`. `VITE_*` variables are **inlined in plain text
  into the shipped JS bundle**: anyone can extract the FormSubmit URL and POST to it directly (`curl`/script),
  completely bypassing the honeypot (`website`) and anti-bot delay (3s), which are client-side JS only. This form
  is the site's main conversion channel (trial course sign-up): a spam flood could bury real requests or exhaust
  the free FormSubmit plan's monthly quota, breaking the channel entirely.
- **Fix**:
  - Re-enable real anti-spam on the service side: FormSubmit captcha (`_captcha: 'true'`) or front the POST with
    Cloudflare Turnstile / hCaptcha.
  - Consider proxying the submission through a small serverless function (Vercel Function) that applies
    per-IP rate limiting before relaying to FormSubmit, instead of a direct browser → FormSubmit call.
  - Keep the honeypot + delay as additional defense (already in place), but stop relying on them as the only barrier.

### 2. `.env` tracked in Git
- **Category**: Security / configuration hygiene
- **Estimate**: 30min
- **Problem**: [.env](/.env) is tracked by Git (confirmed via `git ls-files`) and missing from [.gitignore](.gitignore).
  It contains the FormSubmit endpoint and target email in plain text in the history. The value ends up in the public
  bundle anyway (`VITE_` variable), so this isn't a strict secret leak, but it's a bad practice that blocks any
  future genuinely sensitive variable (third-party API key, etc.) from being added safely, and complicates
  per-environment config rotation (Vercel preview/prod).
- **Fix**:
  - Add `.env` and `.env*.local` to [.gitignore](.gitignore).
  - Untrack `.env` from Git (`git rm --cached .env`) and commit.
  - Create a `.env.example` (dummy values) documenting expected variables.
  - Set `VITE_FORM_SUBMIT_ENDPOINT` in the Vercel project's environment variables rather than in a tracked file.
  - Optional: purge Git history (`git filter-repo`) if the email address must no longer appear in old commits —
    decide based on perceived sensitivity; real-world impact here is low.

---

## P1 — High priority

### 3. Dev dependencies with known vulnerabilities (high severity)
- **Category**: Security (supply chain)
- **Estimate**: 30min
- **Problem**: `bun audit` reports 5 "high" severity vulnerabilities via the
  `@commitlint/cli → @commitlint/load → cosmiconfig / config-validator` chain: `fast-uri` (host confusion via
  mis-canonicalized IDN/backslash — GHSA-4c8g-83qw-93j6, GHSA-7p8r-x3mc-p8w7, GHSA-v2hh-gcrm-f6hx) and `js-yaml`
  (denial of service via quadratic CPU consumption — GHSA-52cp-r559-cp3m, GHSA-5p4m-2wfm-xmqj / CVE-2026-59870).
  Limited real-world impact (dev dependencies, not shipped to prod), but they run on every local commit and in the
  `commit-msg` hook.
- **Fix**: `bun update` (or `bun update --latest` if needed) to bump `@commitlint/*` past the vulnerable versions,
  then re-run `bun audit` to confirm 0 remaining vulnerabilities.

### 4. Open Graph image broken for social sharing
- **Category**: SEO / Social
- **Estimate**: 1h
- **Problem**: [index.html:24](index.html#L24) declares `<meta property="og:image" content="/logo.svg">`. Facebook,
  LinkedIn, X/Twitter and most crawlers **don't render SVG** as `og:image` and generally require an **absolute
  URL**. Result: no preview image when a site link is shared — a direct hit to visibility/recruitment, which is
  exactly the goal of the "online presence" roadmap item below.
- **Fix**: Generate a dedicated PNG/JPG asset (1200×630px recommended), place it in `public/`, and reference an
  absolute URL: `<meta property="og:image" content="https://ludosport-occitanie.vercel.app/og-image.png">`.
  Add `og:image:width` / `og:image:height` to make rendering more reliable.

### 5. Unoptimized background image (3.7 MB)
- **Category**: Performance
- **Estimate**: 1–2h
- **Problem**: [src/assets/bgWallpaper.png](src/assets/bgWallpaper.png) weighs 3.7 MB and is loaded as `bg-fixed`
  on `<main>` in [App.tsx](src/App.tsx), so on every resolution including mobile. By far the heaviest asset on the
  site, directly hurting LCP and mobile data usage.
- **Fix**: Re-encode as WebP/AVIF (target < 300 KB), generate 2–3 responsive variants (`srcset`/CSS `image-set()`
  or `<picture>`), and verify with mobile Lighthouse after optimization. Overlaps with the "performance" roadmap
  item below.

### 6. YouTube embed with no consent handling (GDPR/CNIL)
- **Category**: Legal compliance
- **Estimate**: 2h
- **Problem**: [presentation.component.tsx](src/components/presentation.component.tsx) loads
  `youtube.com/embed/...` directly, which drops Google cookies/trackers as soon as the page loads, with no prior
  consent — not compliant with CNIL recommendations for a French site aimed at the general public.
- **Fix**: Switch to `youtube-nocookie.com` (reduces but doesn't eliminate tracking), and/or add a "click to load
  video" facade (static preview + play button that only injects the iframe after an explicit click = implicit
  consent to the action). Avoid introducing a full cookie banner if the site has no other tracker — the facade
  is generally enough for this use case.

### 7. Missing HTTP security headers
- **Category**: Security
- **Estimate**: 1h
- **Problem**: No `vercel.json` (or equivalent) configures any headers. The site therefore runs on Vercel defaults
  only — no explicit CSP, `X-Frame-Options`, `Referrer-Policy`, or `Permissions-Policy`. Low risk given the site's
  simplicity (no user-generated content rendered, no `dangerouslySetInnerHTML`), but it's a free safety net to add.
- **Fix**: Add a `vercel.json` with at minimum `X-Content-Type-Options: nosniff`,
  `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY` (or `frame-ancestors 'none'` via CSP),
  and a baseline CSP allowing `frame-src https://www.youtube.com` (or `youtube-nocookie.com`) for the presentation
  iframe.

### 8. Commit the pre-commit hook fix
- **Category**: Tooling
- **Estimate**: 5min
- **Problem**: [CLAUDE.md](CLAUDE.md) documents that `.husky/pre-commit` still invokes `pnpm biome ci .` (a leftover
  from before the Bun migration) — but the current working file already contains `bunx biome ci .` (shown as
  modified, uncommitted, in `git status`). Until this is committed, any other clone of the repo keeps the broken
  hook (fails because `pnpm` is no longer installed).
- **Fix**: Commit [.husky/pre-commit](.husky/pre-commit) as-is, then update the stale note in
  [CLAUDE.md](CLAUDE.md) that still mentions `pnpm`.

### 9. Missing navigation and call-to-action (conversion)
- **Category**: Improvement / Conversion
- **Estimate**: 3–4h
- **Problem**: [App.tsx](src/App.tsx) stacks sections with no anchor menu and no visible CTA on landing. The
  trial-course form is only reachable after several scrolls (`Home` → `Presentation` → `Places`).
- **Fix**: Add a sticky nav (anchors to `#trial-courses-title`, `#places-title`, `#events-title`,
  `#contacts-title`) plus a "Book a trial course" CTA button visible in the `Home` section, scrolling to the form.
  Follow the existing accessibility pattern (section + heading id).

---

## P2 — Medium priority

### 10. Editorial content to expand
- **Category**: Improvement / Content
- **Estimate**: 1–2 days (writing + integration)
- **Details**:
  - "About" section (association history, values, how it operates).
  - Detailed lightsaber section (what it is, how a session runs, skill levels, benefits).
  - Testimonials / event photos to make the site feel more alive.
  - Restructured "Our events" section (currently a plain list of hardcoded `<EventCard>` in
    [events.component.tsx](src/components/events/events.component.tsx)), plus a possible "Partners/Clubs" section.
- **Fix**: Content writing (outside dev scope), then integration following the existing
  `section aria-labelledby` pattern.

### 11. Externalize static data
- **Category**: Improvement / Maintainability
- **Estimate**: 3–4h
- **Problem**: Events ([events.component.tsx](src/components/events/events.component.tsx)), locations/schedules
  ([places.component.tsx](src/components/places.component.tsx)) and social links
  ([socialsNetworks.component.tsx](src/components/socialsNetworks.component.tsx)) are hardcoded JSX. Any update
  (new event date, schedule change) requires a code change plus a deploy.
- **Fix**: Create typed `src/data/events.ts`, `src/data/places.ts`, consumed by components via `.map()`. Keeps the
  same output while reducing the risk of mistakes during frequent updates (event dates especially).

### 12. Technical SEO: sitemap, robots.txt
- **Category**: SEO
- **Estimate**: 1h
- **Problem**: No `sitemap.xml` or `robots.txt` in `public/`. Impact is limited since the site is single-page, but
  these are standard expectations for search engines and easy to add.
- **Fix**: Add `public/robots.txt` (`Allow: /`, referencing the sitemap) and a minimal `public/sitemap.xml` with
  the canonical URL already present in [index.html](index.html).

### 13. No CI
- **Category**: Tooling
- **Estimate**: 1–2h
- **Problem**: Nothing automatically runs `bun run build` / `bun run lint` on PRs — only the local pre-commit hook
  guards against this, and it's bypassable (`--no-verify`) and absent for contributors who don't install it.
- **Fix**: Add a GitHub Actions workflow (`.github/workflows/ci.yml`) running `bun install`, `bun run lint`,
  `bun run build` on every PR to `main`.

### 14. Verify color contrast
- **Category**: Accessibility
- **Estimate**: 1h (audit) + variable fixes
- **Context**: A good chunk of baseline accessibility is already in place ([index.css](src/index.css): visible
  `:focus-visible` ring, working skip-link; [App.tsx](src/App.tsx) consistent `section`/`h1`/`h2` semantic
  structure). What remains is formally checking the contrast of the orange `--color-primary`
  (`oklch(0.6916 0.1773 51.92)`) against the dark background for small text, and of text over
  [bgWallpaper.png](src/assets/bgWallpaper.png) once the image is optimized (item 5).
- **Fix**: Run the palette through a WCAG checker (e.g. Lighthouse/axe DevTools), adjust `--color-primary` or
  font size if the AA ratio (4.5:1 normal text / 3:1 large text) isn't met.

### 15. Missing `allow` attribute on the YouTube iframe
- **Category**: Technical / best practice
- **Estimate**: 15min
- **Problem**: [presentation.component.tsx](src/components/presentation.component.tsx) has no `allow` attribute
  on the `<iframe>` — fullscreen controls work (`allowFullScreen` is present) but the standard features
  YouTube recommends (`picture-in-picture`, `clipboard-write`, etc.) are missing.
- **Fix**: Add `allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"`. Do this
  alongside item 6 (switch to `youtube-nocookie.com`).

---

## P3 — Low priority

### 16. Unused asset: `SpadaLunel.svg`
- **Category**: Cleanup
- **Estimate**: 5min
- **Problem**: [src/assets/SpadaLunel.svg](src/assets/SpadaLunel.svg) isn't imported anywhere in `src/` (no
  "Lunel" club shown in [places.component.tsx](src/components/places.component.tsx)).
- **Fix**: Delete the file, or integrate it if a 3rd training location in Lunel is meant to be added (consistent
  with item 10 if a new school opens).

### 17. Visual harmonization and readability
- **Category**: Improvement / UX
- **Estimate**: 3–4h
- **Details**: Fairly long italic paragraphs in [home.component.tsx](src/components/home.component.tsx); spacing
  and text sizes to harmonize across sections; add more striking visuals (real photos vs. SVG/logos only). Best
  tackled after content restructuring (item 10).

### 18. Component tests
- **Category**: Improvement / Quality
- **Estimate**: 4–6h (setup + initial tests)
- **Context**: No test runner is currently configured (confirmed in [CLAUDE.md](CLAUDE.md)). Given the site's size
  (mostly presentational), the ROI of exhaustive testing is low — but the
  [TrialCourses](src/components/trialCourses.component.tsx) component (the site's only interactive/stateful logic:
  validation, honeypot, network call) justifies minimal coverage.
- **Fix**: Add Vitest + React Testing Library, targeting `TrialCourses` first (required-field validation, honeypot
  detection, anti-bot delay, network error handling).

### 19. PWA / multi-size favicons
- **Category**: Improvement
- **Estimate**: 1h
- **Problem**: Only a single SVG favicon is declared ([index.html:31](index.html#L31)) — no PNG fallback
  (`apple-touch-icon`, multi-resolution favicons), no `manifest.json`.
- **Fix**: Generate a favicon set (favicon.ico, apple-touch-icon.png, 192/512 icons for `manifest.json`) via a
  tool like RealFaviconGenerator, from [public/logo.svg](public/logo.svg).

### 20. Minor dependency updates
- **Category**: Tooling
- **Estimate**: 30min–1h (+ regression testing)
- **Details**: Beyond the security fix in item 3, run `bun outdated` periodically and document the update cadence
  (e.g. monthly) in [CLAUDE.md](CLAUDE.md).

---

## Summary

| # | Title | Priority | Estimate |
|---|---|---|---|
| 1 | Trial course form bypassable (spam) | P0 | 3–4h |
| 2 | `.env` tracked in Git | P0 | 30min |
| 3 | Dev dependency vulnerabilities (`bun audit`) | P1 | 30min |
| 4 | Broken OG image (SVG + relative URL) | P1 | 1h |
| 5 | Unoptimized `bgWallpaper.png` (3.7 MB) | P1 | 1–2h |
| 6 | YouTube embed with no consent (GDPR) | P1 | 2h |
| 7 | Missing HTTP security headers | P1 | 1h |
| 8 | Commit the pre-commit hook fix | P1 | 5min |
| 9 | Missing navigation + CTA | P1 | 3–4h |
| 10 | Editorial content to expand | P2 | 1–2 days |
| 11 | Externalize static data | P2 | 3–4h |
| 12 | Sitemap / robots.txt | P2 | 1h |
| 13 | No CI | P2 | 1–2h |
| 14 | Verify color contrast | P2 | 1h+ |
| 15 | Missing `allow` attribute on iframe | P2 | 15min |
| 16 | Unused asset `SpadaLunel.svg` | P3 | 5min |
| 17 | Visual harmonization | P3 | 3–4h |
| 18 | Component tests | P3 | 4–6h |
| 19 | PWA / multi-size favicons | P3 | 1h |
| 20 | Minor dependency updates | P3 | 30min–1h |

**No critical XSS/injection/RCE vulnerability was identified** — the site is static, with no
`dangerouslySetInnerHTML`, no `eval`, and no proper backend (aside from the third-party FormSubmit service). The
P0/P1 security items are mostly about configuration hygiene and contact-form robustness, not an exploitable flaw
that could compromise the site or its visitors.
