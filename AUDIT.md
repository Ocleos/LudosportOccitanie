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

---

## P1 — High priority

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

---

## Summary

| # | Title | Priority | Estimate |
|---|---|---|---|
| 1 | Trial course form bypassable (spam) | P0 | 3–4h |
| 9 | Missing navigation + CTA | P1 | 3–4h |
| 10 | Editorial content to expand | P2 | 1–2 days |
| 11 | Externalize static data | P2 | 3–4h |
| 16 | Unused asset `SpadaLunel.svg` | P3 | 5min |
| 17 | Visual harmonization | P3 | 3–4h |
| 18 | Component tests | P3 | 4–6h |

**No critical XSS/injection/RCE vulnerability was identified** — the site is static, with no
`dangerouslySetInnerHTML`, no `eval`, and no proper backend (aside from the third-party FormSubmit service). The
P0/P1 security items are mostly about configuration hygiene and contact-form robustness, not an exploitable flaw
that could compromise the site or its visitors.
