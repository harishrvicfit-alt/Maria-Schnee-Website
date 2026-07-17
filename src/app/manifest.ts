import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Maria Schnee – Ambulanter & Intensivpflegedienst",
    short_name: "Maria Schnee",
    description: "Ambulante und außerklinische Intensivpflege aus Waldkraiburg.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#df007a",
    lang: "de-DE",
    icons: [{ src: "/maria-schnee-logo.png", sizes: "any", type: "image/png", purpose: "any" }],
  };
}
