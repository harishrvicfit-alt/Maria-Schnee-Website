import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/seo";
import { site } from "@/lib/site-data";
export const metadata: Metadata = createMetadata(
  "Datenschutz",
  "Informationen zum Datenschutz auf der Website von Maria Schnee.",
  "/datenschutz",
);
export default function DatenschutzPage() {
  return (
    <>
      <PageHero
        eyebrow="Ihre Daten"
        current="Datenschutz"
        title="Datenschutzerklärung"
        description="Transparente Informationen zur Verarbeitung personenbezogener Daten auf dieser Website."
      />
      <section className="section-space">
        <div className="container-shell">
          <article className="mx-auto max-w-3xl space-y-9 text-[15px] leading-7 text-muted-foreground">
            <Legal title="1. Verantwortliche Stelle">
              <p>
                {site.name}
                <br />
                {site.address}
                <br />
                Telefon: {site.phoneDisplay}
                <br />
                E-Mail: {site.email}
              </p>
            </Legal>
            <Legal title="2. Allgemeine Hinweise">
              <p>
                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich
                identifiziert werden können. Wir verarbeiten personenbezogene
                Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen
                Website, zur Bearbeitung von Anfragen oder aufgrund einer
                gesetzlichen Grundlage erforderlich ist.
              </p>
            </Legal>
            <Legal title="3. Hosting und Server-Protokolle">
              <p>
                Beim Aufruf dieser Website können durch den Hostinganbieter
                technisch erforderliche Informationen wie IP-Adresse, Zeitpunkt
                des Zugriffs, aufgerufene Seite, Referrer, Browsertyp und
                Betriebssystem in Server-Protokollen verarbeitet werden.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Der konkrete
                Hostinganbieter, Speicherort und die Löschfristen müssen vor
                Veröffentlichung ergänzt werden.
              </p>
            </Legal>
            <Legal title="4. Kontaktaufnahme">
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Kontaktformular
                kontaktieren, verarbeiten wir Ihre Angaben zur Bearbeitung Ihres
                Anliegens. Rechtsgrundlage ist je nach Inhalt Art. 6 Abs. 1 lit.
                b oder lit. f DSGVO sowie gegebenenfalls Ihre Einwilligung nach
                Art. 6 Abs. 1 lit. a DSGVO. Übermitteln Sie bitte keine
                medizinischen Notfalldaten über das Formular.
              </p>
            </Legal>
            <Legal title="5. Kontaktformular">
              <p>
                Das Formular validiert Ihre Eingaben technisch. Der produktive
                Versanddienst und ein möglicher Auftragsverarbeiter sind vor dem
                Livegang zu konfigurieren, vertraglich zu prüfen und hier
                konkret zu benennen. Ohne diese Konfiguration werden keine
                Formularnachrichten zugestellt.
              </p>
            </Legal>
            <Legal title="6. Beschwerden und Anregungen">
              <p>
                Das Formular für Beschwerden und Anregungen kann anonym genutzt
                werden. Bei aktivierter anonymer Übermittlung werden Name,
                E-Mail-Adresse und Telefonnummer nicht an den Empfänger
                übertragen. Freiwillig im Nachrichtentext genannte
                personenbezogene Daten werden zur Prüfung und Bearbeitung der
                Rückmeldung verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
                f DSGVO sowie gegebenenfalls Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </Legal>
            <Legal title="7. Cookies und lokale Speicherung">
              <p>
                Diese Website speichert Ihre Auswahl im Cookie-Banner lokal in
                Ihrem Browser. Die Speicherung ist technisch notwendig, um Ihre
                Auswahl bei weiteren Seitenaufrufen zu berücksichtigen. Analyse-
                oder Marketing-Cookies sind in der vorliegenden Version nicht
                eingerichtet.
              </p>
            </Legal>
            <Legal title="8. Google Maps">
              <p>
                Die Karte wird erst nach Ihrem aktiven Klick geladen. Dann kann
                eine Verbindung zu Google-Servern hergestellt und insbesondere
                Ihre IP-Adresse übertragen werden. Anbieter ist Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland. Die
                Einbindung erfolgt auf Grundlage Ihrer Einwilligung gemäß Art. 6
                Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.
              </p>
            </Legal>
            <Legal title="9. Bildinhalte">
              <p>
                Die auf dieser Website verwendeten Bilddateien werden lokal über
                den Webserver bereitgestellt. Beim Laden dieser Bilder wird
                keine Verbindung zu externen Bildplattformen hergestellt.
              </p>
            </Legal>
            <Legal title="10. Ihre Rechte">
              <p>
                Sie haben im Rahmen der gesetzlichen Voraussetzungen das Recht
                auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung, Datenübertragbarkeit und Widerspruch. Erteilte
                Einwilligungen können Sie jederzeit mit Wirkung für die Zukunft
                widerrufen. Zudem besteht ein Beschwerderecht bei einer
                zuständigen Datenschutzaufsichtsbehörde.
              </p>
            </Legal>
            <Legal title="11. Speicherdauer">
              <p>
                Wir speichern personenbezogene Daten nur so lange, wie dies für
                den jeweiligen Zweck erforderlich ist oder gesetzliche
                Aufbewahrungspflichten bestehen.
              </p>
            </Legal>
            <Legal title="12. Sicherheit">
              <p>
                Diese Website ist für eine verschlüsselte Übertragung per TLS
                vorgesehen. Bitte beachten Sie, dass eine Datenübertragung im
                Internet nie vollständig gegen Zugriffe Dritter geschützt werden
                kann.
              </p>
            </Legal>
            <Legal title="13. Pflicht zur abschließenden Prüfung">
              <p className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900">
                Hosting, Formularversand, eingesetzte Dienstleister,
                Löschfristen und betriebliche Datenschutzprozesse sind
                öffentlich nicht vollständig bekannt. Diese Datenschutzerklärung
                muss vor Veröffentlichung durch den Verantwortlichen und eine
                qualifizierte Rechtsberatung vervollständigt und geprüft werden.
              </p>
            </Legal>
            <p className="text-xs">Stand: Juli 2026</p>
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
