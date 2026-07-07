import Link from "next/link";
import { projects } from "@/lib/projects";
import { achievements, internships, research } from "@/lib/resume";
import CardRail from "@/components/CardRail";
import SmoothScroll from "@/components/cinematic/SmoothScroll";
import Hero from "@/components/cinematic/Hero";
import Stats from "@/components/cinematic/Stats";
import Pillars from "@/components/cinematic/Pillars";
import WorkCinematic from "@/components/cinematic/WorkCinematic";
import Finale from "@/components/cinematic/Finale";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grain">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-[var(--gutter)]">
            <span className="font-display text-lg font-semibold tracking-tight">
              Urgian Padma
            </span>
            <div className="flex items-center gap-8 font-mono text-sm">
              <a href="#work" className="transition-colors hover:text-accent">
                Work
              </a>
              <a
                href="#achievements"
                className="transition-colors hover:text-accent"
              >
                Achievements
              </a>
              <a href="#about" className="transition-colors hover:text-accent">
                About
              </a>
              <a
                href="#contact"
                className="transition-colors hover:text-accent"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* Cinematic sequence */}
        <Hero />
        <Stats />
        <Pillars />
        <WorkCinematic />

        {/* The dossier — full record, same text and images as always */}
        <main className="mx-auto w-full max-w-[1400px] px-[var(--gutter)]">
          <section id="index" className="pb-[var(--section)] pt-8">
            <p className="mb-6 font-mono text-xs tracking-[0.2em] text-ink-muted">
              FULL INDEX
            </p>
            <div className="border-t border-hairline">
              {projects.map((item) => (
                <Link
                  key={item.num}
                  href={`/work/${item.slug}`}
                  className="group grid grid-cols-12 items-baseline gap-4 border-b border-hairline py-8 transition-colors"
                >
                  <span className="col-span-2 font-mono text-sm text-ink-muted md:col-span-1">
                    {item.num}
                  </span>
                  <span className="col-span-10 font-display text-display-m font-medium tracking-tight transition-colors group-hover:text-accent md:col-span-5">
                    {item.title}
                  </span>
                  <span className="col-span-10 col-start-3 text-ink-muted md:col-span-4 md:col-start-auto">
                    {item.oneLiner}
                  </span>
                  <span className="col-span-10 col-start-3 font-mono text-sm text-ink-muted md:col-span-2 md:col-start-auto md:text-right">
                    {item.status}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <CardRail
            id="achievements"
            label="Achievements"
            cards={achievements}
          />
          <CardRail
            id="internships"
            label="Internships & Live Projects"
            cards={internships}
          />
          <CardRail id="research" label="Projects & Research" cards={research} />

          <section
            id="about"
            className="grid gap-8 border-t border-hairline py-[var(--section)] md:grid-cols-12"
          >
            <h2 className="font-mono text-sm text-ink-muted md:col-span-2">
              About
            </h2>
            <p className="max-w-[58ch] text-lg leading-relaxed md:col-span-8">
              I&apos;m Urgian Padma. Interested in marketing and AI, and I like
              being part of good startups. Mostly I like being a builder —
              picking something worth making and directing it end to end,
              using AI as the way I build. This site is a running record of
              that: what I&apos;ve shipped, how, and what it does.
            </p>
          </section>
        </main>

        <Finale />
      </div>
    </SmoothScroll>
  );
}
