"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";

const FIRST = "Urgian";
const LAST = "Padma";

/**
 * Monograph hero: a tall scroll runway with a pinned viewport.
 * The name is set in Fraunces — "Urgian" roman, "Padma" in calligraphic
 * italic. The two lines start split to opposite edges and slide into the
 * center as the hero exits. Portrait slot intentionally empty until the
 * new image arrives; the scroll rig stays.
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

  // Urgian slides left → center; Padma slides right → center
  const firstX = useTransform(progress, [0, 0.85], ["-12%", "0%"]);
  const lastX = useTransform(progress, [0, 0.85], ["12%", "0%"]);

  // Lines pull together vertically as they converge
  const gap = useTransform(progress, [0, 0.85], ["0.1em", "-0.04em"]);

  // Subtitle + scroll cue fade out as the scrub takes over
  const cueOpacity = useTransform(progress, [0, 0.25], [1, 0]);
  // Stage dims at the end, handing off to the next section
  const stageOpacity = useTransform(progress, [0.85, 1], [1, 0.25]);

  return (
    <div ref={runway} className="relative h-[140vh]">
      <motion.section
        style={{ opacity: stageOpacity }}
        className="sticky top-0 flex h-dvh flex-col items-center justify-center overflow-hidden"
      >
        {/* Faint accent wash — a breath of pine, not a glow */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[70vmin] w-[110vmin] -translate-x-1/2 -translate-y-1/2 rounded-[50%] opacity-70 blur-[120px]"
          style={{
            background:
              "radial-gradient(closest-side, var(--wash), transparent 72%)",
          }}
        />

        {/* Name — two lines split to the edges, converging on scroll */}
        <motion.div
          style={{ gap: reduced ? undefined : gap }}
          className="relative z-10 flex w-full flex-col px-[var(--gutter)] select-none"
        >
          <motion.h1
            style={{ x: reduced ? undefined : firstX }}
            className="w-full text-left font-display text-[length:var(--text-hero)] font-light leading-[0.92] tracking-[-0.02em] will-change-transform"
          >
            {/* Full name as real text for search engines; letters are decoration */}
            <span className="sr-only">Urgian Padma</span>
            <span aria-hidden>
              <Letters word={FIRST} from={-1} />
            </span>
          </motion.h1>
          <motion.div
            style={{ x: reduced ? undefined : lastX }}
            aria-hidden
            className="w-full text-right font-display text-[length:var(--text-hero)] font-normal italic leading-[0.92] tracking-[-0.02em] text-accent will-change-transform"
          >
            <Letters word={LAST} from={1} italic />
          </motion.div>
        </motion.div>

        {/* Subtitle + cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-10 z-40 flex w-full items-end justify-between px-[var(--gutter)]"
        >
          <div>
            <p className="max-w-[38ch] text-sm leading-relaxed text-ink-muted md:text-base">
              Builder. Marketing, AI and the space between —{" "}
              <span className="calligraphy text-ink">
                shipping real products
              </span>{" "}
              and winning national case finals on the side.
            </p>
            <p className="mt-3 font-mono text-xs tracking-wider text-ink-muted uppercase">
              IPM · IIM Indore
            </p>
          </div>
          <div className="hidden items-center gap-3 font-mono text-xs tracking-wider text-ink-muted uppercase md:flex">
            <span className="inline-block h-8 w-px animate-pulse bg-accent" />
            Scroll
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

/** Letter-by-letter track-in on load. */
function Letters({
  word,
  from,
  italic = false,
}: {
  word: string;
  from: -1 | 1;
  italic?: boolean;
}) {
  return (
    <span
      className={`inline-flex overflow-hidden py-[0.08em] ${
        italic ? "pr-[0.12em]" : ""
      }`}
    >
      {word.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%", opacity: 0, x: from * 20 }}
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
