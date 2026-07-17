import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata(
  "Ambulante Pflege Waldkraiburg",
  "Ambulante Pflege in Waldkraiburg und Umgebung: individuelle Grundpflege, Behandlungspflege, Betreuung und Unterstützung im eigenen Zuhause.",
  "/ambulante-pflege",
);
export default function Page() {
  return (
    <ServicePage
      path="/ambulante-pflege"
      eyebrow="Ambulante Pflege"
      current="Ambulante Pflege"
      title="Selbstbestimmt zuhause leben – mit verlässlicher Unterstützung."
      description="Pflege, Betreuung und Unterstützung dort, wo das Leben vertraut ist: in den eigenen vier Wänden."
      introTitle="Hilfe, die Sicherheit schafft und Eigenständigkeit bewahrt."
      intro={[
        "Ambulante Pflege unterstützt pflegebedürftige Menschen dabei, möglichst lange in ihrer gewohnten Umgebung zu leben. Art und Umfang der Leistungen richten sich nach Pflegegrad, persönlicher Situation und individuellen Bedürfnissen.",
        "Maria Schnee stimmt die Versorgung eng mit der pflegebedürftigen Person, Angehörigen, Ärzten und weiteren Fachkräften ab. Leistungen können medizinische, pflegerische, soziale und hauswirtschaftliche Bereiche umfassen.",
      ]}
      image="https://images.unsplash.com/photo-1559234938-b60fff04894d?auto=format&fit=crop&w=1200&q=85"
      imageAlt="Einfühlsame Unterstützung im häuslichen Umfeld"
      benefits={[
        "Körperbezogene Pflegemaßnahmen",
        "Häusliche Krankenpflege",
        "Pflegerische Betreuungsmaßnahmen",
        "Unterstützung bei der Mobilität",
        "Hilfen bei der Haushaltsführung",
        "Individuelle Pflege- und Tagesplanung",
      ]}
      detailTitle="Verlässlich im Alltag. Persönlich in der Beziehung."
      detailText="Ein Pflegedienst wird Teil eines sehr persönlichen Lebensbereichs. Deshalb zählen neben fachlicher Qualität auch Respekt, Pünktlichkeit, transparente Absprachen und ein aufmerksamer Blick für Veränderungen. Angehörige werden auf Wunsch einbezogen und zugleich spürbar entlastet."
      process={[
        "Unverbindliches Erstgespräch vereinbaren",
        "Pflegebedarf und vorhandene Ressourcen erfassen",
        "Leistungen und mögliche Kostenträger klären",
        "Einsatzplanung transparent abstimmen",
      ]}
    />
  );
}
