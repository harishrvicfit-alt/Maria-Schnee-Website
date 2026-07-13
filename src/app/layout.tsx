import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CookieBanner } from "@/components/cookie-banner";
import { FloatingContact } from "@/components/floating-contact";
import { GlobalStructuredData } from "@/components/structured-data";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://pflegedienst-mariaschnee.de"),
  title: { default: "Maria Schnee | Ambulanter & Intensivpflegedienst Waldkraiburg", template: "%s | Maria Schnee" },
  description: "Ambulante Pflege, außerklinische Intensivpflege und Kinderintensivpflege in Waldkraiburg und Umgebung – persönlich, fachlich und familienzentriert.",
  keywords: ["Pflegedienst Waldkraiburg", "Ambulante Pflege", "Intensivpflege Bayern", "Kinderintensivpflege", "24 Stunden Pflege", "Pflegeberatung"],
  authors: [{ name: "Ambulanter & Intensivpflegedienst Maria Schnee GmbH" }],
  creator: "Ambulanter & Intensivpflegedienst Maria Schnee GmbH",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "de_DE", url: "/", siteName: "Maria Schnee Pflegedienst",
    title: "Pflege, die Sicherheit gibt. Nähe, die bleibt.",
    description: "Professionelle ambulante und außerklinische Intensivpflege aus Waldkraiburg.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Maria Schnee – Ambulanter & Intensivpflegedienst" }],
  },
  twitter: { card: "summary_large_image", title: "Maria Schnee Pflegedienst", description: "Ambulante und außerklinische Intensivpflege aus Waldkraiburg.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#df007a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <a href="#hauptinhalt" className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition-transform focus:translate-y-0">Zum Hauptinhalt</a>
        <GlobalStructuredData />
        <SiteHeader />
        <main id="hauptinhalt">{children}</main>
        <SiteFooter />
        <FloatingContact />
        <CookieBanner />
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
