# Project story interviews — raw structured notes

Source: Urgian, spoken interviews 2026-07-29. This is the ONLY approved source for case-page story copy. Nothing outside this file may be invented.

## 01 Drizzler

**Origin.** Scrolling Uniqlo and similar sites; models styled pieces in ways that would never occur to him. Styling is taste built from obsession and experience — trending knowledge, color sense — which he doesn't have. Second realization: judging one shirt on you is useless without your whole wardrobe in the system.

**Core insight.** You never wear one piece alone — a shirt always lives with pants, shoes, a jacket. Offline trial tells you how a piece looks on you, never how it works with what you own. Online shopping killed even the trial. Drizzler closes the trial gap online and adds the one thing offline can't do: test a purchase against your entire wardrobe before buying.

**Use flow.** One-time wardrobe upload (designed to pull from order emails/SMS rather than photos — exact product data, no guessing from pictures) + body photos/videos for fit. Then: shopping online → copy product link → paste in Drizzler → combinations with your actual clothes, on your body, in a taste you pick (Uniqlo-minimal, influencer street, any anchor).

**Who it's for.** Two ends of the spectrum, both online shoppers: (a) people with basic taste who want to dress better without understanding style; (b) fashion-obsessed people who follow styling influencers. Long-term: everyone who buys clothes online.

**Business angle.** Better purchase decisions → higher purchase intent/confidence. GTM idea: launch through fashion influencers on Instagram; later a retailer plug-in ("see it on you" button on Uniqlo itself, no copy-pasting links).

**Today's reality (verified from repo, 2026-07-29).** Screens: wardrobe / dress-me / taste / lookbook / me. Import scans purchase SMS from Mac Messages (in-app permission flow, unsynced-iPhone detection). Try-on renders via IDM-VTON with Gemini fallback. v1 end-to-end: wardrobe, try-on, stylist, taste engine. Verify live during screenshot pass before quoting specifics.

**Privacy.** His face + wardrobe in screenshots: approved public, no blurring.

## 02 FitForge

**Origin.** Total gym newbie. Googled plans are generic — they don't know his limits, lifts, energy. Even ChatGPT given his weight can't know how much he can push. Only fix: a system that learns him.

**Core loop.** Registers real performance — 50 kg lat pulldown at breaking point, 35 kg Romanian deadlift near limit. Remembers failure points, strength curve, goals (thicker wrists, broader shoulders), infers underdeveloped muscles from what he can't lift → hyper-personal plan.

**Meals half.** Nutrition interlocked with training. Knows his actual kitchen: no stove, no airfryer, induction only — never suggests uncookable meals; knows what he can cook. Tracks gaps (packet of chips → protein shortfall). Ate badly / skipped dinner → next day's workout auto-adjusts for recovery and fatigue.

**Signature interaction.** No typing. Dictate the day in 2–3 minutes ("lat pulldown 52.5 kg, one set of 10, difficulty 8") → parsed, logged, remembered → next day's routine + meal plan generated.

**Beginner care.** Each suggested exercise gets a dropdown form video — for novices who can't afford trainers and don't like asking.

**Who it's for.** Gym newcomers with no starting point, flummoxed by online information overload, can't afford / avoid personal trainers.

**Walkthrough.** Open app → today's routine with your weights and progression shown (52.5 → 55 → 57.5) → train → dictate report (workout + meals) → tomorrow generated.

**Health detail.** "Low bone density" stays public — his explicit call.

## 03 Plum Referral Engine

**Origin / why it matters.** Referral programs don't exist in Indian insurance — regulation, not laziness. Standard mechanics reward both sides; Indian insurance rules make rewarding the referred party legally dangerous. Workaround thesis: reward only the referrer, in non-cash form (Zomato coupons, Amazon vouchers), keeping regulator-safe distance. (He notes even the team wasn't fully certain of the navigable path — this was the working hypothesis.)

**What counts.** Signup ≠ successful referral. Counts only when the referred person gets on a call / shows real intent, through to taking a policy. No junk referrals.

**Reward psychology.** First successful referral = ₹500 gateway reward regardless — pushes even people who'd never refer. Insurance converts slowly, so each later friend who eventually closes triggers a reminder + smaller reward: referrer sees the pipeline paying and pushes more people in. One referrer can earn multiple times off one sharing burst.

**Sharpest insight.** People refer the sales agent who closed them, not the company. Referred friends close best with that same agent. System routes referrals to the closing agent.

**Timing insight.** Referral ask fires at peak-satisfaction moments: just became a paid customer, just used a perk (Cult discount), just had a claim paid. Not random spam.

**Personalization.** Groq-powered engine writes each referral message from the customer's own data — he knew the schema inside out (75-column customers table).

**Honest status (public copy must match).** Full journey works end-to-end on the deployed site, on mock data. Not wired to Plum's production database, real WhatsApp sending (would need the company's official WhatsApp connection), or real reward payout. Ideated and built during his internship; not adopted by the company. Never say "live in production."

**Live link.** https://plum-referral-engine.vercel.app — public, mock data, ship the button as-is.
