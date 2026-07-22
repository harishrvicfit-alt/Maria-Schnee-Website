import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const lastModified = new Date("2026-07-18T00:00:00.000Z");

const routes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/leistungen", changeFrequency: "monthly", priority: 0.9 },
  { path: "/ambulante-pflege", changeFrequency: "monthly", priority: 0.9 },
  { path: "/intensivpflege", changeFrequency: "monthly", priority: 0.9 },
  { path: "/kinderintensivpflege", changeFrequency: "monthly", priority: 0.9 },
  { path: "/erwachsenenpflege", changeFrequency: "monthly", priority: 0.8 },
  { path: "/24-stunden-betreuung", changeFrequency: "monthly", priority: 0.8 },
  { path: "/pflegeberatung", changeFrequency: "monthly", priority: 0.8 },
  { path: "/ueber-uns", changeFrequency: "monthly", priority: 0.7 },
  { path: "/karriere", changeFrequency: "weekly", priority: 0.7 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/kontakt", changeFrequency: "monthly", priority: 0.8 },
  { path: "/beschwerden-anregungen", changeFrequency: "yearly", priority: 0.5 },
  { path: "/impressum", changeFrequency: "yearly", priority: 0.3 },
  { path: "/datenschutz", changeFrequency: "yearly", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
