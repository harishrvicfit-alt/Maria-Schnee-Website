import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  HeartHandshake,
  Mail,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site-data";

export const metadata: Metadata = createMetadata(
  "Karriere in der Pflege",
  "Arbeiten bei Maria Schnee: Pflege mit Verantwortung, Nähe und fachlichem Anspruch in Waldkraiburg.",
  "/karriere",
);

const profiles = [
  "Pflegefachpersonen",
  "Gesundheits- und Krankenpflegekräfte",
  "Altenpflegefachkräfte",
  "Fachkräfte für Anästhesie und Intensivpflege",
  "Pflegeassistenzen",
  "Betreuungs- und Hauswirtschaftskräfte",
];

export default function KarrierePage() {
  return (
    <>
      <PageHero
        eyebrow="Karriere bei Maria Schnee"
        current="Karriere"
        title="Pflege können viele leisten. Den Unterschied machen Menschen."
        description="Sie möchten Verantwortung übernehmen, persönlich arbeiten und Menschen ein selbstbestimmtes Leben ermöglichen? Dann lernen wir Sie gerne kennen."
      />
      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Arbeiten mit Sinn"
              title="Fachlichkeit, Verlässlichkeit und echtes Interesse am Menschen."
            />
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Außerklinische Pflege verlangt Aufmerksamkeit, Ruhe und ein hohes
              Verantwortungsbewusstsein. Gleichzeitig bietet sie die
              Möglichkeit, pflegebedürftige Menschen im Alltag wirklich
              kennenzulernen und Entwicklung unmittelbar mitzuerleben.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Aktuelle Einsatzmöglichkeiten und Vertragskonditionen besprechen
              wir gerne persönlich. Auch Initiativbewerbungen sind willkommen.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(135deg,#eef9ff_0%,#fff5fa_100%)] p-8 premium-shadow sm:p-10">
              <Sparkles className="size-8 text-primary" />
              <h2 className="mt-6 text-2xl font-bold">Initiativ bewerben</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Senden Sie Ihre aussagekräftigen Unterlagen per E-Mail oder
                nehmen Sie zunächst telefonisch Kontakt auf.
              </p>
              <Button asChild className="mt-7 rounded-full">
                <a
                  href={`mailto:${site.email}?subject=Initiativbewerbung%20bei%20Maria%20Schnee`}
                >
                  <Mail /> Bewerbung per E-Mail
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section-space border-y border-sky-100 bg-sky-50/60">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <GraduationCap className="mb-5 size-9 text-primary" />
            <SectionHeading
              eyebrow="Intensivpflege"
              title="Fachliche Grundvoraussetzung"
              description="Für einen Einsatz in der außerklinischen Intensivpflege ist neben einer geeigneten pflegerischen Ausbildung mindestens eine der folgenden Qualifikationen erforderlich."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-white bg-white p-7 premium-shadow">
                <span className="font-editorial text-4xl font-semibold text-primary">
                  1 Jahr
                </span>
                <h2 className="mt-4 text-lg font-bold">Berufserfahrung</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Mindestens ein Jahr einschlägige Berufserfahrung in der
                  Fachrichtung mit mindestens 20 Wochenstunden.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-white bg-white p-7 premium-shadow">
                <span className="font-editorial text-4xl font-semibold text-primary">
                  120 Std.
                </span>
                <h2 className="mt-4 text-lg font-bold">
                  Basiskurs Heimbeatmung
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  Alternativ ein erfolgreich abgeschlossener
                  120-Stunden-Basiskurs für außerklinische Beatmung bzw.
                  Heimbeatmung.
                </p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">
              Welche Nachweise für die konkrete Tätigkeit benötigt werden,
              klären wir im persönlichen Bewerbungsprozess.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Berufsbilder"
            title="Diese Kompetenzen ergänzen unser Team."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {profiles.map((profile) => (
              <div
                key={profile}
                className="flex items-center gap-3 rounded-2xl border bg-white p-5 font-semibold"
              >
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                {profile}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container-shell">
          <div className="rounded-[2rem] bg-secondary p-8 sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <HeartHandshake className="size-8 text-primary" />
              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Passt Maria Schnee zu Ihnen?
              </h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Ein persönliches Gespräch beantwortet mehr als jede
                Stellenanzeige. Fragen Sie nach aktuellen Einsatzmöglichkeiten
                und lernen Sie das Unternehmen kennen.
              </p>
            </div>
            <Button asChild size="lg" className="mt-8 rounded-full lg:mt-0">
              <Link href="/kontakt">
                Kontakt aufnehmen <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
