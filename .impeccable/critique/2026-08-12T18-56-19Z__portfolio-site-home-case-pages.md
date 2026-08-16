---
target: portfolio site (home + case pages)
total_score: 21
max_score: 24
na_heuristics: 5,7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-08-12T18-56-19Z
slug: portfolio-site-home-case-pages
---
⚠️ DEGRADED: single-context (harness gates sub-agent spawning on explicit user request; none given — Assessment A formed before detector ran, isolation preserved by ordering)

Surface: portfolio home + /work/[slug] case pages · Mode: Experience

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Hover/scroll affordances solid; no route-transition feedback into case pages |
| 2 | Match System / Real World | 4 | Plain human language throughout ("Proof of work", "Why it exists") |
| 3 | User Control and Freedom | 3 | Case pages exit cleanly; 220vh hero forces a long scroll past the name |
| 4 | Consistency and Standards | 4 | One token system, cohesive; mono labels + hairlines everywhere |
| 5 | Error Prevention | n/a | Static site, no input/destructive actions |
| 6 | Recognition Rather Than Recall | 4 | Text-labeled nav, explicit "View project →", "← All work" breadcrumb |
| 7 | Flexibility and Efficiency | n/a | Experience surface |
| 8 | Aesthetic and Minimalist Design | 3 | Curated 3-project index is clean; three resume rails below add heavy density |
| 9 | Error Recovery | n/a | No error states surfaced |
| 10 | Help and Documentation | n/a | Experience surface |
| **Total** | | **21/24** | **Good (88%, top of band)** |

## Design Specificity Verdict

**Authored, not interchangeable — with one honest caution.** The signature is real: Fraunces calligraphic italic (SOFT 60 / WONK 1) carrying "Padma", "work", "something real"; pine-on-porcelain; the converging split-name; static print grain. A generic portfolio template does not make these choices. Clear POV.

Caution: warm paper (#F4F1E9) + high-contrast serif display + a single muted accent is precisely the cluster that reads as "AI-generated editorial" right now. Pine instead of terracotta and the italic variable-axis treatment pull it off the exact default, but it lives adjacent. The signature is strong enough to own the look — it just isn't yet pushed far enough to be unmistakable.

**Deterministic scan:** detect.mjs over app/ + components/ → `[]`, zero findings. Clean markup, no saturated-pattern flags. No browser overlay this run (headless capture of the Lenis hero runway is unreliable; verified from source).

## Overall Impression

A confident, genuinely well-built editorial portfolio that already clears the bar most don't. The single biggest opportunity isn't polish — it's **focus and pace**: the hero spends 2.2 screens on a name before the work appears, and below the three curated projects sit three more full-volume resume rails that dilute the "three killer builds" thesis the redesign was for.

## What's Working

- **The case-page spine.** Why it exists → what it solves → who it's for → how it works (numbered, screenshot per step) → why useful → under the hood. This is exactly what a non-technical founder needs, in their language, problem-first. Best part of the site.
- **The signature calligraphy.** Emphasis words in Fraunces italic give the whole site a hand-authored voice most portfolios lack.
- **Honesty as a design value.** Plum's "Working prototype on mock data" badge instead of a fake "live in production" builds more trust than a louder claim would.

## Priority Issues

- **[P1] The hero costs 2.2 screens before any proof.** `Hero.tsx` runs a `h-[220vh]` scroll runway to converge the name. In Experience mode the artifact should lead from the first viewport; here a skimming founder scrolls past two-plus screens of name animation before seeing one project. It's also what breaks screenshot capture.
  - **Why it matters:** highest-intent visitors (a founder deciding in 20 seconds) hit motion, not evidence.
  - **Fix:** cut the runway to ~120–130vh, or surface a project glimpse / the positioning line within the first screen so proof and name share the opening.
  - **Suggested command:** /impeccable layout

- **[P1] Two content systems compete below the fold.** After the 3-project "Proof of work" index, the page renders three more horizontal rails (Achievements up to 11 cards, Internships, Research) from `lib/resume`. The redesign sharpened to three deep builds; the full résumé dossier still plays at full volume underneath and dilutes that focus.
  - **Why it matters:** "three must-have builds" and "a wall of eleven achievement cards" pull against each other; the eye doesn't know where the thesis lives.
  - **Fix:** demote the rails — collapse Achievements to a curated top 3–4, or move the full dossier behind a "full record" disclosure, so the three projects stay the star.
  - **Suggested command:** /impeccable distill

- **[P2] The opening thesis is a name, not the work.** Strong typography, but the first screen sells identity before capability. For "must-have builder," the strongest possible opening might lead with a proof or the sharpest one-line claim.
  - **Why it matters:** first impression spends its one free second on a name every visitor already saw in the URL/nav.
  - **Fix:** decide deliberately — keep the name-hero as an artful overture (valid) or trade some of it for an immediate proof beat.
  - **Suggested command:** /impeccable shape

- **[P2] Mobile hero crowding unverified.** The subtitle is `absolute bottom-10` under a `clamp(...,12vw,11rem)` name at `h-dvh`. On small/short viewports the name and subtitle may collide.
  - **Why it matters:** a founder clicking from LinkedIn is on a phone.
  - **Fix:** verify at 375×667 and 390×844; give the subtitle a floor or convert to flow spacing if it overlaps.
  - **Suggested command:** /impeccable adapt

## Persona Red Flags

**Priya (non-technical startup founder, skimming to decide "is he a must-have builder?")** — lands on a name, not a build; must scroll past 2+ screens of animation before the first project; then, past the three sharp projects, hits eleven achievement cards with no signal of which three matter. Risk: leaves with "designs nicely" instead of "ships real products," because the proof is buried between an overture and a résumé dump.

**Jordan (first-timer, never saw this person before)** — nav is clearly labeled, "View project →" is unambiguous, case pages read top-to-bottom. Does well here. Only snag: no cue on the homepage that the three rows are the deep stories and the rails below are supporting — everything looks equally clickable.

**Casey (mobile, one-handed, from a LinkedIn tap)** — 220vh of hero is a lot of thumb-scrolling before payoff; horizontal card rails are thumb-friendly but there are three of them stacked. State/pace matters most here.

## Minor Observations

- Contact is mailto + LinkedIn only — fine at this scale; `mailto:` opens nothing for webmail-only users (P3).
- Top nav lists Achievements but not Internships/Research though both are sections — small inconsistency.
- `CLAUDE.md` is stale: it still describes the old ultramarine "technical dossier" theme and lists "LinkedIn Job CRM" as a project. Doc hygiene, not UI — worth a refresh so future work isn't misled.
- Reduced-motion is respected in the hero (good); confirm the letter track-in also no-ops under it.

## Questions to Consider

- What if the first viewport showed one project frame beside the name, so identity and proof land together?
- Do the three résumé rails earn their vertical cost, or would a single "full record" link serve the founder better?
- What would the *confident* version look like — one that trusts three builds to carry the whole page?
