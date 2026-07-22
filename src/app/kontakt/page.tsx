import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { ConsentMap } from "@/components/consent-map";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site-data";
export const metadata: Metadata = createMetadata(
  "Kontakt",
  "Kontaktieren Sie Maria Schnee in Waldkraiburg für eine unverbindliche Pflegeberatung.",
  "/kontakt",
);
export default function KontaktPage() {
  const contacts = [
    {
      icon: Phone,
      label: "Telefon",
      value: site.phoneDisplay,
      href: `tel:${site.phone}`,
    },
    {
      icon: Clock3,
      label: "Rufbereitschaft",
      value: site.standbyDisplay,
      href: `tel:${site.standby}`,
    },
    {
      icon: Mail,
      label: "E-Mail",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      label: "Adresse",
      value: site.address,
      href: "https://www.google.com/maps/dir/?api=1&destination=Berliner+Stra%C3%9Fe+33a%2C+84478+Waldkraiburg",
    },
  ];
  return (
    <>
      <PageHero
        eyebrow="Wir sind für Sie da"
        current="Kontakt"
        title="Lassen Sie uns über Ihre Situation sprechen."
        description="Ob erste Orientierung oder konkrete Versorgung: Wir hören zu, beantworten Ihre Fragen und besprechen die nächsten sinnvollen Schritte."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-3xl border bg-white p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="grid size-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <p className="mt-5 text-xs font-bold tracking-widest text-muted-foreground uppercase">
                  {label}
                </p>
                <p className="mt-2 break-words text-sm font-bold leading-6">
                  {value}
                </p>
              </a>
            ))}
          </div>
          <Link
            href="/beschwerden-anregungen"
            className="group mt-6 flex flex-col justify-between gap-5 rounded-3xl border border-sky-100 bg-[linear-gradient(135deg,#eef9ff_0%,#fff4fa_100%)] p-6 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-lg sm:flex-row sm:items-center"
          >
            <span className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-white">
                <MessageSquareText className="size-5" />
              </span>
              <span>
                <span className="block font-bold">
                  Beschwerden & Anregungen
                </span>
                <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                  Teilen Sie uns Ihre Rückmeldung mit – auf Wunsch vollständig
                  anonym.
                </span>
              </span>
            </span>
            <span className="flex items-center gap-2 text-sm font-bold text-primary">
              Zur Rückmeldung{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="rounded-[2rem] border bg-slate-50 p-7 sm:p-10">
              <h2 className="text-2xl font-bold">Ihre Anfrage</h2>
              <p className="mt-3 mb-8 text-sm leading-6 text-muted-foreground">
                Bitte senden Sie keine medizinischen Notfalldaten über dieses
                Formular. Bei akuten Notfällen wählen Sie 112.
              </p>
              <ContactForm />
            </div>
            <div className="overflow-hidden rounded-[2rem] border bg-white">
              <ConsentMap />
              <div className="p-6">
                <p className="font-bold">{site.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {site.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
