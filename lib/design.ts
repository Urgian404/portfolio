/**
 * Design tokens — single source of truth.
 * Aesthetic: "cinematic dossier" — award-site energy on a technical spine.
 * Ink-black canvas, cream type, one emerald accent, condensed display
 * for hero moments, grotesque for structure, mono for metrics/labels,
 * hairline rules, big numerals, film grain, scroll-driven motion.
 *
 * globals.css derives its CSS variables and @theme mapping from these
 * values. If you change a value here, change it there too — the comment
 * blocks in globals.css name the token they mirror.
 */

export const color = {
  cinematic: {
    paper: "#0A0A0B", // page canvas — ink black
    ink: "#F1E9DB", // primary text — cream
    inkMuted: "#8F8B80", // secondary text
    hairline: "#26261F", // 1px rules
    accent: "#2FD08C", // emerald — sole accent
    accentInk: "#06251A", // text on accent surfaces
    glow: "rgba(47, 208, 140, 0.55)", // portrait rim light
  },
} as const;

export const font = {
  condensed: "Anton", // hero display — massive condensed statements
  display: "Bricolage Grotesque", // section headlines — characterful grotesque
  body: "Instrument Sans", // prose
  mono: "IBM Plex Mono", // metrics, labels, figures — dossier voice
} as const;

/** Type scale — display sizes are clamp()ed in CSS for fluid behavior. */
export const type = {
  hero: "clamp(4.5rem, 16.5vw, 15rem)", // cinematic name treatment
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
