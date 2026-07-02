import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

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
            <span className="mt-4 inline-block border border-hairline px-3 py-1 font-mono text-sm text-ink-muted">
              {project.status}
            </span>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-hairline pt-12 md:mt-24 md:grid-cols-12 md:gap-4 md:pt-16">
          <h2 className="font-mono text-sm text-ink-muted md:col-span-3">
            Problem
          </h2>
          <p className="max-w-[62ch] leading-relaxed md:col-span-9">
            {project.problem}
          </p>
        </div>

        <div className="mt-12 grid gap-12 border-t border-hairline pt-12 md:grid-cols-12 md:gap-4 md:pt-16">
          <h2 className="font-mono text-sm text-ink-muted md:col-span-3">
            Build
          </h2>
          <p className="max-w-[62ch] leading-relaxed md:col-span-9">
            {project.build}
          </p>
        </div>

        <div className="mt-12 grid gap-12 border-t border-hairline pt-12 md:grid-cols-12 md:gap-4 md:pb-16 md:pt-16">
          <h2 className="font-mono text-sm text-ink-muted md:col-span-3">
            Results
          </h2>
          <ul className="max-w-[62ch] space-y-3 md:col-span-9">
            {project.metrics.map((m) => (
              <li key={m} className="flex gap-3 leading-relaxed">
                <span className="text-accent">—</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
