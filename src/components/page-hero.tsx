import Link from "next/link";
import { BreadcrumbJsonLd } from "next-seo";
import { ChevronRight, Home } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function PageHero({ eyebrow, title, description, current }: { eyebrow: string; title: string; description: string; current: string }) {
  return <section className="relative overflow-hidden border-b bg-[linear-gradient(135deg,#f8fbff_0%,#fff_48%,#fff1f8_100%)] py-16 sm:py-20 lg:py-24"><BreadcrumbJsonLd items={[{ name: "Startseite", item: "https://pflegedienst-mariaschnee.de" }, { name: current, item: `https://pflegedienst-mariaschnee.de/${current.toLowerCase().replaceAll(" ", "-")}` }]} /><div className="absolute right-0 top-0 size-[500px] rounded-full bg-sky-200/25 blur-3xl" /><div className="container-shell relative"><nav aria-label="Brotkrümelnavigation" className="mb-9 flex items-center gap-2 text-xs font-semibold text-muted-foreground"><Link href="/" aria-label="Startseite"><Home className="size-3.5" /></Link><ChevronRight className="size-3" /><span>{current}</span></nav><Reveal><div className="max-w-4xl"><p className="eyebrow">{eyebrow}</p><h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] sm:text-5xl lg:text-6xl lg:leading-[1.04]">{title}</h1><p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-muted-foreground">{description}</p></div></Reveal></div></section>;
}
