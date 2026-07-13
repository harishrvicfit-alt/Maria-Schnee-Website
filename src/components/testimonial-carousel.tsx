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
  return <div><div className="overflow-hidden" ref={emblaRef}><div className="-ml-5 flex">{reviews.map((review) => <div key={review.text} className="min-w-0 flex-[0_0_90%] pl-5 md:flex-[0_0_52%] lg:flex-[0_0_40%]"><article className="flex h-full min-h-80 flex-col rounded-3xl border bg-white p-7 shadow-sm sm:p-8"><Quote className="size-9 text-primary/25" /><div className="mt-5 flex gap-1" aria-label="5 von 5 Sternen">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-amber-400 text-amber-400" />)}</div><blockquote className="mt-6 flex-1 text-lg font-medium leading-8 text-foreground">„{review.text}“</blockquote><div className="mt-8 border-t pt-5"><p className="font-bold">{review.name}</p><p className="mt-1 text-xs text-muted-foreground">{review.note}</p></div></article></div>)}</div></div><div className="mt-7 flex gap-3"><Button onClick={prev} variant="outline" size="icon" className="rounded-full" aria-label="Vorherige Bewertung"><ArrowLeft /></Button><Button onClick={next} variant="outline" size="icon" className="rounded-full" aria-label="Nächste Bewertung"><ArrowRight /></Button></div></div>;
}
