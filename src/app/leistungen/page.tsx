import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata("Leistungen", "Ambulante Pflege, Intensivpflege, Kinderintensivpflege und Pflegeberatung bei Maria Schnee in Waldkraiburg.", "/leistungen");
export default function LeistungenPage() { return <><PageHero eyebrow="Pflege nach Maß" title="So vielfältig wie das Leben. So individuell wie Ihr Bedarf." description="Wir verbinden fachliche Versorgung mit einer Tagesstruktur, die Wünsche, Ressourcen und das familiäre Umfeld berücksichtigt." current="Leistungen" /><section className="section-space"><div className="container-shell"><SectionHeading eyebrow="Unser Angebot" title="Kompetente Pflege – zuhause und nah am Alltag." description="Die folgenden Leistungsbereiche wurden auf Grundlage der öffentlich zugänglichen Unternehmensangaben zusammengestellt." /><div className="mt-14"><ServiceGrid /></div></div></section><CtaSection /></>; }
