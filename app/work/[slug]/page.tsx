import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProject, projects, type Project } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const description = project.hook ?? project.oneLiner;
  return {
    title: `${project.title} — ${project.oneLiner}`,
    description,
    openGraph: {
      type: "article",
      title: `${project.title} — Urgian Padma`,
      description,
      images: project.thumbnail
        ? [{ url: project.thumbnail, width: 1200, height: 750, alt: `${project.title} screen` }]
        : [{ url: "/og.png", width: 1200, height: 630, alt: "Urgian Padma — proof of work" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Urgian Padma`,
      description,
    },
  };
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
          {/* Editorial lede — the problem opens large, in the serif */}
          <div className="max-w-[44ch] space-y-6">
            {project.whyItExists.map((t, i) => (
              <p
                key={t}
                className={
                  i === 0
                    ? "font-display text-[clamp(1.375rem,2.4vw,1.875rem)] font-light leading-[1.3] tracking-tight"
                    : "leading-relaxed"
                }
              >
                {t}
              </p>
            ))}
          </div>
        </Section>
      )}
      {project.whatItSolves && (
        <Section label="What it solves">
          <Paras items={project.whatItSolves} />
        </Section>
      )}
      {project.pullQuote && (
        <blockquote className="mx-auto max-w-[26ch] py-16 text-center md:py-24">
          <p className="calligraphy text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.2] text-accent">
            {project.pullQuote}
          </p>
        </blockquote>
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
                  <figure
                    className={`overflow-hidden border border-hairline ${
                      step.phone ? "mx-auto max-w-[340px]" : ""
                    }`}
                  >
                    <Image
                      src={step.image}
                      alt={step.caption ?? step.text}
                      width={1200}
                      height={750}
                      className="h-auto w-full"
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
