# Editorial Case-Study System — Design

Date: 2026-07-15
Status: awaiting Urgian's review

## Goal

Make the portfolio answer a non-technical startup founder's real questions — why was this built, what does it solve, who is it for, what came out of it — instead of listing features. Target takeaway after reading a case page: *"builder with real business depth, understands product, strong work ethic — must-have."*

## Audience

Startup founders and senior business managers. Not technical. They skim, they want proof they can see, they don't read architecture jargon.

## Scope

- Site shows **3 projects only**: Drizzler, FitForge, Plum — all get deep treatment.
- **LinkedIn Job CRM and HR MIS Dashboard removed entirely** from site (per Urgian, 2026-07-15).
- Every case page carries a **"Visit live →" link slot**: Plum points to `https://plum-referral-engine.vercel.app` (verified live); FitForge and Drizzler slots stay empty until deployed, explainer pages built now regardless.
- Out of scope this push: hero portrait, Higgsfield video clips, portfolio's own Vercel deploy.

## 1. Data shape — `lib/projects.ts`

New optional fields on `Project`, replacing reliance on flat `problem` / `build` / `metrics`:

| Field | Content |
|---|---|
| `whyItExists` | Origin story — what triggered building it |
| `whatItSolves` | The pain, in founder language |
| `whoItsFor` | Target customer named plainly (e.g. "someone with 300 saved LinkedIn jobs and no system") |
| `howItWorks` | Walkthrough steps; each step = short text + screenshot (`{ text, image, caption }`) |
| `whyUseful` | Output + impact — what exists now that didn't before; real numbers only |
| `techNotes` | Small mono footnote, skippable, bottom of page |
| `liveUrl` | Deployed app URL; renders a prominent "Visit live →" button when set |

Rules:

- All new fields optional. Page renders only filled sections — until content interview happens, current copy stays live. Pages never look broken mid-migration.
- Content sourced from Urgian's per-project interview (later step). **Nothing invented.**
- Copy style: short paragraphs (max 3 sentences) + bullets. No walls of text. No "MBA who builds" framing. No team names / "beat teams from X" filler.

## 2. Case page — calm editorial layout

`app/work/[slug]/page.tsx` redesign:

- Header: title → one-liner → status badge (unchanged pattern).
- Section order: **Why it exists → What it solves → Who it's for → How it works → Why it's useful → Under the hood → CTA.**
- "How it works": alternating text/screenshot blocks — the visual proof spine of the page.
- Reading column ~65ch, generous spacing.
- Existing dark cinematic tokens (`lib/design.ts`) kept; motion limited to subtle fades. No scroll-scrubbing on case pages.
- Every page ends with CTA: email + LinkedIn DM buttons.

## 3. Homepage work index rework

`components/cinematic/WorkCinematic.tsx`:

- HR dashboard and LinkedIn CRM rows deleted; numbering redone.
- New order: **01 Drizzler, 02 FitForge, 03 Plum.**
- Row copy leads with why/impact hook, not feature list.
- Small screenshot thumbnail per row — visual proof before the click.
- Rows made obviously clickable — explicit "View project →" affordance, not just hover styling.

## 4. Screenshot pipeline

- Claude runs each app locally and captures key screens via Chrome automation.
- Output to `public/work/<slug>/`.
- **Plum: test data only; any real customer field blurred before anything goes public.**
- Urgian reviews every shot before it ships.
- After replacing an image at same path: `rm -rf .next/cache/images` + hard refresh (repo gotcha).

## 5. Honesty fixes

- Plum copy currently says "Live in production" — false per Urgian (ideated version, not in client use). Reword to the truth; exact phrasing from interview.
- All metrics claims re-checked against reality during interview.

## 6. Build order

1. Schema + case-page template (renders old content until new content exists).
2. Homepage index rework (remove HR, reorder, hook copy placeholders).
3. Screenshot sessions per app (Drizzler → FitForge → Plum).
4. Content interview per project → fill sections → review → done.

Note: Plum's live deploy sits behind an auth gate — check what an anonymous visitor actually sees at the live URL before shipping the button; if it's a bare login screen, decide landing path with Urgian.

## Error handling / edge cases

- Missing screenshot for a step → step renders text-only.
- Project with zero new-format fields → page falls back to current Problem/Build/Results layout.
- `getProject` unknown slug → existing `notFound()` behavior unchanged.

## Testing

- `npx tsc --noEmit` after schema change.
- Manual pass on all 3 project pages at desktop + mobile widths (dev on port 3001).
- Verify HR dashboard and LinkedIn CRM slugs 404 after removal.
