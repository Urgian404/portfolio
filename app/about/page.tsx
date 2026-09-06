import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://portfolio-roan-pi-35.vercel.app";

export const metadata: Metadata = {
  title: "About",
  description:
    "Urgian Padma is an IPM student at IIM Indore from Himachal Pradesh who builds products end to end — Drizzler, FitForge, Plum Referral Engine, Paath and Rostrum — and holds national case-competition wins from BCG, L&T, JSW Energy, Reckitt and Namma Yatri.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "profile",
    url: `${SITE_URL}/about`,
    title: "About Urgian Padma",
    description:
      "IPM at IIM Indore. Builds products end to end. National case-competition record with BCG, L&T, JSW Energy, Reckitt, Cornell and Namma Yatri.",
  },
};

/** Recognition — every third-party page where the name appears, claimed here
 *  so search engines bind the scattered mentions to one entity. */
const recognition = [
  {
    title: "Juspay Namma Yatri Open Mobility Challenge",
    result: "National Winner",
    year: "2023",
    detail:
      "Winner out of 70,980 participants in the Driver Earnings track — an ML co-pilot routing auto drivers to high-demand zones, cutting waiting time ~20%.",
    href: "https://www.nammayatri.in/challenge",
    source: "nammayatri.in — official winners list",
  },
  {
    title: "Cornell Corning EMI Case Competition",
    result: "International Runner-Up",
    year: "2025",
    detail:
      "Vaccine market-entry case for Africa; runner-up among 1,400+ participants worldwide, presented at Cornell University.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7385576707661119488/",
    source: "IIM Indore announcement",
  },
  {
    title: "BCG ReDEIsign Case Competition 2.0",
    result: "National Top 5 · PPI with BCG",
    year: "2024",
    detail:
      "Policy case on LGBTQ+ welfare — 'Rainbow Credits', a tradable-credit mechanism; top five of 1,500+ registrations across 11 MBA campuses.",
    href: "https://www.linkedin.com/posts/deshna-jain-b5b5a5143_re-deisign-case-competition-20-bcg-india-activity-7228764126146150400-6LXS",
    source: "BCG winners announcement",
  },
  {
    title: "L&T OutThink",
    result: "National Second Runners-Up · PPI",
    year: "2025",
    detail:
      "Market-entry case on medical implants; second runners-up at the national grand finale.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7315244800448913408/",
    source: "Grand finale announcement",
  },
  {
    title: "JSW Energy Case Challenge × ISB",
    result: "National Second Runner-Up · PPI",
    year: "2024",
    detail:
      "Offshore-wind entry strategy for JSW Energy; podium at ISB's Advaita 2024.",
    href: "https://www.linkedin.com/posts/prakritish-bailung-310073232_thrilled-to-share-that-my-team-maanav-rathore-ugcPost-7260521236655460352-nKwx",
    source: "Winners post",
  },
  {
    title: "Reckitt Career Compass — Finance Track",
    result: "Campus Winner · PPI",
    year: "2024",
    detail:
      "Pricing-and-portfolio recovery plan presented to the brand's Indian GM; campus winner on the finance track.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7262400054005563392/",
    source: "Winners post",
  },
  {
    title: "IMA Student Case Competition, India",
    result: "National Second Runner-Up · CMA (US) scholarship",
    year: "2024",
    detail:
      "Accounting-method case at the India finals; podium finish with a full CMA (US) scholarship awarded.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7167951231745736705/",
    source: "Finals announcement",
  },
  {
    title: "Unstop Talent Park (Non-Tech)",
    result: "National Second Runner-Up · Internship",
    year: "2024",
    detail:
      "Growth case for Unstop; third nationally out of 18,000+ participants.",
    href: "https://unstop.com/awards/u/urgian-padma-2505896/2025",
    source: "Unstop award profile",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${SITE_URL}/about#profilepage`,
  url: `${SITE_URL}/about`,
  name: "About Urgian Padma",
  mainEntity: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Urgian Padma",
    url: SITE_URL,
    jobTitle: "Builder",
    description:
      "IPM student at IIM Indore who builds products end to end — Drizzler, FitForge, Plum Referral Engine, Paath and Rostrum — with a national case-competition record.",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Management Indore",
    },
    homeLocation: { "@type": "Place", name: "Himachal Pradesh, India" },
    award: [
      "National Winner, Juspay Namma Yatri Open Mobility Challenge (2023, 70,980 participants)",
      "International Runner-Up, Cornell Corning EMI Case Competition (2025)",
      "National Top 5, BCG ReDEIsign Case Competition 2.0 (2024)",
      "National Second Runners-Up, L&T OutThink (2025)",
      "National Second Runner-Up, JSW Energy Case Challenge at ISB Advaita (2024)",
      "Campus Winner, Reckitt Career Compass Finance Track (2024)",
      "National Second Runner-Up, IMA Student Case Competition India (2024)",
      "National Second Runner-Up, Unstop Talent Park Non-Tech (2024)",
    ],
    knowsAbout: ["Marketing", "AI products", "Product building"],
    sameAs: [
      "https://www.linkedin.com/in/urgian-padma/",
      "https://github.com/Urgian404",
      "https://unstop.com/awards/u/urgian-padma-2505896/2025",
    ],
    subjectOf: recognition.map((r) => ({
      "@type": "WebPage",
      url: r.href,
      name: `${r.title} — ${r.result}`,
    })),
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <header className="border-b border-hairline">
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-[var(--gutter)]">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            Urgian Padma
          </Link>
          <Link
            href="/"
            className="font-mono text-sm transition-colors hover:text-accent"
          >
            ← Home
          </Link>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1400px] px-[var(--gutter)] py-16 md:py-24">
        <h1 className="font-display text-display-l font-semibold leading-[1.02] tracking-tight">
          Urgian Padma
        </h1>
        <p className="mt-6 max-w-[58ch] font-display text-xl font-light leading-snug tracking-tight md:text-2xl">
          Urgian Padma is an IPM student at IIM Indore, from Himachal Pradesh,
          who builds products end to end and competes in national case
          competitions.
        </p>

        <div className="mt-10 max-w-[62ch] space-y-5 leading-relaxed">
          <p>
            The building is the center of it. Five products so far, each taken
            from idea to working software:{" "}
            <Link href="/work/drizzler" className="underline decoration-hairline underline-offset-4 hover:text-accent">Drizzler</Link>, an AI
            stylist that renders clothes on your body against the wardrobe you
            own; <Link href="/work/fitforge" className="underline decoration-hairline underline-offset-4 hover:text-accent">FitForge</Link>, a
            training planner that learns your real limits;{" "}
            <Link href="/work/plum-referral-engine" className="underline decoration-hairline underline-offset-4 hover:text-accent">Plum Referral Engine</Link>,
            a regulator-safe referral system for Indian insurance;{" "}
            <Link href="/work/paath" className="underline decoration-hairline underline-offset-4 hover:text-accent">Paath</Link>, a
            story-first app for learning AI, live today; and{" "}
            <Link href="/work/rostrum" className="underline decoration-hairline underline-offset-4 hover:text-accent">Rostrum</Link>, a daily
            speaking trainer that measures delivery from word timestamps.
          </p>
          <p>
            Interests sit at the meeting point of marketing and AI — how
            products earn attention, and how AI changes what one person can
            build alone. Secretary of Mercur-I, the marketing club of IIM
            Indore.
          </p>
        </div>

        <section className="mt-16 border-t border-hairline pt-12">
          <h2 className="font-mono text-sm text-ink-muted">Recognition</h2>
          <ul className="mt-8 max-w-[68ch] space-y-8">
            {recognition.map((r) => (
              <li key={r.title} className="grid gap-1">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-display text-lg font-medium tracking-tight">
                    {r.title}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {r.year}
                  </span>
                </div>
                <span className="font-mono text-sm text-accent">{r.result}</span>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {r.detail}
                </p>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit font-mono text-xs text-ink-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-accent"
                >
                  {r.source} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16 border-t border-hairline pt-12">
          <h2 className="font-mono text-sm text-ink-muted">Elsewhere</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/urgian-padma/"
              target="_blank"
              rel="me noreferrer"
              className="border border-hairline px-6 py-3 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Urgian404"
              target="_blank"
              rel="me noreferrer"
              className="border border-hairline px-6 py-3 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="mailto:urgian27@gmail.com"
              className="bg-accent px-6 py-3 font-mono text-sm text-accent-ink transition-transform duration-200 hover:scale-[1.03]"
            >
              Email
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
