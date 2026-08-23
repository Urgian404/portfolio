import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

// Fraunces — the literary display + calligraphic italic. One serif carries
// hero, headlines and every italicized emphasis word.
const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono-plex",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const SITE_URL = "https://portfolio-roan-pi-35.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Urgian Padma — builder · marketing & AI",
    template: "%s — Urgian Padma",
  },
  description:
    "Portfolio of Urgian Padma, IPM at IIM Indore. Ships real products end to end — an AI personal stylist, an adaptive training planner, and a referral engine for Indian insurance.",
  keywords: [
    "Urgian Padma",
    "builder",
    "portfolio",
    "IIM Indore",
    "IPM",
    "marketing",
    "AI products",
    "Drizzler",
    "FitForge",
    "Plum Referral Engine",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Urgian Padma",
    title: "Urgian Padma — builder · marketing & AI",
    description:
      "Ships real products end to end — an AI personal stylist, an adaptive training planner, and a referral engine for Indian insurance.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Urgian Padma — proof of work" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urgian Padma — builder · marketing & AI",
    description:
      "Ships real products end to end — an AI stylist, an adaptive training planner, and a referral engine for Indian insurance.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

/** JSON-LD Person schema — the structured data search engines read for
 *  name queries. Facts only: nothing here that isn't on the page. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Urgian Padma",
  url: SITE_URL,
  jobTitle: "Builder",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Management Indore",
  },
  knowsAbout: ["Marketing", "AI products", "Product building"],
  sameAs: [
    "https://www.linkedin.com/in/urgian-padma/",
    "https://github.com/Urgian404",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
