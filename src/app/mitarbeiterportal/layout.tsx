import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mitarbeiterportal",
  description: "Geschützter interner Bereich für autorisierte Mitarbeitende.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function StaffLayout({ children }: { children: React.ReactNode }) {
  return children;
}
