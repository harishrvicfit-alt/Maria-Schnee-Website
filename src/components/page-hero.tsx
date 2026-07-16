import Link from "next/link";
import { BreadcrumbJsonLd } from "next-seo";
import { ChevronRight, Home } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function PageHero({ eyebrow, title, description, current }: { eyebrow: string; title: string; description: string; current: string }) {
  return <section className="relative overflow-hidden border-b bg-[linear-gradient(135deg,#f8fbff_0%,#fff_48%,#fff1f8_100%)] py-14 sm:py-20 lg:py-24"><BreadcrumbJsonLd items={[{ name: "Startseite", item: "https://pflegedienst-mariaschnee.de" }, { name: current, item: `https://pflegedienst-mariaschnee.de/${current.toLowerCase().replaceAll(" ", "-")}` }]} /><div className="absolute right-0 top-0 size-[500px] rounded-full bg-sky-200/25 blur-3xl" /><div className="container-shell relative"><nav aria-label="Brotkrümelnavigation" className="mb-7 flex min-w-0 items-center gap-2 text-xs font-semibold text-muted-foreground sm:mb-9"><Link href="/" aria-label="Startseite" className="shrink-0"><Home className="size-3.5" /></Link><ChevronRight className="size-3 shrink-0" /><span className="min-w-0 truncate">{current}</span></nav><Reveal><div className="max-w-4xl"><p className="eyebrow">{eyebrow}</p><h1 className="text-balance text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl lg:text-6xl lg:leading-[1.04]">{title}</h1><p className="mt-5 max-w-2xl text-balance text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8">{description}</p></div></Reveal></div></section>;
}
