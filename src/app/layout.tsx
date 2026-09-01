import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";
import { FloatingContact } from "@/components/floating-contact";
import { GlobalStructuredData } from "@/components/structured-data";
import { MotionProvider } from "@/components/motion-provider";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Maria Schnee Pflegedienst",
  title: {
    default: "Maria Schnee | Ambulanter & Intensivpflegedienst Waldkraiburg",
    template: "%s | Maria Schnee",
  },
  description:
    "Maria Schnee: ambulanter Pflegedienst und außerklinische Intensivpflege für Kinder und Erwachsene in Waldkraiburg und Umgebung. Jetzt beraten lassen.",
  keywords: [
    "Pflegedienst Waldkraiburg",
    "Ambulante Pflege Waldkraiburg",
    "Außerklinische Intensivpflege",
    "Intensivpflege Bayern",
    "Kinderintensivpflege",
    "Erwachsenenpflege",
    "24 Stunden Pflege",
    "Pflegeberatung Waldkraiburg",
  ],
  authors: [{ name: "Ambulanter & Intensivpflegedienst Maria Schnee GmbH" }],
  creator: "Ambulanter & Intensivpflegedienst Maria Schnee GmbH",
  publisher: "Ambulanter & Intensivpflegedienst Maria Schnee GmbH",
  category: "Gesundheit und Pflege",
  referrer: "origin-when-cross-origin",
  alternates: { canonical: "/", languages: { "de-DE": "/", "x-default": "/" } },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  other: {
    "msapplication-TileColor": "#ffffff",
    "msapplication-config": "/browserconfig.xml",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "/",
    siteName: "Maria Schnee Pflegedienst",
    title: "Pflege, die Sicherheit gibt. Nähe, die bleibt.",
    description:
      "Professionelle ambulante und außerklinische Intensivpflege aus Waldkraiburg.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Maria Schnee – Ambulanter & Intensivpflegedienst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maria Schnee Pflegedienst",
    description:
      "Ambulante und außerklinische Intensivpflege aus Waldkraiburg.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": "B7F59012AF39D79EC81DC030800D604A",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#df007a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <body>
        <MotionProvider>
          <a
            href="#hauptinhalt"
            className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform focus:translate-y-0"
          >
            Zum Hauptinhalt
          </a>
          <GlobalStructuredData />
          <SiteHeader />
          <main id="hauptinhalt">{children}</main>
          <SiteFooter />
          <FloatingContact />
          <CookieBanner />
          <Toaster position="top-right" richColors closeButton />
        </MotionProvider>
      </body>
    </html>
  );
}
