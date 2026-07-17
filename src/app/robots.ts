import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: "https://mariaschnee-pflege.de/sitemap.xml", host: "https://mariaschnee-pflege.de" }; }
