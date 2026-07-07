"use client";

import { useRef } from "react";
import Image from "next/image";
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
 * The portrait holds center stage — scale, drift and rim-light are
 * scrubbed by scroll; the name tracks in letter-by-letter around it.
 * Built to swap the still portrait for a Seedance orbit frame-sequence
 * later without touching the scroll rig.
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

  // Portrait: rises and scales in, drifts subtly like a slow orbit push-in
  const pScale = useTransform(progress, [0, 0.5, 1], [1.06, 1.16, 1.32]);
  const pY = useTransform(progress, [0, 1], ["4%", "-6%"]);
  const pRotate = useTransform(progress, [0, 1], [-2.5, 2.5]);

  // Name: first name slides left, last name slides right as you scrub
  const firstX = useTransform(progress, [0, 1], ["0%", "-7%"]);
  const lastX = useTransform(progress, [0, 1], ["0%", "7%"]);

  // Subtitle + scroll cue fade out as the scrub takes over
  const cueOpacity = useTransform(progress, [0, 0.25], [1, 0]);
  // Whole stage dims slightly at the end, handing off to the stats strip
  const stageOpacity = useTransform(progress, [0.82, 1], [1, 0.25]);

  return (
    <div ref={runway} className="relative h-[260vh]">
      <motion.section
        style={{ opacity: stageOpacity }}
        className="sticky top-0 flex h-dvh flex-col items-center justify-center overflow-hidden"
      >
        {/* Emerald atmosphere behind the subject */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[80vmin] w-[80vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[110px]"
          style={{
            background:
              "radial-gradient(closest-side, var(--glow), transparent 70%)",
          }}
        />

        {/* Name — behind the portrait, split across two lines */}
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center select-none">
          <motion.h1
            style={{ x: reduced ? undefined : firstX }}
            className="font-condensed text-[length:var(--text-hero)] leading-[0.82] tracking-[0.01em]"
            aria-label="Urgian Padma"
          >
            <Letters word={FIRST} from={-1} />
          </motion.h1>
          <motion.div
            style={{ x: reduced ? undefined : lastX }}
            aria-hidden
            className="font-condensed text-[length:var(--text-hero)] leading-[0.82] tracking-[0.01em] text-transparent"
          >
            <span
              style={{ WebkitTextStroke: "1.5px var(--ink)" }}
              className="opacity-80"
            >
              <Letters word={LAST} from={1} />
            </span>
          </motion.div>
        </div>

        {/* Portrait — center stage, above the first line, under the outline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mt-[4vh] h-[62vh] w-auto"
        >
          <motion.div
            style={{
              scale: reduced ? undefined : pScale,
              y: reduced ? undefined : pY,
              rotate: reduced ? undefined : pRotate,
            }}
            className="portrait-rim h-full w-auto will-change-transform"
          >
          <Image
            src="/cinematic/urgian-cutout.png"
            alt="Urgian Padma"
            width={1800}
            height={2100}
            priority
            className="h-full w-auto object-contain"
          />
          </motion.div>
        </motion.div>

        {/* Bottom gradient so the cutout's soft edge melts into black */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 z-30 h-[22vh] bg-gradient-to-t from-paper to-transparent"
        />

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
