import type { Metadata } from "next";
import {
  EyeOff,
  HeartHandshake,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react";
import { FeedbackForm } from "@/components/feedback-form";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata(
  "Beschwerden und Anregungen",
  "Teilen Sie Maria Schnee Ihre Beschwerde, Anregung oder Rückmeldung mit – auf Wunsch vollständig anonym.",
  "/beschwerden-anregungen",
);

const principles = [
  {
    icon: EyeOff,
    title: "Auf Wunsch anonym",
    text: "Kontaktdaten sind bei anonymer Übermittlung nicht erforderlich und werden nicht mitgesendet.",
  },
  {
    icon: ShieldCheck,
    title: "Vertraulich behandelt",
    text: "Ihre Mitteilung wird ausschließlich zur Prüfung und Bearbeitung Ihres Anliegens verwendet.",
  },
  {
    icon: HeartHandshake,
    title: "Jede Rückmeldung zählt",
    text: "Beschwerden, Hinweise und Ideen helfen dabei, Abläufe und Versorgung weiterzuentwickeln.",
  },
];

export default function BeschwerdenAnregungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Offen für Ihre Rückmeldung"
        current="Beschwerden & Anregungen"
        title="Sagen Sie uns, was wir besser machen können."
        description="Ihre Erfahrung ist wichtig. Teilen Sie uns Beschwerden, Hinweise, Lob oder Verbesserungsvorschläge mit – offen oder vollständig anonym."
      />
      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm"
              >
                <div className="grid size-11 place-items-center rounded-2xl bg-sky-100 text-sky-700">
                  <Icon className="size-5" />
                </div>
                <h2 className="mt-5 text-lg font-bold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2.25rem] border border-sky-100 bg-[linear-gradient(135deg,#f2faff_0%,#ffffff_52%,#fff4fa_100%)] p-6 premium-shadow sm:p-10 lg:p-12">
            <div className="mb-9 flex items-start gap-4">
              <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                <MessageSquareText className="size-5" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Ihre Rückmeldung</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Alle mit * gekennzeichneten Felder sind erforderlich.
                </p>
              </div>
            </div>
            <FeedbackForm />
          </div>
        </div>
      </section>
    </>
  );
}
