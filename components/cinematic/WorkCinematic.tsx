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
        <h2 className="mb-14 font-condensed text-[clamp(2.5rem,7vw,5.5rem)] leading-none">
          PROOF OF WORK
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
                className="group grid grid-cols-12 items-baseline gap-4 border-b border-hairline py-8 transition-colors"
              >
                <span className="col-span-2 font-mono text-sm text-ink-muted md:col-span-1">
                  {item.num}
                </span>
                <span className="col-span-10 font-display text-display-m font-medium tracking-tight transition-colors group-hover:text-accent md:col-span-5">
                  {item.title}
                </span>
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
                {item.thumbnail && (
                  <span className="col-span-10 col-start-3 mt-2 block aspect-[16/10] max-w-[280px] overflow-hidden border border-hairline opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:col-span-3 md:col-start-2 md:mt-4">
                    <Image
                      src={item.thumbnail}
                      alt={`${item.title} screen`}
                      width={560}
                      height={350}
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
