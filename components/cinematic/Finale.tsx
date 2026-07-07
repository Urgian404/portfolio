"use client";

import { motion } from "framer-motion";

export default function Finale() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-hairline px-[var(--gutter)] py-[calc(var(--section)*1.4)]"
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, var(--glow), transparent 70%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-condensed text-[clamp(3rem,10vw,8.5rem)] leading-[0.9]"
        >
          LET&apos;S BUILD
          <br />
          <span className="text-accent">SOMETHING REAL</span>
        </motion.h2>
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <a
            href="mailto:urgian27@gmail.com"
            className="bg-accent px-8 py-4 font-mono text-sm text-accent-ink transition-transform duration-200 hover:scale-[1.03] active:translate-y-px"
          >
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/urgian-padma/"
            target="_blank"
            rel="noreferrer"
            className="border border-ink px-8 py-4 font-mono text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
        <footer className="mt-24 flex w-full flex-col items-center justify-between gap-6 border-t border-hairline pt-8 font-mono text-xs text-ink-muted md:flex-row">
          <span>© {new Date().getFullYear()} Urgian Padma</span>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/in/urgian-padma/"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Urgian404"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://drive.google.com/drive/u/1/folders/1PIqni56Sjq3M9NN1miLxko_8OaNfliEK"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-accent"
            >
              Decks
            </a>
            <a
              href="mailto:urgian27@gmail.com"
              className="transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}
