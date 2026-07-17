import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata(
  "Pflegeberatung Waldkraiburg",
  "Persönliche Pflegeberatung in Waldkraiburg: Orientierung zu Pflegebedarf, Versorgungsmöglichkeiten und Beratungsbesuchen nach § 37 Abs. 3 SGB XI.",
  "/pflegeberatung",
);
export default function Page() {
  return (
    <ServicePage
      path="/pflegeberatung"
      eyebrow="Pflegeberatung"
      current="Pflegeberatung"
      title="Verstehen, was jetzt wichtig ist. Klar wissen, wie es weitergeht."
      description="Persönliche Beratung schafft Orientierung bei Pflegebedarf, Leistungen, Versorgung und nächsten Schritten."
      introTitle="Ein Gespräch, das Komplexität verständlich macht."
      intro={[
        "Ein Pflegefall bringt viele Fragen mit sich: Welche Unterstützung ist sinnvoll? Wie lässt sich der Alltag organisieren? Welche Leistungen kommen infrage? In einem persönlichen Gespräch erfasst Maria Schnee die Situation und entwickelt mit Ihnen eine tragfähige Perspektive.",
        "Laut Unternehmen werden auch kostenfreie Beratungsbesuche für Pflegenachweise nach § 37 Abs. 3 SGB XI angeboten.",
      ]}
      image="https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Persönliches Beratungsgespräch zur Pflege"
      benefits={[
        "Unverbindliches Erstgespräch",
        "Ermittlung des individuellen Pflegebedarfs",
        "Beratung zu Versorgungsmöglichkeiten",
        "Unterstützung bei der Pflegeplanung",
        "Berücksichtigung möglicher Kostenträger",
        "Beratungsbesuche nach § 37 Abs. 3 SGB XI",
      ]}
      detailTitle="Gute Entscheidungen brauchen verständliche Informationen."
      detailText="Pflegeberatung soll nicht überfordern, sondern entlasten. Deshalb werden fachliche Themen klar erklärt, Alternativen transparent dargestellt und Angehörige auf Wunsch einbezogen. Ziel ist ein Versorgungskonzept, das medizinisch sinnvoll, organisatorisch realistisch und menschlich passend ist."
      process={[
        "Termin vereinbaren",
        "Persönliche Situation gemeinsam betrachten",
        "Mögliche Leistungen und nächste Schritte erklären",
        "Bei der Umsetzung und Koordination unterstützen",
      ]}
    />
  );
}
