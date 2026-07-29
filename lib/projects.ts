export type HowItWorksStep = {
  text: string;
  image?: string; // path under public/, e.g. /work/drizzler/01-wardrobe.png
  caption?: string;
};

export type Project = {
  slug: string;
  num: string;
  title: string;
  oneLiner: string;
  status: string;
  hook?: string; // index-row line, leads with why/impact
  thumbnail?: string; // index-row image, path under public/
  liveUrl?: string; // renders "Visit live ↗" when set
  // Legacy layout fields — case page falls back to these when story fields absent
  problem: string;
  build: string[];
  metrics: string[];
  // Story fields
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
    oneLiner: "AI personal stylist that knows your wardrobe and your taste",
    status: "v1 working end to end",
    hook: "The trial room online shopping never had — see any purchase styled with your own wardrobe, on you, before you pay.",
    whyItExists: [
      "Online shopping deleted the trial room. You can't feel a piece on your body — and you certainly can't see it against everything already in your closet. But nobody wears one item alone, so every purchase is a quiet gamble: will this actually work with what I own?",
    ],
    whatItSolves: [
      "Drizzler answers the gamble before you pay. Paste any product link and it styles the piece into full outfits using the clothes you actually own — rendered on you, in a taste you choose.",
      "It does what a physical trial room can't: judge a buy against your whole wardrobe, not just the mirror.",
    ],
    whoItsFor: [
      "People with plain taste who want to dress better without studying fashion.",
      "Style obsessives who want an influencer's eye turned on their own closet.",
    ],
    howItWorks: [
      {
        text: "Your wardrobe loads itself from purchase history — exact products, exact sizes. Add a few photos of yourself so outfits render on your body.",
      },
      {
        text: "Shopping? Paste the product link. Drizzler builds full looks around it from clothes you already own.",
      },
      {
        text: "Pick a taste to style by — a brand, an influencer, a magazine. It studies the reference and dresses you in that language.",
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
      },
      {
        text: "Report your day by voice in three minutes: 'lat pulldown 52.5, ten reps, difficulty eight.' No typing.",
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
    liveUrl: "https://plum-referral-engine.vercel.app",
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
      },
      {
        text: "Each message is written by an LLM (Groq) from the customer's own data — personal, not a blast.",
      },
      {
        text: "A signup doesn't count. It qualifies only when the referred person shows real intent, through to taking a policy.",
      },
      {
        text: "The first qualified referral pays a ₹500 gateway reward — enough to move people who'd never normally refer.",
      },
      {
        text: "Insurance converts slowly, so the pipeline keeps paying: every later friend who closes triggers another reward.",
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
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
