import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata(
  "Intensivpflege für Erwachsene Waldkraiburg",
  "Außerklinische 1:1-Intensivpflege für Erwachsene im häuslichen Umfeld – persönlich, fachlich und alltagsnah in Waldkraiburg und Umgebung.",
  "/erwachsenenpflege",
);
export default function Page() {
  return (
    <ServicePage
      path="/erwachsenenpflege"
      eyebrow="Erwachsenenpflege"
      current="Erwachsenenpflege"
      title="Selbstbestimmung bewahren – auch bei komplexem Pflegebedarf."
      description="Professionelle Intensivversorgung für Erwachsene, abgestimmt auf Persönlichkeit, Alltag und medizinische Erfordernisse."
      introTitle="Versorgung, die den Menschen nicht auf eine Diagnose reduziert."
      intro={[
        "Außerklinische Intensivpflege ermöglicht Erwachsenen mit komplexem medizinischem Bedarf ein Leben außerhalb der Klinik. Im Mittelpunkt stehen Sicherheit, verlässliche Abläufe und die größtmögliche persönliche Freiheit.",
        "Maria Schnee plant die Versorgung gemeinsam mit der pflegebedürftigen Person, Angehörigen und medizinischen Partnern. Tagesstruktur und Pflegeziele orientieren sich an vorhandenen Fähigkeiten, sozialen Ressourcen und individuellen Wünschen.",
      ]}
      image="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Individuelle pflegerische Begleitung eines Erwachsenen"
      benefits={[
        "Individuelle 1:1-Versorgung",
        "Behandlungspflege und Krankenbeobachtung",
        "Beatmungs- und Vitalparameterkontrolle",
        "Atemwegs- und Tracheostomaversorgung",
        "Ernährungsmanagement",
        "Begleitung im Alltag",
        "Koordination mit Ärzten und Therapeuten",
        "Überleitungspflege",
        "Urlaubsbegleitung nach Absprache",
      ]}
      detailTitle="Kompetenz gibt Freiheit zurück."
      detailText="Intensive Pflege soll nicht den gesamten Alltag bestimmen, sondern ihn ermöglichen. Ein gut eingearbeitetes Team schafft Sicherheit im Hintergrund, berücksichtigt persönliche Gewohnheiten und unterstützt dabei, soziale Kontakte, Aktivitäten und vertraute Routinen so weit wie möglich zu erhalten."
    />
  );
}
