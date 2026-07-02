export type Project = {
  slug: string;
  num: string;
  title: string;
  oneLiner: string;
  status: string;
  problem: string;
  build: string;
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
      "Plum needed a referral system that could turn existing customers into a distribution channel — track shares, attribute signups, and pay out rewards without manual reconciliation.",
    build:
      "Built end to end on Next.js and Supabase: Tally and purchase webhooks feed a referral pipeline, RLS-gated service-role routes handle all data access behind an auth proxy, and database triggers auto-create referral records with a 30-day expiry window. WhatsApp templates and a reward-tier system handle the customer-facing side. Directed the full build — architecture, schema, hardening — using AI as the implementation layer.",
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
      "Job hunting through LinkedIn saved posts doesn't scale — no tracking, no structure, and every cover letter written from scratch.",
    build:
      "Scrapes saved LinkedIn posts into a 7-tab Google Sheet, runs free rule-based extraction to structure job data, and generates per-row cover-letter PDFs from a fixed template via Google Apps Script and Drive. Fully free-tier — no paid enrichment APIs.",
    metrics: [
      "7-tab structured pipeline from raw saved posts",
      "Automated per-application cover-letter generation",
      "Zero-cost stack end to end",
    ],
  },
  {
    slug: "fitforge",
    num: "03",
    title: "FitForge",
    oneLiner: "Offline-first training and nutrition planner",
    status: "In development",
    problem:
      "Wanted a training and nutrition planner tailored to a real constraint set — beginner level, back-and-shoulders priority, low bone density — that works without a connection.",
    build:
      "Next.js app with offline-first local storage and last-write-wins sync to Supabase, magic-link auth. Currently building a voice/text daily logger on top of the existing planning core.",
    metrics: [
      "Offline-first sync working end to end",
      "Personalized program logic for specific physical constraints",
      "Voice/text logger in active development",
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
