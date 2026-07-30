# Editorial Case-Study System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio's project pages as deep founder-readable case studies (why / what it solves / who for / how it works with screenshots / why useful), cut the site to 3 flagship projects, and link Plum's live deploy.

**Architecture:** Extend the `Project` type in `lib/projects.ts` with optional story fields; the case page renders story sections when present and falls back to the legacy Problem/Build/Results layout otherwise. Homepage index drops to 3 rows with hook lines and thumbnails. Screenshots are captured in a separate interactive task and wired in afterward.

**Tech Stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind, existing design tokens (`lib/design.ts` / `globals.css`), Chrome MCP for screenshots.

## Global Constraints

- Copy source: ONLY `docs/superpowers/specs/2026-07-29-project-interviews.md`. Nothing invented beyond it.
- Never "an MBA who builds". Bullets + short paragraphs (≤3 sentences). No team names, no "beat teams from X" filler.
- Plum must never be described as "live in production" — it runs the full journey on mock data, not adopted by the company.
- Only claim built features as built. Planned features (FitForge form videos, Drizzler retailer plug-in) must read as design intent, not shipped fact.
- Dev server: `npx next dev -p 3001` (Drizzler owns 3000).
- This is Next.js 16 — check `node_modules/next/dist/docs/` before using unfamiliar APIs.
- After replacing an image at the same path under `public/`: `rm -rf .next/cache/images` + hard refresh.
- No test framework in repo; verification cycle is `npx tsc --noEmit` + `npm run build` + manual browser pass.
- CTA links: `mailto:urgian27@gmail.com`, `https://www.linkedin.com/in/urgian-padma/` (copied from `components/cinematic/Finale.tsx`).

---

### Task 1: Schema + full content rewrite in `lib/projects.ts`

**Files:**
- Modify: `lib/projects.ts` (full rewrite)

**Interfaces:**
- Produces: `Project` type with new optional fields `hook`, `thumbnail`, `liveUrl`, `whyItExists: string[]`, `whatItSolves: string[]`, `whoItsFor: string[]`, `howItWorks: HowItWorksStep[]`, `whyUseful: string[]`, `techNotes: string`; `HowItWorksStep = { text: string; image?: string; caption?: string }`. Legacy `problem`/`build`/`metrics` kept. `projects` array has exactly 3 entries in order drizzler, fitforge, plum-referral-engine. `getProject(slug)` unchanged.

- [ ] **Step 1: Replace `lib/projects.ts` with the new type + content**

Full file content (copy verbatim; copy text is final, sourced from the interview notes):

```ts
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
```

- [ ] **Step 2: Typecheck**

Run: `cd /Users/urgiannegi/portfolio && npx tsc --noEmit`
Expected: exit 0. (Failure here means a consumer destructures a removed project — fix in Task 2/3, but tsc should still pass now since components only use existing field names.)

- [ ] **Step 3: Commit**

```bash
git add lib/projects.ts
git commit -m "feat: story schema + final case-study content, cut to 3 flagship projects"
```

---

### Task 2: Case page — editorial story layout with legacy fallback

**Files:**
- Modify: `app/work/[slug]/page.tsx` (full rewrite)

**Interfaces:**
- Consumes: `Project`, `HowItWorksStep`, `getProject`, `projects` from `@/lib/projects` (Task 1 shapes).
- Produces: route pages at `/work/drizzler`, `/work/fitforge`, `/work/plum-referral-engine`; removed slugs 404 via existing `notFound()`.

- [ ] **Step 1: Replace `app/work/[slug]/page.tsx`**

Full file content. Server component, no framer-motion (calm editorial — static, CSS only). Section renders only when its field is present; if `whyItExists` is absent the page falls back to the legacy Problem/Build/Results blocks. Reuses the exact token classes already in the file (`border-hairline`, `text-ink-muted`, `text-accent`, `font-display`, `font-mono`, `bg-accent`, `text-accent-ink`).

```tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProject, projects, type Project } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-12 grid gap-6 border-t border-hairline pt-12 md:grid-cols-12 md:gap-4 md:pt-16">
      <h2 className="font-mono text-sm text-ink-muted md:col-span-3">
        {label}
      </h2>
      <div className="md:col-span-9">{children}</div>
    </div>
  );
}

function Paras({ items }: { items: string[] }) {
  return (
    <div className="max-w-[62ch] space-y-4">
      {items.map((t) => (
        <p key={t} className="leading-relaxed">
          {t}
        </p>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="max-w-[62ch] space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 leading-relaxed">
          <span className="text-accent">—</span>
          {t}
        </li>
      ))}
    </ul>
  );
}

function Story({ project }: { project: Project }) {
  return (
    <>
      {project.whyItExists && (
        <Section label="Why it exists">
          <Paras items={project.whyItExists} />
        </Section>
      )}
      {project.whatItSolves && (
        <Section label="What it solves">
          <Paras items={project.whatItSolves} />
        </Section>
      )}
      {project.whoItsFor && (
        <Section label="Who it's for">
          <Bullets items={project.whoItsFor} />
        </Section>
      )}
      {project.howItWorks && (
        <Section label="How it works">
          <ol className="max-w-[62ch] space-y-10">
            {project.howItWorks.map((step, i) => (
              <li key={step.text} className="space-y-4">
                <div className="flex gap-4">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="leading-relaxed">{step.text}</p>
                </div>
                {step.image && (
                  <figure className="border border-hairline">
                    <Image
                      src={step.image}
                      alt={step.caption ?? step.text}
                      width={1200}
                      height={750}
                      className="w-full"
                    />
                    {step.caption && (
                      <figcaption className="border-t border-hairline px-4 py-2 font-mono text-xs text-ink-muted">
                        {step.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </Section>
      )}
      {project.whyUseful && (
        <Section label="Why it's useful">
          <Bullets items={project.whyUseful} />
        </Section>
      )}
      {project.techNotes && (
        <Section label="Under the hood">
          <p className="max-w-[62ch] font-mono text-sm leading-relaxed text-ink-muted">
            {project.techNotes}
          </p>
        </Section>
      )}
    </>
  );
}

function Legacy({ project }: { project: Project }) {
  return (
    <>
      <Section label="Problem">
        <p className="max-w-[62ch] leading-relaxed">{project.problem}</p>
      </Section>
      <Section label="Build">
        <Bullets items={project.build} />
      </Section>
      <Section label="Results">
        <Bullets items={project.metrics} />
      </Section>
    </>
  );
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hasStory = Boolean(project.whyItExists?.length);

  return (
    <>
      <header className="border-b border-hairline">
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-[var(--gutter)]">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Urgian Padma
          </Link>
          <Link
            href="/#work"
            className="font-mono text-sm transition-colors hover:text-accent"
          >
            ← All work
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1400px] px-[var(--gutter)] py-16 md:py-24">
        <div className="grid gap-4 md:grid-cols-12">
          <span className="font-mono text-sm text-ink-muted md:col-span-1">
            {project.num}
          </span>
          <div className="md:col-span-11">
            <h1 className="font-display text-display-l font-semibold leading-[1.02] tracking-tight">
              {project.title}
            </h1>
            <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink-muted">
              {project.oneLiner}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="inline-block border border-hairline px-3 py-1 font-mono text-sm text-ink-muted">
                {project.status}
              </span>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-accent px-4 py-1.5 font-mono text-sm text-accent-ink transition-transform duration-200 hover:scale-[1.03]"
                >
                  Visit live ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {hasStory ? <Story project={project} /> : <Legacy project={project} />}

        <div className="mt-16 border-t border-hairline pt-12 md:mt-24 md:pt-16">
          <p className="font-display text-2xl font-medium tracking-tight">
            Want the full story?
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="mailto:urgian27@gmail.com"
              className="bg-accent px-6 py-3 font-mono text-sm text-accent-ink transition-transform duration-200 hover:scale-[1.03]"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/urgian-padma/"
              target="_blank"
              rel="noreferrer"
              className="border border-hairline px-6 py-3 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn DM
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
```

- [ ] **Step 2: Typecheck + build**

Run: `npx tsc --noEmit && npm run build`
Expected: both exit 0; build output lists exactly 3 `/work/[slug]` static params.

- [ ] **Step 3: Manual check**

Run dev (`npx next dev -p 3001`), open `http://localhost:3001/work/drizzler`, `/work/fitforge`, `/work/plum-referral-engine` — story sections render, Plum shows "Visit live ↗". Open `/work/hr-dashboard` and `/work/linkedin-job-crm` — both 404.

- [ ] **Step 4: Commit**

```bash
git add app/work/[slug]/page.tsx
git commit -m "feat: editorial case page with story sections, live link and CTA"
```

---

### Task 3: Homepage index — 3 rows, hook copy, clickable affordance, thumbnail slot

**Files:**
- Modify: `components/cinematic/WorkCinematic.tsx`

**Interfaces:**
- Consumes: `Project` with `hook?` and `thumbnail?` (Task 1).
- Produces: index rows that read `item.hook ?? item.oneLiner`, render `item.thumbnail` when present, and carry an explicit "View project →" affordance.

- [ ] **Step 1: Edit the row markup**

Replace the `oneLiner` span and status span inside the `Link` (lines 40–51 of the current file) with:

```tsx
                <span className="col-span-10 col-start-3 text-ink-muted md:col-span-4 md:col-start-auto">
                  {item.hook ?? item.oneLiner}
                </span>
                <span className="col-span-10 col-start-3 flex items-baseline justify-between font-mono text-sm text-ink-muted md:col-span-2 md:col-start-auto md:justify-end md:gap-4">
                  <span className="transition-colors group-hover:text-accent">
                    View project
                  </span>
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    →
                  </span>
                </span>
```

