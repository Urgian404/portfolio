"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

/**
 * The full build index — every project, each row opening its case page.
 */
export default function WorkCinematic({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="px-[var(--gutter)] py-[var(--section)]">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-14 font-display text-[clamp(2.5rem,7vw,5.25rem)] font-light leading-[0.95] tracking-[-0.02em]">
          Proof of <span className="calligraphy text-accent">work</span>
        </h2>
        <div className="border-t border-hairline">
          {projects.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/work/${item.slug}`}
                className="group grid grid-cols-12 gap-x-4 gap-y-5 border-b border-hairline py-10 transition-colors md:py-14"
              >
                <span className="col-span-2 font-mono text-sm text-ink-muted md:col-span-1">
                  {item.num}
                </span>
                <div className="col-span-10 md:col-span-6">
                  <span className="block font-display text-display-m font-medium tracking-tight transition-colors group-hover:text-accent">
                    {item.title}
                  </span>
                  <p className="mt-4 max-w-[52ch] font-display text-lg leading-snug tracking-tight md:text-xl">
                    {item.hook ?? item.oneLiner}
                  </p>
                  {item.summary && (
                    <p className="mt-4 max-w-[58ch] leading-relaxed text-ink-muted">
                      {item.summary}
                    </p>
                  )}
                  <span className="mt-6 inline-flex items-baseline gap-2 font-mono text-sm text-ink-muted">
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
                </div>
                {item.thumbnail && (
                  <span className="col-span-10 col-start-3 block aspect-[16/10] overflow-hidden border border-hairline opacity-80 transition-opacity duration-300 group-hover:opacity-100 md:col-span-4 md:col-start-9 md:self-start">
                    <Image
                      src={item.thumbnail}
                      alt={`${item.title} screen`}
                      width={720}
                      height={450}
                      className="h-full w-full object-cover object-top"
                    />
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
