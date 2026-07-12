export type Project = {
  slug: string;
  num: string;
  title: string;
  oneLiner: string;
  status: string;
  problem: string;
  build: string[];
  metrics: string[];
};

export const projects: Project[] = [
  {
    slug: "plum-referral-engine",
    num: "01",
    title: "Plum Referral Engine",
    oneLiner: "Production referral platform for a B2C insurance brand",
    status: "Live",
    problem:
      "Plum needed a referral system that could turn existing customers into a distribution channel \u2014 track shares, attribute signups, and pay out rewards without manual reconciliation.",
    build: [
      "Next.js + Supabase, built end to end \u2014 architecture, schema, hardening",
      "Tally and purchase webhooks feed the referral pipeline",
      "RLS-gated service-role routes behind an auth proxy for all data access",
      "DB triggers auto-create referral records with a 30-day expiry window",
      "WhatsApp templates and a reward-tier system on the customer side",
    ],
    metrics: [
      "Live in production",
      "RLS + service-role architecture, hardened for prod",
      "Automated reward tiering and 30-day dedup via DB triggers",
    ],
  },
  {
    slug: "linkedin-job-crm",
    num: "02",
    title: "LinkedIn Job CRM",
    oneLiner: "A $0 job-hunt pipeline built on LinkedIn saved posts",
    status: "Personal tool",
    problem:
      "Job hunting through LinkedIn saved posts doesn't scale \u2014 no tracking, no structure, and every cover letter written from scratch.",
    build: [
      "Scrapes saved LinkedIn posts into a 7-tab Google Sheet",
      "Free rule-based extraction structures the raw job data",
      "Per-row cover-letter PDFs generated from a fixed template via Apps Script + Drive",
      "Fully free-tier \u2014 no paid enrichment APIs",
    ],
    metrics: [
      "7-tab structured pipeline from raw saved posts",
      "Automated per-application cover-letter generation",
      "Zero-cost stack end to end",
    ],
  },
  {
    slug: "hr-dashboard",
    num: "03",
    title: "HR MIS Dashboard",
    oneLiner:
      "Executive HR MIS dashboard with monthly uploads, insights and trends",
    status: "In use",
    problem:
      "A diagnostics company's HR data lived in a 15-sheet monthly payroll Excel — no way to see headcount, attrition, cost or compliance at a glance, or compare months.",
    build: [
      "Next.js dashboard that parses the monthly HR MIS Excel into stored JSON, one snapshot per month",
      "Upload flow with parse preview — detected month, key totals and data-quality warnings before saving",
      "Seven views: overview KPIs with alerts, workforce, attrition, recruitment, cost, compliance and a 6-month trend comparison",
      "Data-quality handling built in: recomputes broken payroll totals, normalizes free-text hiring sources, flags empty sheets as alerts instead of fake zeros",
    ],
    metrics: [
      "One Excel upload replaces manual monthly MIS review",
      "Month-on-month KPI trends across 6 months in one table",
      "Bad workbook data surfaced as alerts, not silently wrong numbers",
    ],
  },
  {
    slug: "fitforge",
    num: "04",
    title: "FitForge",
    oneLiner: "Offline-first training and nutrition planner",
    status: "In development",
    problem:
      "Wanted a training and nutrition planner tailored to a real constraint set \u2014 beginner level, back-and-shoulders priority, low bone density \u2014 that works without a connection.",
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
    slug: "drizzler",
    num: "05",
    title: "Drizzler",
    oneLiner: "AI personal stylist that knows your wardrobe and your taste",
    status: "In development",
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
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
