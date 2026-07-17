import type { Metadata } from "next";

export const SITE_URL = "https://mariaschnee-pflege.de";
const SOCIAL_IMAGE = "/opengraph-image";

export function createMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: { "de-DE": path, "x-default": path },
    },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      locale: "de_DE",
      siteName: "Maria Schnee Pflegedienst",
      images: [{ url: SOCIAL_IMAGE, width: 1200, height: 630, alt: "Maria Schnee – Ambulanter & Intensivpflegedienst" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [SOCIAL_IMAGE] },
  };
}
