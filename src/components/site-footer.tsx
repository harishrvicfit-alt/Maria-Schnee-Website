import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { BrandFeather } from "@/components/brand-feather";
import { navigation, services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#07111e] text-white">
      <BrandFeather className="absolute -bottom-16 -left-28 w-[38rem] rotate-[10deg] text-white/[.025]" />
      <div className="container-shell relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.9fr_1fr] lg:py-20">
        <div><BrandLogo light className="mb-7 h-[104px] w-[170px]" /><p className="max-w-sm text-sm leading-7 text-white/58">Ambulante und außerklinische Intensivpflege mit einem klaren Ziel: Sicherheit ermöglichen, Selbstbestimmung bewahren und Familien verlässlich entlasten.</p></div>
        <div><h2 className="mb-5 text-sm font-bold tracking-widest text-pink-400 uppercase">Navigation</h2><ul className="space-y-3 text-sm text-white/70">{navigation.map((item) => <li key={item.href}><Link className="transition-colors hover:text-white" href={item.href}>{item.label}</Link></li>)}</ul></div>
        <div><h2 className="mb-5 text-sm font-bold tracking-widest text-pink-400 uppercase">Leistungen</h2><ul className="space-y-3 text-sm text-white/70">{services.slice(0,5).map((item) => <li key={item.href}><Link className="transition-colors hover:text-white" href={item.href}>{item.title}</Link></li>)}</ul></div>
        <div><h2 className="mb-5 text-sm font-bold tracking-widest text-pink-400 uppercase">Kontakt</h2><ul className="space-y-4 text-sm text-white/70"><li><a href={`tel:${site.phone}`} className="flex gap-3 hover:text-white"><Phone className="mt-0.5 size-4 shrink-0 text-sky-300" />{site.phoneDisplay}</a></li><li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white"><Mail className="mt-0.5 size-4 shrink-0 text-sky-300" />{site.email}</a></li><li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-sky-300" /><span>{site.street}<br />{site.postalCode} {site.city}</span></li></ul></div>
      </div>
      <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-4 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Maria Schnee GmbH. Alle Rechte vorbehalten.</p><div className="flex gap-5"><Link href="/impressum" className="hover:text-white">Impressum</Link><Link href="/datenschutz" className="hover:text-white">Datenschutz</Link></div></div></div>
    </footer>
  );
}
