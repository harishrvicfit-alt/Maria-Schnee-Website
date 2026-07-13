import type { Metadata } from "next";
import { CtaSection } from "@/components/cta-section";
import { FaqList } from "@/components/faq-list";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata("Häufige Fragen", "Antworten auf häufige Fragen zu ambulanter Pflege, Intensivpflege, Kosten und Zusammenarbeit.", "/faq");
export default function FaqPage() { return <><PageHero eyebrow="Gut informiert" current="FAQ" title="Antworten, die Ihnen den nächsten Schritt erleichtern." description="Hier finden Sie erste Orientierung zur Versorgung. Ihre persönliche Situation klären wir am besten in einem unverbindlichen Gespräch." /><section className="section-space"><div className="container-shell"><div className="mx-auto max-w-4xl"><FaqList /></div></div></section><CtaSection /></>; }
