/**
 * Design tokens — single source of truth.
 * Aesthetic: "monograph" — a light, literary-editorial treatment. Warm
 * porcelain paper, soft sepia-black ink, one deep pine accent. A single
 * serif (Fraunces) carries the display, and its italic is the calligraphy:
 * emphasized words are set in flowing italic. Mono stays as a quiet
 * technical spine for labels. Hairline rules, generous space, print grain.
 *
 * globals.css derives its CSS variables and @theme mapping from these
 * values. If you change a value here, change it there too — the comment
 * blocks in globals.css name the token they mirror.
 */

export const color = {
  editorial: {
    paper: "#F4F1E9", // page canvas — warm porcelain
    ink: "#211C17", // primary text — soft sepia-black
    inkMuted: "#6E665A", // secondary text — warm grey
    hairline: "#DFD8C9", // 1px rules
    accent: "#2E5A4B", // deep pine — sole accent
    accentInk: "#F4F1E9", // text on accent surfaces (porcelain on pine)
    wash: "rgba(46, 90, 75, 0.10)", // faint accent wash for atmosphere
  },
} as const;

export const font = {
  display: "Fraunces", // hero, headlines and every italic emphasis word
  body: "Instrument Sans", // prose
  mono: "IBM Plex Mono", // metrics, labels, figures — technical spine
} as const;

/** Type scale — display sizes are clamp()ed in CSS for fluid behavior. */
export const type = {
  hero: "clamp(3.75rem, 12vw, 11rem)", // editorial serif name treatment
  displayXL: "clamp(2.75rem, 7vw, 5.5rem)", // hero headline
  displayL: "clamp(2rem, 4.5vw, 3.5rem)", // section headlines
  displayM: "clamp(1.5rem, 3vw, 2.25rem)", // case-study headers
  body: "1.0625rem",
  small: "0.875rem",
  label: "0.75rem", // mono labels — used sparingly (eyebrow ration)
} as const;

export const space = {
  section: "clamp(5rem, 12vh, 9rem)", // vertical rhythm between sections
  gutter: "clamp(1.25rem, 4vw, 3rem)", // page horizontal padding
  maxWidth: "1400px",
} as const;

export const radius = {
  none: "0px", // all-sharp — one shape system, locked
} as const;

export const motion = {
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  duration: "0.6s",
  stagger: 0.06,
} as const;
