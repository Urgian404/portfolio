import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const SITE_URL = "https://portfolio-roan-pi-35.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...projects.map((p) => ({
      url: `${SITE_URL}/work/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
