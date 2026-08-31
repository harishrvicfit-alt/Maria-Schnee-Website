import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site-data";
export const metadata: Metadata = createMetadata(
  "Impressum",
  "Impressum der Ambulanter & Intensivpflegedienst Maria Schnee GmbH.",
  "/impressum",
);
export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliche Angaben"
        current="Impressum"
        title="Impressum"
        description="Anbieterkennzeichnung und rechtliche Informationen."
      />
      <section className="section-space">
        <div className="container-shell">
          <article className="prose prose-slate mx-auto max-w-3xl space-y-9 text-[15px] leading-7 text-muted-foreground">
            <Legal title="Angaben gemäß § 5 DDG">
              <p className="font-bold text-foreground">{site.name}</p>
              <p>
                {site.street}
                <br />
                {site.postalCode} {site.city}
                <br />
                Deutschland
              </p>
            </Legal>
            <Legal title="Vertreten durch">
              <p>Geschäftsführerin: {site.director}</p>
            </Legal>
            <Legal title="Handelsregister">
              <p>
                Registergericht: Amtsgericht Traunstein
                <br />
                Registernummer: HRB 28085
              </p>
            </Legal>
            <Legal title="Kontakt">
              <p>
                Telefon:{" "}
                <a className="text-primary" href={`tel:${site.phone}`}>
                  {site.phoneDisplay}
                </a>
                <br />
                Fax: {site.faxDisplay}
                <br />
                Rufbereitschaft:{" "}
                <a className="text-primary" href={`tel:${site.standby}`}>
                  {site.standbyDisplay}
                </a>
                <br />
                E-Mail:{" "}
                <a className="text-primary" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </Legal>
            <Legal title="Institutionskennzeichen">
              <p>460 905 300</p>
            </Legal>
            <Legal title="Berufshaftpflichtversicherung">
              <p>
                Allianz Deutschland AG
                <br />
                Königinstraße 28
                <br />
                80802 München
              </p>
            </Legal>
            <Legal title="Verbandszugehörigkeiten">
              <p>
                BPA – Bundesverband privater Anbieter sozialer Dienste e. V.,
                Friedrichstraße 148, 10117 Berlin
                <br />
                BHK – Bundesverband Häusliche Kinderkrankenpflege e. V.,
                Hospitalstraße 12, 01097 Dresden
              </p>
            </Legal>
            <Legal title="Haftung für Inhalte">
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Eine
                Verpflichtung zur Überwachung übermittelter oder gespeicherter
                fremder Informationen besteht im Rahmen der gesetzlichen
                Vorgaben nicht.
              </p>
            </Legal>
            <Legal title="Streitbeilegung">
              <p>
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Legal>
            <p className="text-xs">Stand: August 2026</p>
          </article>
        </div>
      </section>
    </>
  );
}
function Legal({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-xl font-bold text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
