"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const featured = [
  {
    slug: "plum-referral-engine",
    num: "01",
    title: "Plum Referral Engine",
    pitch:
      "Turned customers into a distribution channel — live in production for a B2C insurance brand.",
  },
  {
    slug: "hr-dashboard",
    num: "02",
    title: "HR MIS Dashboard",
    pitch:
      "One Excel upload becomes an executive dashboard — KPIs, attrition, cost, 6-month trends.",
  },
  {
    slug: "fitforge",
    num: "03",
    title: "FitForge",
    pitch:
      "Offline-first training and nutrition planner with AI voice logging, synced when you are.",
  },
];

export default function WorkCinematic() {
  return (
    <section id="work" className="px-[var(--gutter)] py-[var(--section)]">
      <div className="mx-auto max-w-[1400px]">
        <p className="mb-4 font-mono text-xs tracking-[0.2em] text-ink-muted">
          SELECTED BUILDS
        </p>
        <h2 className="mb-14 font-condensed text-[clamp(2.5rem,7vw,5.5rem)] leading-none">
          THREE THINGS I SHIPPED
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((f, i) => (
            <motion.div
              key={f.slug}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Link
                href={`/work/${f.slug}`}
                className="group flex h-full flex-col justify-between gap-16 border border-hairline p-8 transition-colors duration-300 hover:border-accent"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-ink-muted transition-colors group-hover:text-accent">
                    {f.num}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-sm text-ink-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </div>
                <div>
                  <h3 className="mb-3 font-display text-display-m font-semibold tracking-tight transition-transform duration-300 group-hover:-translate-y-1">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted">
                    {f.pitch}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
