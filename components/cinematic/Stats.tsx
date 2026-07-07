"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "framer-motion";

type Stat = {
  value: number;
  format: (n: number) => string;
  label: string;
};

const stats: Stat[] = [
  {
    value: 70980,
    format: (n) => Math.round(n).toLocaleString("en-US"),
    label: "participants outranked — Namma Yatri national winner",
  },
  {
    value: 10,
    format: (n) => `${Math.round(n)}+`,
    label: "national case-competition finals and podiums",
  },
  {
    value: 4,
    format: (n) => String(Math.round(n)),
    label: "pre-placement interviews — BCG, L&T, JSW Energy, Reckitt",
  },
  {
    value: 3,
    format: (n) => String(Math.round(n)),
    label: "AI-built products live, from referral engine to HR dashboard",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-hairline">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <StatCell key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}

function StatCell({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduced = useReducedMotion();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => stat.format(v));

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      mv.set(stat.value);
      return;
    }
    const controls = animate(mv, stat.value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [inView, mv, reduced, stat.value]);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-3 border-hairline p-8 md:p-10 [&:nth-child(odd)]:border-r md:[&:nth-child(-n+3)]:border-r [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
    >
      <motion.span className="font-condensed text-5xl text-accent md:text-6xl">
        {text}
      </motion.span>
      <span className="font-mono text-xs leading-relaxed text-ink-muted">
        {stat.label}
      </span>
    </div>
  );
}
