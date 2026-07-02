import Image from "next/image";
import Link from "next/link";
import type { Card } from "@/lib/resume";

/**
 * Horizontal slider of dossier cards. Pure CSS scroll — snap points,
 * no JS. Cards keep a fixed width so the rail overflows and slides.
 */
export default function CardRail({ id, label, cards }: {
  id: string;
  label: string;
  cards: Card[];
}) {
  return (
    <section id={id} className="border-t border-hairline py-[var(--section)]">
      <div className="mb-10 flex items-baseline justify-between">
        <h2 className="font-mono text-sm text-ink-muted">{label}</h2>
        <span className="font-mono text-sm text-ink-muted" aria-hidden>
          slide →
        </span>
      </div>
      <div className="-mx-[var(--gutter)] flex snap-x snap-mandatory gap-6 overflow-x-auto px-[var(--gutter)] pb-4">
        {cards.map((c) => {
          const external = c.href?.startsWith("http");
          return (
            <article
              key={c.num}
              className="flex w-[85vw] max-w-[380px] shrink-0 snap-start flex-col border border-hairline p-6"
            >
              <div className="flex items-baseline justify-between font-mono text-sm text-ink-muted">
                <span>{c.num}</span>
                <span>{c.year}</span>
              </div>
              {c.image && (
                <Image
                  src={c.image}
                  alt={c.imageAlt ?? c.title}
                  width={540}
                  height={675}
                  className="mt-5 aspect-[4/3] w-full border border-hairline object-cover object-center"
                />
              )}
              <h3 className="mt-5 font-display text-xl font-medium leading-snug tracking-tight">
                {c.title}
              </h3>
              <p className="mt-2 font-mono text-sm text-accent">{c.tag}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">
                {c.detail}
              </p>
              {c.href &&
                (external ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto w-fit border-b border-ink pb-0.5 pt-5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {c.hrefLabel}
                  </a>
                ) : (
                  <Link
                    href={c.href}
                    className="mt-auto w-fit border-b border-ink pb-0.5 pt-5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
                  >
                    {c.hrefLabel}
                  </Link>
                ))}
            </article>
          );
        })}
      </div>
    </section>
  );
}
