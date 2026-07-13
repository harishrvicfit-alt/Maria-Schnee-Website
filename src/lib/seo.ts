import type { Metadata } from "next";

export function createMetadata(title: string, description: string, path: string): Metadata {
  return { title, description, alternates: { canonical: path }, openGraph: { title, description, url: path, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] }, twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] } };
}
