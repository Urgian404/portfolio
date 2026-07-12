# Handoff — portfolio state

Last updated: 2026-07-12

## Where things stand

- **Design**: cinematic dark theme — ink black `#0A0A0B`, cream type, emerald `#2FD08C` accent, Anton condensed display, film grain, Lenis smooth scroll. Tokens in `lib/design.ts`, mirrored in `app/globals.css`.
- **Hero**: split-name treatment. "URGIAN" (solid) bleeds off the left, "PADMA" (outline) off the right; scrolling slides both to center as the hero exits (`components/cinematic/Hero.tsx`). No portrait right now — awaiting a new photo.
- **Proof of Work**: single full index of all 5 projects (`components/cinematic/WorkCinematic.tsx`, data in `lib/projects.ts`) — Plum Referral Engine, LinkedIn Job CRM, HR MIS Dashboard, FitForge, Drizzler. Each row opens `/work/[slug]`.
- **Dossier below**: achievements / internships / research card rails (`lib/resume.ts`) + about — text and images unchanged from the light-theme version, restyled by tokens only.
- **Finale**: "Let's build something real" CTA + footer links (LinkedIn, GitHub, Decks Drive folder, Email).

## Running it

```bash
npm run dev   # NOTE: use port 3001 — Drizzler dev server usually owns 3000
npx next dev -p 3001
```

## Open items

1. **Hero portrait** — Urgian will supply a new photo (both previous picks rejected). Background-removal pipeline ready: `python3 -m rembg` (u2net model cached), reference images in `assets/reference/`, output to `public/cinematic/`.
2. **Seedance video clips** — plan is 3 clips via Higgsfield MCP (hero orbit, builder desk, gallery walk) scroll-scrubbed as frame sequences. MCP server was never connected; add it, restart the Claude session, then swap clips into the existing scroll rig in `Hero.tsx`.
3. **Deploy** — localhost only. Vercel deploy pending Urgian's go-ahead.

## Content rules (do not violate)

See `CLAUDE.md` — never "an MBA who builds", bullets not paragraphs, case summaries from real decks only, no team names or "beat teams from X" filler.
