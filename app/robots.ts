import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portfolio-roan-pi-35.vercel.app/sitemap.xml",
  };
}