And directly after the `Link`'s opening grid children (below the title span), add the thumbnail block:

```tsx
                {item.thumbnail && (
                  <span className="col-span-10 col-start-3 mt-4 block max-w-[280px] border border-hairline opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:col-span-2 md:col-start-auto md:mt-0">
                    <Image
                      src={item.thumbnail}
                      alt={`${item.title} screen`}
                      width={560}
                      height={350}
                      className="w-full"
                    />
                  </span>
                )}
```

Add `import Image from "next/image";` at the top. Note: adding the thumbnail cell changes the 12-col row balance — when thumbnails land (Task 4), rebalance the `md:col-span-*` values so the row still sums to 12 with the number column; verify visually at 3001.

Status text moves off the row (status still lives on the case page). If the row looks unbalanced without it, keep status inside the hook cell as a small mono prefix — visual call at review time.

- [ ] **Step 2: Typecheck + visual check**

Run: `npx tsc --noEmit` → exit 0.
Open `http://localhost:3001/#work`: exactly 3 rows (Drizzler, FitForge, Plum), each showing hook line + "View project →", hover states work, each click lands on its case page.

- [ ] **Step 3: Commit**

```bash
git add components/cinematic/WorkCinematic.tsx
git commit -m "feat: 3-row work index with hook copy and explicit view affordance"
```

---

### Task 4: Screenshots — capture, wire in, review (interactive; main session with Chrome MCP)

This task cannot run in a subagent — it needs the Chrome MCP tools and Urgian's review.

**Files:**
- Create: `public/work/drizzler/*.png`, `public/work/fitforge/*.png`, `public/work/plum-referral-engine/*.png`
- Modify: `lib/projects.ts` (fill `image`/`caption` on `howItWorks` steps and `thumbnail` per project)

**Interfaces:**
- Consumes: `HowItWorksStep.image`/`caption`, `Project.thumbnail` (Task 1); case page renders images when present (Task 2).

- [ ] **Step 1: Drizzler** — its dev server usually runs on 3000; if not: `cd ~/Building/Drizzler && npm run dev`. Capture: wardrobe grid, a Style-This result (pasted link → outfits), taste anchors screen, Dress-Me occasion result, lookbook. Save via Chrome MCP screenshots to `public/work/drizzler/01-wardrobe.png` … `05-lookbook.png`. Face + wardrobe approved public — no blurring.
- [ ] **Step 2: FitForge** — `cd ~/Building/fitforge && npx next dev -p 3002` (3000 Drizzler, 3001 portfolio). DB was stale 2026-06-29 — if screens look empty/broken, log a representative day first so screens show real data. Capture: today's routine, voice log flow, meal/nutrition view. Save to `public/work/fitforge/`.
- [ ] **Step 3: Plum** — no local server needed: `https://plum-referral-engine.vercel.app` (mock data, public). Confirm no login wall as Urgian expects; if one appears, stop and tell him. Capture: share/referral page, dashboard/pipeline view, reward view. Save to `public/work/plum-referral-engine/`.
- [ ] **Step 4: Wire in** — set `image` + `caption` on matching `howItWorks` steps and pick one `thumbnail` per project in `lib/projects.ts`. Steps without a good screenshot stay text-only (supported by Task 2). Run `rm -rf .next/cache/images` after any same-path replacement.
- [ ] **Step 5: Urgian reviews every shot** on the live pages at 3001 before this task is called done.
- [ ] **Step 6: Commit**

```bash
git add public/work lib/projects.ts
git commit -m "feat: real product screenshots wired into case-study walkthroughs"
```

---

### Task 5: Verification pass

- [ ] **Step 1:** `npx tsc --noEmit && npm run build` → both exit 0.
- [ ] **Step 2:** Manual pass at `http://localhost:3001`: home → 3 rows → each case page → sections in order (Why it exists / What it solves / Who it's for / How it works / Why it's useful / Under the hood) → CTA buttons work (`mailto:`, LinkedIn) → Plum "Visit live ↗" opens the deployed site.
- [ ] **Step 3:** Mobile width (390px in devtools): reading column, images, index rows all usable; no horizontal scroll.
- [ ] **Step 4:** `/work/hr-dashboard` and `/work/linkedin-job-crm` return 404.
- [ ] **Step 5:** Copy audit against `docs/superpowers/specs/2026-07-29-project-interviews.md`: every claim on every page traceable to the notes; Plum nowhere says "production"; planned features read as planned.
- [ ] **Step 6:** Update `HANDOFF.md` (3-project scope, case-study system shipped, screenshots state) and commit:

```bash
git add HANDOFF.md
git commit -m "docs: handoff reflects case-study system"
```
