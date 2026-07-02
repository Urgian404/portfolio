/**
 * Design tokens — single source of truth.
 * Aesthetic: "technical dossier" — print-engineering-report energy.
 * Paper-and-ink canvas, one ultramarine accent, grotesque display,
 * mono for metrics/labels, hairline rules, big numerals, asymmetric grid.
 *
 * globals.css derives its CSS variables and @theme mapping from these
 * values. If you change a value here, change it there too — the comment
 * blocks in globals.css name the token they mirror.
 */

export const color = {
  light: {
    paper: "#F4F4F0", // page canvas — cool drafting paper, not cream
    ink: "#161714", // primary text — near-black, slightly cool
    inkMuted: "#5D5F58", // secondary text
    hairline: "#D8D8D0", // 1px rules
    accent: "#2643C7", // ultramarine — blueprint heritage, sole accent
    accentInk: "#F4F4F0", // text on accent surfaces
  },
  dark: {
    paper: "#151614",
    ink: "#EDECE4",
    inkMuted: "#9A9C93",
    hairline: "#33342F",
    accent: "#8FA0FF",
    accentInk: "#151614",
  },
} as const;

export const font = {
  display: "Bricolage Grotesque", // headlines — characterful grotesque
  body: "Instrument Sans", // prose
  mono: "IBM Plex Mono", // metrics, labels, figures — dossier voice
} as const;

/** Type scale — display sizes are clamp()ed in CSS for fluid behavior. */
export const type = {
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
  none: "0px", // dossier is all-sharp — one shape system, locked
} as const;

export const motion = {
  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
  duration: "0.6s",
  stagger: 0.06,
} as const;
