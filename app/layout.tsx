import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Sans,
  IBM_Plex_Mono,
  Anton,
} from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
});

const condensed = Anton({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: "400",
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

export const metadata: Metadata = {
  title: "Urgian Padma",
  description:
    "Builder interested in marketing and AI — a live referral engine, a job-hunt pipeline, an offline-first fitness app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${condensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
