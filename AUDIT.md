# Project Audit — Ludosport Occitanie

Audit performed on 2026-08-18 against the state of the repository at the time (`main` branch), reviewed again on
2026-08-23 against the `v2` branch after the migration from a single-page anchor-scroll layout to a multi-route
TanStack Router app with dedicated pages (`/`, `/le-sport`, `/cours`, `/cours-essai`, `/evenements`, `/contacts`).
A further pass, same day, re-checked the current `v2` sources end-to-end (`bun run build`, `bun run lint`, `bun audit`,
plus a manual review of every component, route, and config file) — no new critical/high-severity issue was found;
two medium-priority hardening/perf items and one low-priority cleanup item were added below.
Groups the vulnerabilities found, technical improvements, and the functional roadmap into a single prioritized
backlog.

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

---

## P1 — High priority

---

## P2 — Medium priority

---

## P3 — Low priority

### 1. Component tests
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
| 1 | Component tests | P3 | 4–6h |

**No critical XSS/injection/RCE vulnerability was identified** — the frontend is static, with no
`dangerouslySetInnerHTML` and no `eval`; the only backend surface is the [api/trial-course.ts](api/trial-course.ts)
Edge Function proxying to the third-party FormSubmit service. It keeps the FormSubmit endpoint/CC addresses in
server-only env vars (never inlined into the client bundle) and re-checks the honeypot, fill-time window, and
request origin server-side, so a direct `curl`/script POST to the endpoint no longer bypasses the form's anti-spam
measures. `bun audit` reports no known vulnerabilities in current dependencies, and `bun run build`/`bun run lint`
both pass clean.
