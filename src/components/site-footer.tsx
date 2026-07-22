import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { BrandFeather } from "@/components/brand-feather";
import { navigation, services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer id="seitenfuss" className="relative overflow-hidden border-t border-sky-100 bg-[linear-gradient(135deg,#f1f9fd_0%,#f8fbfd_58%,#fff3f8_100%)] text-foreground">
      <BrandFeather className="absolute -bottom-16 -left-28 w-[38rem] rotate-[10deg] text-sky-700/[.035]" />
      <div className="container-shell relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_.8fr_.9fr_1fr] lg:py-20">
        <div><BrandLogo light className="mb-8 h-[128px] w-[208px] sm:h-[128px] sm:w-[208px]" /><p className="max-w-sm text-sm leading-7 text-muted-foreground">Ambulante und außerklinische Intensivpflege mit einem klaren Ziel: Sicherheit ermöglichen, Selbstbestimmung bewahren und Familien verlässlich entlasten.</p></div>
        <div><h2 className="mb-5 text-sm font-bold tracking-widest text-primary uppercase">Navigation</h2><ul className="space-y-3 text-sm text-slate-600">{navigation.map((item) => <li key={item.href}><Link className="transition-colors hover:text-primary" href={item.href}>{item.label}</Link></li>)}</ul></div>
        <div><h2 className="mb-5 text-sm font-bold tracking-widest text-primary uppercase">Leistungen</h2><ul className="space-y-3 text-sm text-slate-600">{services.slice(0,5).map((item) => <li key={item.href}><Link className="transition-colors hover:text-primary" href={item.href}>{item.title}</Link></li>)}</ul></div>
        <div><h2 className="mb-5 text-sm font-bold tracking-widest text-primary uppercase">Kontakt</h2><ul className="space-y-4 text-sm text-slate-600"><li><a href={`tel:${site.phone}`} className="flex gap-3 hover:text-primary"><Phone className="mt-0.5 size-4 shrink-0 text-sky-600" />{site.phoneDisplay}</a></li><li><a href={`mailto:${site.email}`} className="flex gap-3 hover:text-primary"><Mail className="mt-0.5 size-4 shrink-0 text-sky-600" />{site.email}</a></li><li className="flex gap-3"><MapPin className="mt-0.5 size-4 shrink-0 text-sky-600" /><span>{site.street}<br />{site.postalCode} {site.city}</span></li></ul></div>
      </div>
      <div className="border-t border-sky-100"><div className="container-shell flex flex-col gap-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Maria Schnee GmbH. Alle Rechte vorbehalten.</p><div className="flex gap-5"><Link href="/impressum" className="hover:text-primary">Impressum</Link><Link href="/datenschutz" className="hover:text-primary">Datenschutz</Link></div></div></div>
    </footer>
  );
}
