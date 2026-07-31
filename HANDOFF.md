# Handoff — portfolio state

Last updated: 2026-07-31

## Where things stand

- **Design**: light "Monograph" theme — warm porcelain `#F4F1E9`, sepia-black ink `#211C17`, deep pine accent `#2E5A4B`. Fraunces serif display carries the calligraphy: emphasis words set in its italic via the `.calligraphy` utility. IBM Plex Mono for labels, Instrument Sans for prose. Lenis smooth scroll, subtle static print grain. Tokens in `lib/design.ts`, mirrored in `app/globals.css`.
- **Hero**: split-name treatment in Fraunces — "Urgian" (roman) bleeds off the left, "*Padma*" (pine italic) off the right; scrolling slides both to center as the hero exits (`components/cinematic/Hero.tsx`). Faint pine wash, no portrait yet — awaiting a new photo.
- **Proof of Work**: index cut to **3 flagship projects** (`components/cinematic/WorkCinematic.tsx`, data in `lib/projects.ts`) — 01 Drizzler, 02 FitForge, 03 Plum Referral Engine. LinkedIn CRM + HR MIS Dashboard removed from the site. Rows lead with a `hook` line and an explicit "View project →" affordance; each opens `/work/[slug]`.
- **Case pages (editorial case-study system, shipped 2026-07-29)**: `app/work/[slug]/page.tsx` renders story sections when present — Why it exists / What it solves / Who it's for / How it works (numbered, screenshot-ready) / Why it's useful / Under the hood — then an Email + LinkedIn DM CTA. Falls back to the legacy Problem/Build/Results layout for any project lacking story fields. Plum shows a "Visit live ↗" button (`liveUrl` → https://plum-referral-engine.vercel.app, mock data, public). Copy sourced verbatim from `docs/superpowers/specs/2026-07-29-project-interviews.md` — the only approved source. Plum is described as a working prototype on mock data, never "production".
- **Screenshots**: real product shots live in every case page's "How it works" (`public/work/<slug>/`) — Drizzler (wardrobe, style-this result, taste), FitForge (today + progress, phone frames), Plum (pipeline, engine diagram, portal, analytics). Recovered from the session transcript after clipboard captures didn't persist; index rows carry 16:10 thumbnails.
- **Dossier below**: achievements / internships / research card rails (`lib/resume.ts`) + about — text and images unchanged, restyled by tokens only.
- **Finale**: "Let's build something real" CTA + footer links (LinkedIn, GitHub, Decks Drive folder, Email).

## Running it

```bash
npm run dev   # NOTE: use port 3001 — Drizzler dev server usually owns 3000
npx next dev -p 3001
```

## Open items

1. **Hero portrait** — Urgian will supply a new photo (both previous picks rejected). Background-removal pipeline ready: `python3 -m rembg` (u2net model cached), reference images in `assets/reference/`, output to `public/cinematic/`. Note: the emerald rim treatment was a dark-theme device — re-tune for the light theme when the photo lands.
2. **Seedance video clips** — plan is 3 clips via Higgsfield MCP (hero orbit, builder desk, gallery walk) scroll-scrubbed as frame sequences. MCP now connected; swap clips into the existing scroll rig in `Hero.tsx` when ready.
3. **Deploy** — localhost only. Vercel deploy pending Urgian's go-ahead.
4. **FitForge + Drizzler live links** — case pages have a `liveUrl` slot (currently empty for both); fill once each is deployed. Plum's is live.

## Content rules (do not violate)

See `CLAUDE.md` — never "an MBA who builds", bullets not paragraphs, case summaries from real decks only, no team names or "beat teams from X" filler.
