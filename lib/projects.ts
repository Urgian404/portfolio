export type HowItWorksStep = {
  text: string;
  image?: string; // path under public/, e.g. /work/drizzler/01-wardrobe.png
  caption?: string;
  phone?: boolean; // true = portrait phone screenshot, render in a narrow centered frame
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  oneLiner: string;
  status: string;
  hook?: string; // index-row lead line, leads with why/impact
  summary?: string; // index-row explanation — 2-3 sentences of what it actually does
  thumbnail?: string; // index-row image, path under public/
  liveUrl?: string; // renders "Visit live ↗" when set
  // Legacy layout fields — case page falls back to these when story fields absent
  problem: string;
  build: string[];
  metrics: string[];
  // Story fields
  pullQuote?: string; // signature line, set large in the calligraphy between sections
  whyItExists?: string[];
  whatItSolves?: string[];
  whoItsFor?: string[];
  howItWorks?: HowItWorksStep[];
  whyUseful?: string[];
  techNotes?: string;
};

export const projects: Project[] = [
  {
    slug: "drizzler",
    num: "01",
    title: "Drizzler",
    oneLiner:
      "Should I buy this — and what do I wear today? Answered on your own body.",
    status: "v1 working end to end",
    hook: "Retailers show clothes on a stock model — they can't know your closet. Drizzler renders any buy on you, styled against what you already own, with a verdict before you pay.",
    pullQuote: "No seller can copy this claim — they don't know your closet.",
    summary:
      "Paste a product link and Drizzler renders the piece on your body, styled into full outfits from clothes you already own — then calls buy or skip. A one-time import builds the wardrobe from purchase history, and a taste engine dresses you in the language of brands and influencers you pick. v1 runs end to end: wardrobe, try-on, stylist, taste.",
    thumbnail: "/work/drizzler/style-this.jpg",
    whyItExists: [
      "Shopping moved online and the trial room vanished with it. And even the trial room only ever judged one piece in a mirror — never how it sits with everything already in your closet. Nobody wears one item alone, so every online buy is a gamble: will this actually work with what I own?",
    ],
    whatItSolves: [
      "Drizzler settles the gamble before you pay. Paste a product link and it builds full outfits around the piece from clothes you already own — worn on you, in a taste you pick.",
      "It does what no trial room could: score a buy against your whole wardrobe, end on a plain buy-or-skip verdict, and hand you every way to wear it.",
    ],
    whoItsFor: [
      "People with plain taste who want to dress better without studying fashion.",
      "Style obsessives who want an influencer's eye turned on their own closet.",
    ],
    howItWorks: [
      {
        text: "Your wardrobe loads itself from purchase history — exact products, exact sizes. Add a few photos of yourself so outfits render on your body.",
        image: "/work/drizzler/wardrobe.jpg",
        caption: "The wardrobe — 38 pieces imported from purchase history, each sized and categorized.",
      },
      {
        text: "Shopping? Paste the product link. Drizzler builds full looks around it from clothes you already own.",
        image: "/work/drizzler/style-this.jpg",
        caption: "Paste a link → outfits built from what you own, tried on you. Verdict: works with 8 of 38 items across 6 combos.",
      },
      {
        text: "Pick a taste to style by — a brand, an influencer, a magazine. It studies the reference and dresses you in that language.",
        image: "/work/drizzler/taste.jpg",
        caption: "Taste anchors — each brand is researched, then distilled into a per-occasion style brief the stylist follows.",
      },
      {
        text: "Not buying? 'Dress Me' builds outfits from your closet for any occasion. Rate the looks; it learns what you like.",
      },
    ],
    whyUseful: [
      "Turns a blind online purchase into a decision you can see.",
      "Working end to end today: wardrobe, try-on, stylist and taste engine.",
      "Next: a 'see it on you' button living inside the store itself.",
    ],
    techNotes:
      "Next.js + SQLite, local-first. Wardrobe import scans purchase SMS/email. Try-on renders via IDM-VTON with a Gemini fallback. Taste anchors distilled with vision AI into structured cards, compiled into per-occasion style briefs.",
    problem:
      "Deciding what to wear — or whether to buy something — means mentally cross-checking a product against everything you own and the style you're going for. No app does that with your actual wardrobe and your actual taste.",
    build: [
      "Next.js app around a photographed wardrobe — every piece cataloged and searchable",
      "'Style This': paste any product link, it's scraped and styled into outfits with your own clothes, tried on you with AI imaging",
      "'Dress Me': occasion-based outfit proposals — party, date, college, office, casual",
      "Taste engine: feed it brands, influencers or magazines as anchors — it researches them, distills each into a structured taste card with vision AI, and compiles per-occasion style briefs",
      "Every suggestion runs through the compiled brief plus your look ratings, so the stylist learns what you like",
    ],
    metrics: [
      "v1 shipped: wardrobe, try-on, stylist and taste engine working end to end",
      "Taste briefs compile once and cascade into every styling prompt",
      "Learning loop from outfit ratings feeds back into future suggestions",
    ],
  },
  {
    slug: "fitforge",
    num: "02",
    title: "FitForge",
    oneLiner: "Training and nutrition that learns your actual limits",
    status: "In development",
    hook: "A gym plan that knows your breaking points — reported by voice in three minutes a day.",
    pullQuote: "It knows where you fail — and builds tomorrow from it.",
    summary:
      "A training and nutrition planner that learns your real limits — the weight where each lift breaks down — and builds the next session from them. The day is reported by voice in about three minutes; meals ride the same loop, so a skipped dinner reshapes tomorrow's training for recovery. Offline-first, built around real constraints.",
    thumbnail: "/work/fitforge/today.jpg",
    whyItExists: [
      "Every beginner's gym plan is a generic template. It doesn't know what you can lift, where you fail, or how you ate yesterday — so it can't answer the only question that matters: what should I do tomorrow?",
    ],
    whatItSolves: [
      "FitForge learns your real numbers — the weight where each lift breaks down — and builds the next session around them.",
      "Food rides the same loop: eat badly or skip a meal, and tomorrow's training adjusts so recovery holds.",
    ],
    whoItsFor: [
      "Gym newcomers with no starting point, drowning in conflicting advice.",
      "Anyone who can't afford a trainer — or would rather not need one.",
    ],
    howItWorks: [
      {
        text: "Open the app and today's session is already there — your weights, and where to push next.",
        image: "/work/fitforge/today.jpg",
        caption: "Today's session, ready on open — your lifts, live training card, and the voice logger up top.",
        phone: true,
      },
      {
        text: "Report your day by voice in three minutes: 'lat pulldown 52.5, ten reps, difficulty eight.' No typing. Every set is logged and remembered.",
        image: "/work/fitforge/progress.jpg",
        caption: "What it remembers: estimated 1-rep maxes per lift, volume trend, every session logged.",
        phone: true,
      },
      {
        text: "Log meals the same way. It knows your kitchen — induction only, no stove — and never suggests food you can't cook.",
      },
      {
        text: "Tomorrow is generated from all of it: performance, food, recovery.",
      },
    ],
    whyUseful: [
      "Three minutes of talking replaces a trainer check-in, a workout log and a meal tracker.",
      "The plan comes from your measured limits, not a template.",
      "Next: a form video on every exercise, for when you don't want to ask.",
    ],
    techNotes:
      "Next.js, offline-first local storage with last-write-wins sync to Supabase, magic-link auth. Voice logging runs through a local speech pipeline. Built around real personal constraints, including low bone density.",
    problem:
      "Wanted a training and nutrition planner tailored to a real constraint set — beginner level, back-and-shoulders priority, low bone density — that works without a connection.",
    build: [
      "Next.js app with offline-first local storage",
      "Last-write-wins sync to Supabase, magic-link auth",
      "Personalized program logic for specific physical constraints",
      "Voice/text daily logger in active development",
    ],
    metrics: [
      "Offline-first sync working end to end",
      "Personalized program logic for specific physical constraints",
      "Voice/text logger in active development",
    ],
  },
  {
    slug: "plum-referral-engine",
    num: "03",
    title: "Plum Referral Engine",
    oneLiner: "A referral system for a market where referrals are legally hard",
    status: "Working prototype on mock data",
    hook: "Indian insurance has no referral programs — regulation makes them dangerous. This is a full working answer to that.",
    pullQuote: "Reward only the referrer, in vouchers not cash — growth a regulator can live with.",
    summary:
      "Indian insurance regulation makes normal referral programs dangerous, so this one rewards only the referrer — in vouchers, never cash. Webhooks attribute every signup, database triggers qualify real intent through to a policy, and an LLM writes each ask from the customer's own data at peak-satisfaction moments. The full journey runs on the deployed prototype, on mock data.",
    liveUrl: "https://plum-referral-engine.vercel.app",
    thumbnail: "/work/plum-referral-engine/analytics.jpg",
    whyItExists: [
      "Referred customers are the warmest, cheapest growth an insurer can get. Yet Indian insurance has almost no referral programs — regulation makes the usual playbook legally dangerous.",
    ],
    whatItSolves: [
      "Reward both sides like every other industry does, and you've built a compliance problem.",
      "Plum Referral Engine threads the needle: reward only the referrer, in vouchers not cash — keeping a regulator-safe distance while still turning happy customers into growth.",
    ],
    whoItsFor: [
      "Plum's customers — asked to refer at the moment they're happiest, not at random.",
      "Plum's sales agents — people refer whoever closed them, so referrals route straight back to that agent.",
    ],
    howItWorks: [
      {
        text: "The ask fires at peak-satisfaction moments — a policy bought, a claim paid, a perk used.",
        image: "/work/plum-referral-engine/pipeline.jpg",
        caption: "The pipeline: import the customer base, stage only those past the delay, send the referral nudge.",
      },
      {
        text: "Each message is written by an LLM (Groq) from the customer's own data — personal, not a blast. Behind it, one connected flow runs the whole loop.",
        image: "/work/plum-referral-engine/diagram.png",
        caption: "The whole engine, end to end — import, personalize, send, attribute, qualify, reward, repeat.",
      },
      {
        text: "A signup doesn't count. It qualifies only when the referred person shows real intent, through to taking a policy.",
      },
      {
        text: "The first qualified referral pays a ₹500 gateway reward — enough to move people who'd never normally refer.",
        image: "/work/plum-referral-engine/portal.jpg",
        caption: "The customer's Refer & Earn view — unique link, tiered reward ladder, ₹500 gateway reward.",
      },
      {
        text: "Insurance converts slowly, so the pipeline keeps paying: every later friend who closes triggers another reward.",
        image: "/work/plum-referral-engine/analytics.jpg",
        caption: "Analytics: the referral funnel and acquisition cost — 64% cheaper than paid ads, ₹900 saved per customer.",
      },
    ],
    whyUseful: [
      "The full journey runs end to end on the live prototype: share, attribute, qualify, reward.",
      "Runs on mock data today — production database, WhatsApp sending and payouts are the remaining wiring.",
      "Proves a hard regulatory constraint has a real product answer — down to the reward psychology.",
    ],
    techNotes:
      "Next.js + Supabase. Webhook-driven attribution, DB triggers for referral qualification and 30-day expiry, reward tiering, Groq-personalized messaging. Hardened with RLS and server-side data routes.",
    problem:
      "Plum needed a referral system that could turn existing customers into a distribution channel — track shares, attribute signups, and pay out rewards without manual reconciliation.",
    build: [
      "Next.js + Supabase, built end to end — architecture, schema, hardening",
      "Tally and purchase webhooks feed the referral pipeline",
      "RLS-gated service-role routes behind an auth proxy for all data access",
      "DB triggers auto-create referral records with a 30-day expiry window",
      "WhatsApp templates and a reward-tier system on the customer side",
    ],
    metrics: [
      "Full referral journey working on the deployed prototype",
      "Automated reward qualification and 30-day dedup via DB triggers",
      "Groq-personalized referral messaging designed against the real schema",
    ],
  },
  {
    slug: "paath",
    num: "04",
    title: "Paath",
    oneLiner:
      "Learn AI the way Varsity teaches markets and Duolingo builds habits.",
    status: "Live, building out",
    hook: "AI is the most in-demand skill with no good school. Paath teaches it — prompts, agents, RAG, evals — with story-first lessons and a check every five minutes.",
    pullQuote:
      "Story before the term — jargon gets its name only after you've watched it solve a problem.",
    summary:
      "A learning app for AI concepts, built on a studied synthesis of what actually works: Zerodha Varsity's story-first depth, Duolingo's habit pull, Lichess-style self-calibrating practice. Fifty-plus modules across foundation and marketing tracks, a 123-item practice bank with a rationale for every wrong answer, installable on a phone. Live today.",
    liveUrl: "https://paath-iota.vercel.app",
    whyItExists: [
      "Everyone needs to learn AI; nowhere teaches it well. Content sites have depth but no practice, habit apps have streaks but shallow lessons — nobody has all the layers at once. Paath was built as that stack.",
    ],
    whatItSolves: [
      "Lessons open with a story and a costed scenario — not \"what is prompt caching\" but \"you're paying $340 a month re-sending the same system prompt.\" The technical term arrives only after you've watched the problem play out.",
      "Every five minutes of reading ends in a check. Wrong answers get individual explanations, and missed items resurface later, spaced.",
    ],
    whoItsFor: [
      "Smart non-technical people who want to actually use AI — finish a module, do something new.",
      "Builders who know the tools but not the map: when to RAG, when to fine-tune, how to eval.",
    ],
    howItWorks: [
      {
        text: "Two characters build a product across the curriculum; concepts get named after the story makes them necessary. Every chapter opens on real money or real failure.",
      },
      {
        text: "A check every five minutes — 123 practice items in ten formats, each distractor carrying its own rationale, misses resurfacing on a spaced schedule.",
      },
      {
        text: "Installable as an app (PWA); habit layer designed in — tiny daily commitment, streaks with insurance, effort-based XP so farming easy content never pays.",
      },
    ],
    whyUseful: [
      "Live and public today — 50+ modules, all cross-references and arithmetic script-verified.",
      "Built from real teardowns of Varsity, Duolingo, Lichess, Math Academy and ~15 others — the design choices are argued, not vibes.",
      "Content pipeline has an automated visual QA harness; every merge audited by a supervisor loop.",
    ],
    techNotes:
      "Next.js PWA + Supabase (auth and cloud sync built, gated). Story-first content pipeline with script-verified arithmetic, automated screenshot QA, and figure infrastructure. Developed via a supervisor-agent loop auditing every merge.",
    problem:
      "AI skills are in demand but the learning landscape splits into deep content without practice and habit apps without depth.",
    build: [
      "Next.js PWA, live in production",
      "50+ story-first modules across two tracks",
      "123-item practice bank, ten formats, per-distractor rationales",
      "Supabase auth + sync scaffold with RLS",
    ],
    metrics: [
      "Live and installable today",
      "Checks every five minutes of reading",
      "All arithmetic script-verified",
    ],
  },
  {
    slug: "rostrum",
    num: "05",
    title: "Rostrum",
    oneLiner: "A daily speaking trainer that measures delivery, not vibes.",
    status: "Working end to end, local",
    hook: "Speaking well is trained, not gifted. Rostrum drills it daily: read a briefing fast, speak cold for three minutes, get told exactly what was wrong.",
    pullQuote: "Numbers from word timestamps — not a model's opinion.",
    summary:
      "Press a button, get a topic you didn't choose, read an eight-section briefing sized for ten minutes, then the mic starts on its own — three to five minutes of extempore. Whisper transcribes it and Python computes the delivery numbers: words per minute, filler rate, stalls over 1.2 seconds, vocabulary variety. The coaching notes must quote you to criticise you. The whole loop runs free.",
    whyItExists: [
      "Case finals and interviews are won out loud, and there's no gym for that. Rostrum is the daily rep: an unchosen topic, a fast read, a cold three-minute talk, and honest measurement.",
    ],
    whatItSolves: [
      "It separates what machines measure well from what models judge well. Word timestamps give deterministic numbers — pace, fillers, stalls — and the LLM coach is only allowed to criticise with quotes from your own transcript.",
    ],
    whoItsFor: [
      "Anyone who has to speak convincingly on things they didn't prepare — case competitions, interviews, class participation.",
    ],
    howItWorks: [
      {
        text: "One button pulls a topic you haven't spoken on. Two free-tier LLMs write the eight-section briefing — split across models because one quota can't produce ten minutes of reading in a minute.",
      },
      {
        text: "A 10:00 timer runs while you read; at zero the mic starts on its own. Stop unlocks at three minutes, hard stop at five.",
      },
      {
        text: "Whisper transcribes; Python computes WPM, filler count, stalls, vocabulary variety from word timestamps. The coach sees the numbers plus your transcript — and has to quote you.",
      },
    ],
    whyUseful: [
      "The entire loop costs nothing — free tiers throughout, and the rate limits shaped the architecture.",
      "Every session is exportable in one command: SQL, JSON, CSV, and readable Markdown.",
      "Briefs are cached — a topic you've opened before starts instantly.",
    ],
    techNotes:
      "Python stdlib HTTP server + one vanilla-JS page, no framework, no build step. Groq (two models + Whisper), Firecrawl search, Postgres via Supabase, audio on Google Drive. Free-tier rate limits are the design constraint.",
    problem:
      "No daily practice loop exists for extempore speaking with honest, measured feedback.",
    build: [
      "Python stdlib server + single-page vanilla JS, no build step",
      "Two-model briefing pipeline shaped by free-tier rate limits",
      "Whisper transcription with deterministic delivery metrics",
      "One-command full data export",
    ],
    metrics: [
      "Full loop working end to end, runs free",
      "Delivery numbers computed from word timestamps, not model opinion",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
