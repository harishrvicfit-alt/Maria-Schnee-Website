import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/site-data";

export function ServiceGrid({ limit }: { limit?: number }) {
  return <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.slice(0, limit).map((service) => { const Icon = service.icon; return <Card key={service.href} className="group overflow-hidden border-border/70 bg-card shadow-[0_18px_50px_-35px_rgba(20,40,70,.35)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_25px_65px_-35px_rgba(223,0,122,.3)]"><CardContent className="p-7 sm:p-8"><div className={`mb-8 grid size-13 place-items-center rounded-2xl ${service.tone === "pink" ? "bg-primary/10 text-primary" : "bg-sky-100 text-sky-700"}`}><Icon className="size-6" /></div><h3 className="text-xl font-bold tracking-tight">{service.title}</h3><p className="mt-3 min-h-20 text-sm leading-6 text-muted-foreground">{service.description}</p><Link href={service.href} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Mehr erfahren <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link></CardContent></Card> })}</div>;
}
