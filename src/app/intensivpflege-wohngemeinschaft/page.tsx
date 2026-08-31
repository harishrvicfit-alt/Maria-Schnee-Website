import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Accessibility,
  ArrowRight,
  Bath,
  BedSingle,
  Check,
  CookingPot,
  HeartHandshake,
  MapPin,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site-data";

export const metadata: Metadata = createMetadata(
  "Intensivpflege-Wohngemeinschaft Waldkraiburg",
  "Außerklinische Intensivpflege-Wohngemeinschaft mit sechs Einzelzimmern und barrierefreien Bädern im Zentrum von Waldkraiburg.",
  "/intensivpflege-wohngemeinschaft",
);

const features = [
  {
    icon: BedSingle,
    title: "6 Einzelzimmer",
    text: "Geräumig, lichtdurchflutet und nach persönlichen Vorstellungen einrichtbar.",
  },
  {
    icon: Bath,
    title: "Barrierefreie Bäder",
    text: "Jedes Einzelzimmer verfügt über ein eigenes barrierefreies Bad.",
  },
  {
    icon: CookingPot,
    title: "Gemeinsam leben",
    text: "Gemeinschaftsraum und offene Wohnküche im Untergeschoss schaffen Raum für Alltag und Begegnung.",
  },
  {
    icon: Accessibility,
    title: "Gut zugänglich",
    text: "Ein Fahrstuhl unterstützt die barrierearme Erreichbarkeit der Wohnbereiche.",
  },
];

const requirements = [
  "Volljährigkeit ab 18 Jahren",
  "Bedarf an invasiver oder nichtinvasiver Beatmung und/oder Versorgung einer Trachealkanüle",
  "Ärztliche Verordnung der außerklinischen Intensivpflege nach den Formularen 62A, 62B und 62C",
  "Individuelle Prüfung, ob Wohnform und Versorgungsbedarf zueinander passen",
];

export default function IntensivpflegeWohngemeinschaftPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Außerklinische Intensivpflege-Wohngemeinschaft",
    url: `${site.url}/intensivpflege-wohngemeinschaft`,
    provider: { "@id": `${site.url}/#medical-business` },
    areaServed: "Waldkraiburg",
    description:
      "Ambulant betreute Wohngemeinschaft für volljährige Menschen mit außerklinischem Intensivpflegebedarf.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c"),
        }}
      />
      <PageHero
        eyebrow="Mitten in Waldkraiburg"
        current="Intensivpflege-Wohngemeinschaft"
        title="Selbstbestimmt wohnen. Fachlich sicher begleitet."
        description="Unsere außerklinische Intensivpflege-Wohngemeinschaft verbindet ein persönliches Zuhause mit verlässlicher pflegerischer Versorgung."
      />

      <section className="section-space overflow-hidden">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.5rem] border-[7px] border-white bg-sky-50 shadow-[0_35px_90px_-38px_rgba(28,83,117,.5)] ring-1 ring-sky-100">
              <Image
                src="/images/wohngemeinschaft/wohnbereiche-collage.png"
                alt="Barrierefreies Bad und helle Gemeinschaftsräume der Intensivpflege-Wohngemeinschaft Maria Schnee"
                width={1097}
                height={948}
                priority
                sizes="(max-width:1024px) 100vw, 52vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              eyebrow="Ein Zuhause mit Rückhalt"
              title="Privatsphäre und Gemeinschaft in guter Balance."
            />
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              Die Wohngemeinschaft liegt im Ortszentrum von Waldkraiburg. Sechs
              geräumige, helle Einzelzimmer können individuell eingerichtet
              werden. So bleibt Raum für persönliche Gewohnheiten, Erinnerungen
              und einen Alltag, der sich möglichst nah am eigenen Leben
              orientiert.
            </p>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Gemeinsam mit Pflegeteam, Ärzten, Therapeuten und Angehörigen
              möchten wir Lebensqualität, Eigenständigkeit und soziale Teilhabe
              der Mieter erhalten und fördern.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <Link href="/kontakt">
                  Persönlich beraten lassen <ArrowRight />
                </Link>
              </Button>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800">
                <MapPin className="size-4" /> Berliner Straße 33a
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Die Wohngemeinschaft"
            title="Durchdacht für Wohnen, Begegnung und Versorgung."
            description="Eine überschaubare Wohnform mit privaten Rückzugsorten und gemeinsam nutzbaren Bereichen."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * 0.05}>
                <div className="h-full rounded-[1.75rem] border border-white bg-white p-7 premium-shadow">
                  <span className="grid size-12 place-items-center rounded-2xl bg-sky-100 text-sky-700">
                    <Icon className="size-5" />
                  </span>
                  <h2 className="mt-6 text-lg font-bold">{title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Voraussetzungen"
              title="Für wen kommt die Intensivpflege-WG infrage?"
              description="Ob ein Einzug möglich und sinnvoll ist, wird immer persönlich und gemeinsam mit den beteiligten Fachstellen geprüft."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-sky-100 bg-[linear-gradient(135deg,#eef9ff,#fff5fa)] p-7 sm:p-9">
              <ul className="space-y-5">
                {requirements.map((item) => (
                  <li key={item} className="flex gap-4">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary text-white">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm font-semibold leading-6">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-4 rounded-2xl bg-white/80 p-5">
                <HeartHandshake className="size-6 shrink-0 text-primary" />
                <p className="text-sm leading-6 text-muted-foreground">
                  Im Erstgespräch betrachten wir die medizinische Situation,
                  persönlichen Wünsche und organisatorischen Voraussetzungen in
                  Ruhe.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-y border-sky-100 bg-sky-50/60">
        <div className="container-shell text-center">
          <Users className="mx-auto size-9 text-primary" />
          <h2 className="mx-auto mt-5 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Gemeinsam planen wir den nächsten passenden Schritt.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
            Gerne beantworten wir Fragen zur Wohnform, zu den Voraussetzungen
            und zum Ablauf einer möglichen Aufnahme persönlich.
          </p>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
