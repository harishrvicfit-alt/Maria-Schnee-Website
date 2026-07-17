import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata(
  "Kinderintensivpflege Waldkraiburg",
  "Familienzentrierte Kinderintensivpflege in Waldkraiburg und Umgebung – zuhause sowie begleitend in Kita, Schule oder Universität.",
  "/kinderintensivpflege",
);
export default function Page() {
  return (
    <ServicePage
      path="/kinderintensivpflege"
      eyebrow="Kinder & Jugendliche"
      current="Kinderintensivpflege"
      title="Geborgen aufwachsen. Professionell begleitet."
      description="Kinderintensivpflege, die medizinische Sicherheit, altersgerechte Entwicklung und Familienleben zusammen denkt."
      introTitle="Damit Kindsein trotz Pflegebedarf Raum behält."
      intro={[
        "Bei intensivpflegebedürftigen Kindern und Jugendlichen betrifft die Versorgung immer die ganze Familie. Maria Schnee arbeitet deshalb familienzentriert und stimmt alle Schritte eng mit Eltern, behandelnden Ärzten und weiteren Beteiligten ab.",
        "Neben der Versorgung zuhause kann die pflegerische Begleitung auch in Kindergarten, Schule, Werkstatt oder Universität erfolgen – mit dem Ziel, Teilhabe und größtmögliche Selbstständigkeit zu unterstützen.",
      ]}
      image="https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Kind und Familie in vertrauter häuslicher Umgebung"
      benefits={[
        "Häusliche Kinderintensivversorgung",
        "Heimbeatmung und Atemwegsmanagement",
        "Überwachung von Vitalparametern",
        "Tracheostoma- und Kanülenversorgung",
        "Begleitung in Kita, Schule oder Universität",
        "Organisation begleitender Therapien",
        "Überleitung aus der Klinik",
        "Rückzugspflege und Anleitung der Familie",
        "Wundmanagement",
      ]}
      detailTitle="Familienzentriert heißt: gemeinsam entscheiden."
      detailText="Eltern kennen ihr Kind am besten. Pflegefachkräfte bringen spezialisiertes Wissen und Erfahrung ein. Gute Kinderintensivpflege verbindet beides: mit transparenten Absprachen, Respekt vor familiären Routinen und einem Blick auf Geschwister, Entwicklung, Bildung und soziale Teilhabe."
      process={[
        "Familie und Kind persönlich kennenlernen",
        "Medizinische und alltägliche Bedürfnisse erfassen",
        "Versorgung mit Klinik, Ärzten und Kostenträgern koordinieren",
        "Ein verlässliches Pflegeteam schrittweise einarbeiten",
      ]}
    />
  );
}
