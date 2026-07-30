import { projects } from "@/lib/projects";
import { achievements, internships, research } from "@/lib/resume";
import CardRail from "@/components/CardRail";
import SmoothScroll from "@/components/cinematic/SmoothScroll";
import Hero from "@/components/cinematic/Hero";
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
        <WorkCinematic projects={projects} />

        {/* The dossier — full record, same text and images as always */}
        <main className="mx-auto w-full max-w-[1400px] px-[var(--gutter)]">
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
              being part of good startups. Mostly I like being a{" "}
              <span className="calligraphy">builder</span> — picking something
              worth making and directing it end to end, using AI as the way I
              build. This site is a running record of that: what I&apos;ve
              shipped, how, and what it does.
            </p>
          </section>
        </main>

        <Finale />
      </div>
    </SmoothScroll>
  );
}
