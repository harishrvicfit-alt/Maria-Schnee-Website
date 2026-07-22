import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata(
  "24-Stunden-Pflege Waldkraiburg",
  "Bedarfsgerechte Pflege und außerklinische Intensivversorgung bis zu 24 Stunden täglich – verlässlich geplant für das vertraute Zuhause.",
  "/24-stunden-betreuung",
);
export default function Page() {
  return (
    <ServicePage
      path="/24-stunden-betreuung"
      eyebrow="Rund-um-die-Uhr-Versorgung"
      current="24-Stunden-Betreuung"
      title="Sicherheit – zu jeder Tages- und Nachtzeit."
      description="Wenn der Pflegebedarf keine Pause macht, ermöglicht eine abgestimmte Versorgung verlässliche Unterstützung rund um die Uhr."
      introTitle="So viel Unterstützung wie nötig. So viel Alltag wie möglich."
      intro={[
        "Maria Schnee bietet bei entsprechender Notwendigkeit eine flexible Eins-zu-eins-Versorgung im häuslichen Umfeld bis zu 24 Stunden täglich und sieben Tage pro Woche an.",
        "Der konkrete Umfang richtet sich nach medizinischer Verordnung, Pflegebedarf und individueller Situation. Einsatzzeiten, Pflegeziele und Verantwortlichkeiten werden vor Beginn transparent abgestimmt.",
      ]}
      image="/images/support-evening-home.webp"
      imageAlt="Ruhiges und vorbereitetes Zuhause am Abend"
      benefits={[
        "Versorgung bis zu 24 Stunden täglich",
        "Tag- und Nachtversorgung nach Bedarf",
        "Kontinuierliche Krankenbeobachtung",
        "Individuelle Tages- und Nachtstruktur",
        "Feste Absprachen im Pflegeteam",
        "Koordination mit medizinischen Partnern",
      ]}
      detailTitle="Rund um die Uhr heißt nicht rund um die Uhr Unruhe."
      detailText="Eine gute 24-Stunden-Versorgung fügt sich möglichst ruhig in das Zuhause ein. Strukturierte Übergaben, klare Verantwortlichkeiten und ein eingearbeitetes Team sorgen dafür, dass Sicherheit vorhanden ist, ohne Privatsphäre und vertraute Abläufe unnötig zu belasten."
      process={[
        "Bedarf und Verordnung klären",
        "Versorgungszeiten und Aufgaben definieren",
        "Passendes Team zusammenstellen und einarbeiten",
        "Versorgung regelmäßig anpassen",
      ]}
    />
  );
}
