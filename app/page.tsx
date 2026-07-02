import Link from "next/link";
import { projects } from "@/lib/projects";
import { achievements, internships, research } from "@/lib/resume";
import CardRail from "@/components/CardRail";

export default function Home() {
  return (
    <>
      <header className="border-b border-hairline">
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
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-[1400px] px-[var(--gutter)]">
        <section className="grid min-h-[calc(100dvh-4rem)] content-center gap-10 py-16 md:grid-cols-12">
          <div className="md:col-span-9">
            <h1 className="font-display text-display-xl font-semibold leading-[0.98] tracking-tight">
              Urgian Padma.
              <br />
              Builder.
            </h1>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-ink-muted">
              Interested in marketing and AI. I like building things and
              being part of good startups — this is a record of what I've
              shipped.
            </p>
            <div className="mt-10 flex items-center gap-6">
              <a
                href="#work"
                className="bg-accent px-7 py-3.5 font-mono text-sm text-accent-ink transition-transform active:translate-y-px"
              >
                View the work
              </a>
              <a
                href="mailto:urgian27@gmail.com"
                className="border-b border-ink pb-0.5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
              >
                Contact
              </a>
            </div>
          </div>
        </section>

        <section id="work" className="pb-[var(--section)]">
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

        <CardRail id="achievements" label="Achievements" cards={achievements} />
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
            I'm Urgian Padma. Interested in marketing and AI, and I like
            being part of good startups. Mostly I like being a builder —
            picking something worth making and directing it end to end,
            using AI as the way I build. This site is a running record of
            that: what I've shipped, how, and what it does.
          </p>
        </section>

        <section
          id="contact"
          className="grid gap-8 border-t border-hairline py-[var(--section)] md:grid-cols-12"
        >
          <h2 className="font-mono text-sm text-ink-muted md:col-span-2">
            Contact
          </h2>
          <div className="flex flex-col gap-3 font-mono text-sm md:col-span-8">
            <a
              href="mailto:urgian27@gmail.com"
              className="w-fit border-b border-ink pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              urgian27@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/urgian-padma/"
              target="_blank"
              rel="noreferrer"
              className="w-fit border-b border-ink pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Urgian404"
              target="_blank"
              rel="noreferrer"
              className="w-fit border-b border-ink pb-0.5 transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
