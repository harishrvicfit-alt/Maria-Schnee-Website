"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navigation, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/88 shadow-[0_10px_50px_-35px_rgba(8,22,43,.45)] backdrop-blur-2xl">
      <div className="hidden bg-[#091523] text-white lg:block">
        <div className="container-shell flex h-9 items-center justify-between text-xs">
          <p className="flex items-center gap-2 text-white/70"><span className="size-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,.12)]" />Pflege mit Fachkompetenz und Menschlichkeit – seit 2017</p>
          <div className="flex items-center gap-6"><span>{site.address}</span><a href={`tel:${site.standby}`} className="font-semibold hover:text-pink-300">Rufbereitschaft: {site.standbyDisplay}</a></div>
        </div>
      </div>
      <div className="container-shell flex h-[76px] items-center justify-between gap-2 sm:h-[82px] sm:gap-5">
        <BrandLogo />
        <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={cn("relative rounded-full px-3.5 py-2 text-[.82rem] font-semibold transition-colors hover:text-primary", pathname === item.href ? "text-primary after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary" : "text-foreground/72")}>{item.label}</Link>
          ))}
        </nav>
        <Button asChild className="hidden h-11 rounded-full px-5 shadow-[0_14px_35px_-14px_rgba(223,0,122,.65)] xl:inline-flex"><Link href="/kontakt">Beratung anfragen</Link></Button>
        <Sheet>
          <SheetTrigger asChild><Button variant="outline" size="icon" className="rounded-full lg:hidden" aria-label="Navigation öffnen"><Menu /></Button></SheetTrigger>
          <SheetContent side="right" showCloseButton={false} className="w-[90vw] max-w-sm p-0">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <div className="flex items-center justify-between gap-2 border-b px-4 py-3 sm:px-5"><BrandLogo /><SheetClose className="grid size-10 shrink-0 place-items-center rounded-full border" aria-label="Navigation schließen"><X className="size-5" /></SheetClose></div>
            <nav className="flex flex-col gap-1 p-5" aria-label="Mobile Navigation">
              {navigation.map((item) => <SheetClose asChild key={item.href}><Link href={item.href} className={cn("rounded-xl px-4 py-3.5 text-base font-semibold", pathname === item.href ? "bg-secondary text-primary" : "hover:bg-muted")}>{item.label}</Link></SheetClose>)}
            </nav>
            <div className="mx-5 rounded-2xl bg-slate-950 p-5 text-white"><p className="mb-1 text-xs uppercase tracking-widest text-white/55">Direkter Kontakt</p><a href={`tel:${site.phone}`} className="flex items-center gap-2 text-lg font-bold"><Phone className="size-5 text-pink-400" />{site.phoneDisplay}</a></div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
