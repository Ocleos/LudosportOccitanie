# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page vitrine (showcase) site for Ludosport Occitanie, a sports association for lightsaber combat (Ludosport)
in Montpellier/Nîmes. All content is in French. Built with React 19 + TypeScript + Vite + Tailwind CSS v4.
Site content stays in French, but all developer-facing material (docs, config, comments, commit messages) is in
English.

## Audit

[AUDIT.md](AUDIT.md) is the project's living backlog: security vulnerabilities, technical improvements, and the
functional roadmap, each tagged with a priority (P0–P3), a time estimate, and the fix required. When an item from AUDIT.md
is fixed, update or remove its entry rather than letting the file drift out of sync with the codebase.

## Commands

Package manager is **Bun** (`bun.lock` is the committed lockfile).

- `bun install` — install dependencies
- `bun dev` — start the Vite dev server
- `bun run build` — type-check (`tsc`) then build for production (`vite build`)
- `bun run preview` — preview the production build
- `bun run lint` — run Biome check with autofix (`biome check . --write`)
- `bun run format` — run Biome formatter (`biome format . --write`)

There is no test suite/runner configured in this project.

### Linting/formatting

Biome (`biome.json`) is the single source of truth for both lint and format — no ESLint/Prettier. Notable
non-default rules: `noConsole: warn`, `noUnusedVariables: error`, Tailwind class sorting via the `nursery.useSortedClasses`
rule, and import/attribute/key sorting assists enabled (`organizeImports`, `useSortedAttributes`, `useSortedKeys`, etc.).
Formatting: single quotes, semicolons, trailing commas, 2-space indent, 120 char line width. Run `bun run lint`
before committing — the pre-commit hook enforces a clean `biome ci` run, and `commit-msg` enforces Conventional
Commits via commitlint (`@commitlint/config-conventional`).

## Architecture

- Single-page app: [src/App.tsx](src/App.tsx) renders one long page by composing top-level section components in
  order — `Home`, `Presentation`, `Places`, `TrialCourses`, `Events`, `SocialsNetworks`, `Contacts`. There is no
  router; navigation is anchor/scroll-based within this one page.
- Each top-level section lives in `src/components/*.component.tsx` and is a self-contained `<section aria-labelledby=...>`
  with its own heading id — this pattern (semantic section + labelled heading) is used consistently for accessibility
  and should be followed for new sections.
- `src/components/events/` groups the events feature: `events.component.tsx` holds a hardcoded list of `<EventCard />`
  entries (date range/description), `eventCard.component.tsx` is the presentational card. Event data is inline JSX,
  not sourced from a config/data file — update dates directly in `events.component.tsx`.
- `TrialCourses` ([src/components/trialCourses.component.tsx](src/components/trialCourses.component.tsx)) is the one
  interactive/stateful component: a controlled form that POSTs to FormSubmit (`VITE_FORM_SUBMIT_ENDPOINT` env var,
  see `.env`) as JSON. It includes basic spam mitigation (honeypot `website` field + a minimum time-on-page check
  before allowing submit) and inline validation/feedback state — follow this pattern for any other form added later.
- No global state management or data-fetching library — state is local `useState`/`useMemo` per component.
- Styling is Tailwind v4 using the CSS-first config in [src/index.css](src/index.css) (`@theme` block), not a
  `tailwind.config.js`. Custom theme tokens: `--color-primary`/`-dark`/`-light`, custom fonts `--font-neo` /
  `--font-neo-bold` (self-hosted NeoSansPro TTFs in `public/fonts`, loaded via `@font-face`), and an `xs` breakpoint.
  Prefer these tokens (`bg-primary`, `font-neo-bold`, etc.) over ad hoc values.
- Icons come from `lucide-react`. Static images/SVGs live under `src/assets/`; files served as-is (fonts, `logo.svg`)
  live under `public/`.
- SEO/meta tags (description, Open Graph, Twitter card, JSON-LD `SportsOrganization` schema) are hand-maintained
  directly in [index.html](index.html) — update this file when site content or URLs change.
- Path alias `src/*` is configured in `tsconfig.json` for absolute-style imports from `src/`.
