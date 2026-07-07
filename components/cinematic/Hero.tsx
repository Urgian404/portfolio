"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const FIRST = "URGIAN";
const LAST = "PADMA";

/**
 * Cinematic hero: a tall scroll runway with a pinned viewport.
 * The two name lines start split to opposite edges — URGIAN off left,
 * PADMA off right — and scrolling slides them into the center as the
 * hero exits. Portrait slot intentionally empty until the new image
 * (or the Seedance orbit sequence) arrives; the scroll rig stays.
 */
export default function Hero() {
  const runway = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: runway,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.35,
  });

  // URGIAN slides left → center; PADMA slides right → center
  const firstX = useTransform(progress, [0, 0.85], ["-14%", "0%"]);
  const lastX = useTransform(progress, [0, 0.85], ["14%", "0%"]);

  // Lines pull together vertically as they converge
  const gap = useTransform(progress, [0, 0.85], ["0.12em", "0em"]);

  // Subtitle + scroll cue fade out as the scrub takes over
  const cueOpacity = useTransform(progress, [0, 0.25], [1, 0]);
  // Stage dims at the end, handing off to the next section
  const stageOpacity = useTransform(progress, [0.85, 1], [1, 0.2]);

  return (
    <div ref={runway} className="relative h-[220vh]">
      <motion.section
        style={{ opacity: stageOpacity }}
        className="sticky top-0 flex h-dvh flex-col items-center justify-center overflow-hidden"
      >
        {/* Emerald atmosphere */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-[110px]"
          style={{
            background:
              "radial-gradient(closest-side, var(--glow), transparent 70%)",
          }}
        />

        {/* Name — two lines split to the edges, converging on scroll */}
        <motion.div
          style={{ gap: reduced ? undefined : gap }}
          className="relative z-10 flex w-full flex-col px-[var(--gutter)] select-none"
        >
          <motion.h1
            style={{ x: reduced ? undefined : firstX }}
            className="w-full text-left font-condensed text-[length:var(--text-hero)] leading-[0.85] tracking-[0.01em] will-change-transform"
            aria-label="Urgian Padma"
          >
            <Letters word={FIRST} from={-1} />
          </motion.h1>
          <motion.div
            style={{ x: reduced ? undefined : lastX }}
            aria-hidden
            className="w-full text-right font-condensed text-[length:var(--text-hero)] leading-[0.85] tracking-[0.01em] text-transparent will-change-transform"
          >
            <span
              style={{ WebkitTextStroke: "1.5px var(--ink)" }}
              className="opacity-90"
            >
              <Letters word={LAST} from={1} />
            </span>
          </motion.div>
        </motion.div>

        {/* Subtitle + cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-10 z-40 flex w-full items-end justify-between px-[var(--gutter)]"
        >
          <p className="max-w-[34ch] text-sm leading-relaxed text-ink-muted md:text-base">
            Builder. Marketing, AI and the space between —{" "}
            <span className="text-ink">shipping real products</span> and
            winning national case finals on the side.
          </p>
          <div className="hidden items-center gap-3 font-mono text-xs text-ink-muted md:flex">
            <span className="inline-block h-8 w-px animate-pulse bg-accent" />
            SCROLL
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

/** Letter-by-letter track-in on load. */
function Letters({ word, from }: { word: string; from: -1 | 1 }) {
  return (
    <span className="inline-flex overflow-hidden py-[0.06em]">
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0, x: from * 24 }}
          animate={{ y: 0, opacity: 1, x: 0 }}
          transition={{
            delay: 0.25 + i * 0.07,
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block will-change-transform"
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}
