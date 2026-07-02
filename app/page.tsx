const workIndex = [
  {
    num: "01",
    title: "Plum Referral Engine",
    oneLiner: "Production referral platform for a B2C insurance brand",
    status: "Live",
  },
  {
    num: "02",
    title: "LinkedIn Job CRM",
    oneLiner: "A $0 job-hunt pipeline built on LinkedIn saved posts",
    status: "Personal tool",
  },
  {
    num: "03",
    title: "FitForge",
    oneLiner: "Offline-first training and nutrition planner",
    status: "In development",
  },
];

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
              An MBA who ships
              <br />
              production software.
            </h1>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-ink-muted">
              Three systems built end to end by directing AI: a live referral
              engine, a job-search pipeline, an offline-first training app.
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
            {workIndex.map((item) => (
              <a
                key={item.num}
                href="#"
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
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
