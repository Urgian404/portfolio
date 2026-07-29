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
      "It started on Uniqlo's site — models styling pieces in ways that would never occur to me. Styling is a taste you build by being obsessed: what's trending, which colors work together. I don't have it, and most people don't.",
      "Then the second realization: seeing one shirt on me is useless. Whether it earns its place depends on everything else I own — and no shopping site knows my wardrobe.",
    ],
    whatItSolves: [
      "You never wear one piece alone. A shirt lives with pants, shoes, a jacket. Offline trial rooms tell you how a piece looks on you — never how it works with what you already own.",
      "Online shopping removed even that. You buy blind twice over: no trial, no wardrobe context.",
      "Drizzler closes the trial gap online — and adds the one thing a physical trial room can't do: test the purchase against your entire wardrobe before you buy.",
    ],
    whoItsFor: [
      "People with basic taste who want to dress better without becoming style experts.",
      "Fashion-obsessed people who follow styling influencers and want their taste applied to their own closet.",
      "Both ends shop online — that's the entry condition, because the wardrobe builds itself from purchase messages.",
    ],
    howItWorks: [
      {
        text: "One-time setup: Drizzler builds your wardrobe from purchase messages and order history — exact products, exact sizes, no guessing from photos. Plus a few photos of you, so results render on your body.",
      },
      {
        text: "Shopping somewhere? Copy the product link, paste it in. Drizzler pulls the piece and styles it into full outfits using only clothes you actually own.",
      },
      {
        text: "Every suggestion follows a taste you choose. Feed it brands, influencers or magazines as anchors — it researches each one, distills it into a taste card, and styles you accordingly.",
      },
      {
        text: "No purchase needed either — 'Dress Me' proposes outfits from your existing wardrobe for the occasion: party, date, college, office, casual.",
      },
      {
        text: "You rate the looks. Ratings feed back into every future suggestion, so the stylist learns what you like.",
      },
    ],
    whyUseful: [
      "A purchase decision stops being a guess: you see the piece on you, with your clothes, in your taste, before paying.",
      "v1 works end to end today: wardrobe, try-on, stylist and taste engine.",
      "Where it points: launch through fashion influencers, then a retailer plug-in — a 'see it on you' button inside the store itself, no link-pasting.",
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
      "I'm new to the gym. I didn't know which exercises, which weights, or how to progress. A googled plan is generic — it doesn't know what I can lift or where I break.",
      "Even asking an AI chatbot doesn't fix it: give it your weight and it still has no idea how much you can push. The plan has to come from a system that learns you.",
    ],
    whatItSolves: [
      "Generic plans ignore the only data that matters: your real performance. FitForge registers it — 50 kg lat pulldown at breaking point, 35 kg Romanian deadlift near limit — and remembers.",
      "From failure points, strength curve and goals (broader shoulders, thicker wrists), it builds the plan around you — including muscles it infers are underdeveloped from what you can't lift.",
      "Food and training stop being separate apps. Skipped dinner last night? Tomorrow's session adjusts so recovery isn't wrecked.",
    ],
    whoItsFor: [
      "Gym newcomers with no starting point, flummoxed by the wall of conflicting advice online.",
      "People who can't afford a personal trainer — or would rather not depend on one.",
    ],
    howItWorks: [
      {
        text: "Open the app: today's routine is already there, with your weights and your progression — no remembering what you lifted last week.",
      },
      {
        text: "Train, then report your day by voice in two–three minutes: 'lat pulldown 52.5 kilos, one set of ten, difficulty eight.' No typing. It parses, logs and remembers.",
      },
      {
        text: "Meals go into the same report. It knows the actual kitchen — induction only, no stove, no airfryer — so it never suggests food you can't cook, and it tracks what a packet of chips does to your protein goal.",
      },
      {
        text: "Tomorrow gets generated from all of it: performance, food, recovery. Training and nutrition move together.",
      },
    ],
    whyUseful: [
      "Three minutes of talking a day replaces a trainer's check-in, a workout log and a meal tracker.",
      "The plan is personal in the only way that counts: built from your measured limits, not a template.",
      "Designed next: a form-video dropdown on every suggested exercise — for beginners who don't want to ask.",
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
      "Referral programs don't exist in Indian insurance. Not because nobody thought of it — because regulation makes the standard playbook dangerous.",
      "Normal referral mechanics reward both sides. Under Indian insurance rules, rewarding the referred party is the legally risky part. The working thesis: reward only the referrer, in non-cash form — Zomato coupons, Amazon vouchers — and keep a regulator-safe distance.",
    ],
    whatItSolves: [
      "Referred customers arrive with personal trust — the cheapest, warmest acquisition an insurer can get. Plum had no system to capture it.",
      "The hard part isn't the tech; it's designing rewards that motivate without attracting legal attention. Too generous, or the wrong form, and the program itself becomes the risk.",
    ],
    whoItsFor: [
      "Plum's existing customers — turned into a distribution channel at the moments they're happiest.",
      "Plum's sales agents — because the sharpest insight in the system is that people don't refer a company, they refer the person who closed them. Referrals route back to that agent.",
    ],
    howItWorks: [
      {
        text: "The ask fires at peak-satisfaction moments — just became a paid customer, just used a perk, just had a claim paid. Not random spam.",
      },
      {
        text: "Each referral message is written by an LLM engine (Groq) from the customer's own data — personalized, not a template blast.",
      },
      {
        text: "A signup is not a successful referral. It counts when the referred person shows real intent — gets on a call, through to taking a policy. No junk referrals.",
      },
      {
        text: "First successful referral pays a ₹500 gateway reward regardless — built to convert even people who never refer.",
      },
      {
        text: "Insurance converts slowly, so the pipeline keeps paying: each friend who eventually closes triggers a reminder and a further reward. One sharing burst can earn multiple times.",
      },
    ],
    whyUseful: [
      "The full journey runs end to end on the deployed site: share, attribute, qualify, reward.",
      "Honest status: it runs on mock data. Wiring it to Plum's production database, official WhatsApp sending and real payouts is the remaining step — it was ideated and built during my internship, not adopted.",
      "What it proves: the regulatory constraint has a workable product answer, designed down to reward psychology and agent routing.",
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
