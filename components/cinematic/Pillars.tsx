"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const pillars = [
  {
    num: "01",
    title: "Builds with AI",
    body: "Products, not prototypes — a production referral engine, an executive HR dashboard, an offline-first fitness app. AI is the workshop, shipping is the point.",
  },
  {
    num: "02",
    title: "Marketing & Growth",
    body: "Growth models, referral systems, user-base expansion strategy — from Unstop's marketing desk to Plum's distribution engine.",
  },
  {
    num: "03",
    title: "Strategy under pressure",
    body: "National case finals against India's best B-schools — BCG, L&T, JSW, Cornell. Real problems, 5 slides, one room, no second chances.",
  },
];

/**
 * Sticky runway: three pillars reveal one at a time as you scroll.
 */
export default function Pillars() {
  const runway = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: runway,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={runway} className="relative h-[300vh]">
      <section className="sticky top-0 flex h-dvh flex-col justify-center overflow-hidden px-[var(--gutter)]">
        <p className="mb-10 font-mono text-xs tracking-[0.2em] text-ink-muted">
          WHAT I DO
        </p>
        <div className="flex flex-col gap-2 md:gap-4">
          {pillars.map((p, i) => (
            <Pillar
              key={p.num}
              {...p}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function Pillar({
  num,
  title,
  body,
  index,
  progress,
}: (typeof pillars)[number] & {
  index: number;
  progress: MotionValue<number>;
}) {
  // Each pillar owns a slice of the runway: 0-0.33, 0.33-0.66, 0.66-1
  const start = index * 0.28 + 0.05;
  const opacity = useTransform(
    progress,
    [start, start + 0.12],
    [0.18, 1],
  );
  const x = useTransform(progress, [start, start + 0.12], [40, 0]);

  return (
    <motion.div
      style={{ opacity, x }}
      className="grid items-baseline gap-4 border-t border-hairline py-6 will-change-transform md:grid-cols-12 md:py-8"
    >
      <span className="font-mono text-sm text-accent md:col-span-1">
        {num}
      </span>
      <h3 className="font-condensed text-[clamp(2.2rem,6vw,4.5rem)] leading-none md:col-span-6">
        {title}
      </h3>
      <p className="max-w-[44ch] text-sm leading-relaxed text-ink-muted md:col-span-5 md:text-base">
        {body}
      </p>
    </motion.div>
  );
}
