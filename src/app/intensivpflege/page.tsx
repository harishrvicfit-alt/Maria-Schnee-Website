import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  HeartHandshake,
  Wind,
} from "lucide-react";
import { ServicePage } from "@/components/service-page";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";
export const metadata: Metadata = createMetadata(
  "Außerklinische Intensivpflege Waldkraiburg",
  "Außerklinische Intensivpflege und Beatmungspflege im häuslichen Umfeld – individuell geplant für Kinder und Erwachsene in der Region Waldkraiburg.",
  "/intensivpflege",
);
export default function Page() {
  return (
    <ServicePage
      path="/intensivpflege"
      eyebrow="Außerklinische Intensivpflege"
      current="Intensivpflege"
      title="Intensiv versorgt. Im eigenen Leben zuhause."
      description="Fachlich anspruchsvolle 1:1-Versorgung außerhalb der Klinik – bedarfsgerecht bis zu 24 Stunden täglich."
      introTitle="Medizinische Sicherheit in vertrauter Umgebung."
      intro={[
        "Die außerklinische Intensivpflege richtet sich an schwer pflegebedürftige Menschen mit entsprechendem intensivpflegerischem Bedarf. Maria Schnee bietet die Versorgung im häuslichen Umfeld so engmaschig an, wie es die individuelle Situation erfordert.",
        "Ein speziell abgestimmter Pflegeplan, permanente Beobachtung bei entsprechender Notwendigkeit und die enge Zusammenarbeit mit Ärzten, Kliniken und Therapeuten bilden die Grundlage.",
      ]}
      image="/images/adult-balcony-wellbeing.webp"
      imageAlt="Gemeinsames Pflanzen frischer Kräuter als Teil eines selbstbestimmten Alltags"
      benefits={[
        "Häusliche Intensivversorgung",
        "Invasive und nichtinvasive Beatmung",
        "Kontrolle von Beatmungs- und Vitalparametern",
        "Tracheostomaversorgung und Kanülenpflege",
        "Sekretmanagement und Cough Assist",
        "Enterale und parenterale Ernährung",
        "Wundmanagement",
        "Überleitungspflege",
        "Palliative Care in Kooperation mit SAPV",
      ]}
      detailTitle="Sicherheit entsteht durch Vorbereitung und Teamarbeit."
      detailText="Außerklinische Intensivpflege verbindet komplexe medizinische Anforderungen mit dem Wunsch nach Alltag, Nähe und Selbstbestimmung. Dazu braucht es eingearbeitete Fachkräfte, klare Abläufe, verlässliche Kommunikation und eine Versorgung, die laufend an Veränderungen angepasst wird."
      process={[
        "Versorgungssituation und Verordnung prüfen",
        "Kliniküberleitung gemeinsam koordinieren",
        "Pflegeplan, Tagesstruktur und Team aufbauen",
        "Versorgung starten und regelmäßig evaluieren",
      ]}
    >
      <section className="section-space border-y border-sky-100 bg-[linear-gradient(135deg,#eef9ff_0%,#ffffff_52%,#fff2f8_100%)]">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Rückzugspflege & Weaning"
              title="Mehr Selbstständigkeit – in einem medizinisch verantwortbaren Tempo."
              description="Wenn der Gesundheitszustand es zulässt, prüfen wir gemeinsam mit allen Beteiligten, ob und wie sich die intensive Versorgung schrittweise reduzieren lässt."
            />
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-[2rem] border border-white bg-white p-7 premium-shadow sm:p-9">
                <HeartHandshake className="size-8 text-primary" />
                <h2 className="mt-6 text-2xl font-bold">Rückzugspflege</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Rückzugspflege bedeutet nicht, dass Unterstützung plötzlich
                  entfällt. Das Pflegeteam zieht sich – abgestimmt auf die
                  erreichte Selbstständigkeit – schrittweise zurück. Angehörige
                  können nach individueller Anleitung geeignete Aufgaben sicher
                  übernehmen. Lebensqualität, der Wille der betroffenen Person
                  und die Einschätzung der behandelnden Ärzte geben dabei die
                  Richtung vor.
                </p>
                <ul className="mt-6 space-y-3 text-sm font-semibold">
                  {[
                    "Individuelles Versorgungskonzept",
                    "Anleitung und Einarbeitung von Angehörigen",
                    "Regelmäßige Pflegevisiten und Anpassung",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={0.08}>
              <article className="h-full rounded-[2rem] border border-white bg-white p-7 premium-shadow sm:p-9">
                <Wind className="size-8 text-sky-700" />
                <h2 className="mt-6 text-2xl font-bold">
                  Weaning & Spontanatemtraining
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  In Kooperation mit erfahrenen Fachärzten können unter
                  kontinuierlicher fachlicher Aufsicht Spontanatemtrainings
                  begleitet werden. Ziel kann sein, die Abhängigkeit von der
                  Beatmung schrittweise zu reduzieren oder – wenn medizinisch
                  möglich – auf ein nichtinvasives Verfahren umzustellen.
                  Verlauf und Erfolg hängen stets von der Grunderkrankung und
                  der individuellen Situation ab.
                </p>
                <ul className="mt-6 space-y-3 text-sm font-semibold">
                  {[
                    "Stabile Kreislauf- und Beatmungssituation",
                    "Tragfähiges ärztlich abgestimmtes Weaningkonzept",
                    "Kontinuierliche Beobachtung und Evaluation",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 size-4 shrink-0 text-sky-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-8 flex flex-col gap-6 rounded-[2rem] border border-sky-100 bg-sky-50/80 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-3xl gap-4">
                <Activity className="mt-1 size-6 shrink-0 text-primary" />
                <p className="text-sm leading-7 text-muted-foreground">
                  Ob Rückzugspflege oder Weaning infrage kommt, entscheiden die
                  behandelnden Ärzte, die betroffene Person, Angehörige und das
                  Pflegeteam gemeinsam. Es gibt keine pauschale Zusage und kein
                  standardisiertes Zeitversprechen.
                </p>
              </div>
              <Button asChild className="shrink-0 rounded-full">
                <Link href="/kontakt">
                  Situation besprechen <ArrowRight />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </ServicePage>
  );
}
