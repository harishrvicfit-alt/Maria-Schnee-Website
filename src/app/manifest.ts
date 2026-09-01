import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maria Schnee – Ambulanter & Intensivpflegedienst",
    short_name: "Maria Schnee",
    description:
      "Ambulante und außerklinische Intensivpflege aus Waldkraiburg.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#df007a",
    lang: "de-DE",
    icons: [
      {
        src: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
