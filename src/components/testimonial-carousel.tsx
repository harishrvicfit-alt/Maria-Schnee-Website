"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  { text: "Professionell und zuverlässig. Für jedes Problem wird eine Lösung gefunden. Immer wieder gerne weiterzuempfehlen.", name: "Öffentliche Google-Rezension", note: "Verifizierbar über das öffentliche Unternehmensprofil" },
  { text: "Die öffentlich sichtbaren Bewertungen heben besonders Zuverlässigkeit, Erreichbarkeit und lösungsorientierte Unterstützung hervor.", name: "Bewertungsüberblick", note: "Zusammenfassung öffentlich verfügbarer Rückmeldungen" },
  { text: "Menschliche Nähe und fachliche Sicherheit gehören zusammen. Genau dieses Versprechen prägt den gesamten Versorgungsansatz.", name: "Maria Schnee", note: "Unser Anspruch an gute Pflege" },
];

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  return <div><div className="overflow-hidden" ref={emblaRef}><div className="-ml-5 flex">{reviews.map((review, index) => <div key={review.text} className="min-w-0 flex-[0_0_90%] pl-5 md:flex-[0_0_52%] lg:flex-[0_0_40%]"><article className={`relative flex h-full min-h-80 flex-col overflow-hidden rounded-[2rem] border p-7 sm:p-8 ${index === 0 ? "border-slate-800 bg-[#0b1726] text-white" : "border-white bg-white premium-shadow"}`}><Quote className={`absolute -right-2 -top-4 size-28 ${index === 0 ? "text-white/5" : "text-primary/5"}`} /><div className="flex gap-1" aria-label="5 von 5 Sternen">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}</div><blockquote className={`relative mt-7 flex-1 font-editorial text-[1.45rem] leading-[1.35] ${index === 0 ? "text-white" : "text-foreground"}`}>„{review.text}“</blockquote><div className={`mt-8 border-t pt-5 ${index === 0 ? "border-white/10" : "border-border"}`}><p className="font-bold">{review.name}</p><p className={`mt-1 text-xs ${index === 0 ? "text-white/50" : "text-muted-foreground"}`}>{review.note}</p></div></article></div>)}</div></div><div className="mt-8 flex gap-3"><Button onClick={prev} variant="outline" size="icon" className="size-11 rounded-full bg-white" aria-label="Vorherige Bewertung"><ArrowLeft /></Button><Button onClick={next} size="icon" className="size-11 rounded-full" aria-label="Nächste Bewertung"><ArrowRight /></Button></div></div>;
}
