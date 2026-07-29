# Handoff — portfolio state

Last updated: 2026-07-29

## Where things stand

- **Design**: cinematic dark theme — ink black `#0A0A0B`, cream type, emerald `#2FD08C` accent, Anton condensed display, film grain, Lenis smooth scroll. Tokens in `lib/design.ts`, mirrored in `app/globals.css`.
- **Hero**: split-name treatment. "URGIAN" (solid) bleeds off the left, "PADMA" (outline) off the right; scrolling slides both to center as the hero exits (`components/cinematic/Hero.tsx`). No portrait right now — awaiting a new photo.
- **Proof of Work**: index cut to **3 flagship projects** (`components/cinematic/WorkCinematic.tsx`, data in `lib/projects.ts`) — 01 Drizzler, 02 FitForge, 03 Plum Referral Engine. LinkedIn CRM + HR MIS Dashboard removed from the site. Rows lead with a `hook` line and an explicit "View project →" affordance; each opens `/work/[slug]`.
- **Case pages (editorial case-study system, shipped 2026-07-29)**: `app/work/[slug]/page.tsx` renders story sections when present — Why it exists / What it solves / Who it's for / How it works (numbered, screenshot-ready) / Why it's useful / Under the hood — then an Email + LinkedIn DM CTA. Falls back to the legacy Problem/Build/Results layout for any project lacking story fields. Plum shows a "Visit live ↗" button (`liveUrl` → https://plum-referral-engine.vercel.app, mock data, public). Copy sourced verbatim from `docs/superpowers/specs/2026-07-29-project-interviews.md` — the only approved source. Plum is described as a working prototype on mock data, never "production".
- **Dossier below**: achievements / internships / research card rails (`lib/resume.ts`) + about — text and images unchanged from the light-theme version, restyled by tokens only.
- **Finale**: "Let's build something real" CTA + footer links (LinkedIn, GitHub, Decks Drive folder, Email).

## Running it

```bash
npm run dev   # NOTE: use port 3001 — Drizzler dev server usually owns 3000
npx next dev -p 3001
```

## Open items

1. **Case-page screenshots** — DEFERRED (shipped text-only 2026-07-29). Each `howItWorks` step and each project takes an optional `image`/`thumbnail`; the page renders text-only until filled. Chrome MCP `save_to_disk` did not land files on a reachable path this session, so shots weren't auto-captured. To add: drop images into `public/work/<slug>/`, set `image`/`caption`/`thumbnail` in `lib/projects.ts`, then `rm -rf .next/cache/images`. Plan tasks in `docs/superpowers/plans/2026-07-29-case-study-system.md` (Task 4) list exactly which screens to grab.
2. **Hero portrait** — Urgian will supply a new photo (both previous picks rejected). Background-removal pipeline ready: `python3 -m rembg` (u2net model cached), reference images in `assets/reference/`, output to `public/cinematic/`.
3. **Seedance video clips** — plan is 3 clips via Higgsfield MCP (hero orbit, builder desk, gallery walk) scroll-scrubbed as frame sequences. MCP server was never connected; add it, restart the Claude session, then swap clips into the existing scroll rig in `Hero.tsx`.
4. **Deploy** — localhost only. Vercel deploy pending Urgian's go-ahead.
5. **FitForge + Drizzler live links** — case pages have a `liveUrl` slot (currently empty for both); fill once each is deployed.

## Content rules (do not violate)

See `CLAUDE.md` — never "an MBA who builds", bullets not paragraphs, case summaries from real decks only, no team names or "beat teams from X" filler.
