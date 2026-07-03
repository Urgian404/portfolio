@AGENTS.md

# Urgian Padma — Personal Portfolio

Personal portfolio site for Urgian Padma (IIM Indore, IPM). Single-page home plus `/work/[slug]` case-study pages.

## Stack

- Next.js 16 (App Router, Turbopack), TypeScript, Tailwind
- Dev server: `npm run dev` → localhost:3000
- Typecheck: `npx tsc --noEmit`

## Structure

- `app/page.tsx` — home: hero, work index, three horizontal sliders (Achievements, Internships & Live Projects, Academic Projects & Research), About, Contact
- `app/work/[slug]/page.tsx` — case-study pages, data from `lib/projects.ts`
- `lib/resume.ts` — all slider card data (`Card` type). Achievements A1–A11, internships I1–I5, research R1–R5
- `lib/projects.ts` — project case studies (Plum Referral Engine, LinkedIn Job CRM, FitForge)
- `lib/design.ts` — design tokens; all visual retuning happens here
- `components/CardRail.tsx` — scroll-snap horizontal slider
- `public/achievements/` — proof images for achievement cards, mostly pulled from LinkedIn posts

## Design system

"Technical dossier": paper/ink palette with ultramarine accent, Bricolage Grotesque (display) / Instrument Sans (body) / IBM Plex Mono (labels), sharp corners, hairline borders.

## Content rules (important)

- Never frame Urgian as "an MBA who builds" — he considers it cheap. Plain framing: name, marketing + AI interests, likes startups and building.
- Bullet points everywhere, no big paragraphs.
- Achievement cards describe the actual case problem, the solution, and the outcome — written as plain summaries, not dense jargon. No team names, no "beat teams from X" filler.
- Card copy is sourced from his real solution decks (under `~/Desktop/MacBook Backup/All Documents/`) and LinkedIn proof posts — don't invent case details.

## Gotchas

- After replacing an image at the same path under `public/`, run `rm -rf .next/cache/images` and hard-refresh, or Next serves the stale version.
