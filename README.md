# Maria Schnee – Website

Moderne, responsive Website für den Ambulanten & Intensivpflegedienst Maria Schnee GmbH aus Waldkraiburg.

## Technischer Stack

- Next.js 15 mit App Router und React Server Components
- React 19 und TypeScript
- Tailwind CSS 4 und shadcn/ui
- Framer Motion und Lucide React
- React Hook Form und Zod
- Embla Carousel und Sonner
- next-seo für strukturierte Daten

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Die Website ist anschließend unter `http://localhost:3000` erreichbar.

## Produktionsprüfung

```bash
npm run lint
npm run build
npm audit --omit=dev
```

Alle drei Prüfungen wurden am 13. Juli 2026 erfolgreich ausgeführt. Der Dependency-Audit meldet keine bekannten Schwachstellen.

## Kontaktformular

Der Formular-Endpunkt validiert alle Eingaben serverseitig und enthält ein Honeypot-Feld gegen einfache Bot-Anfragen. Für die tatsächliche Zustellung muss vor dem Livegang ein sicherer Webhook hinterlegt werden:

```bash
CONTACT_WEBHOOK_URL=https://...
```

Eine Vorlage befindet sich in `.env.example`. Medizinische oder andere besonders sensible Daten sollten nur über einen dafür vertraglich und technisch geeigneten Dienst übertragen werden.

## Vor dem Livegang erforderlich

1. Handelsregister, Registernummer, Aufsichtsbehörde, Umsatzsteuer-ID und berufsrechtliche Angaben im Impressum ergänzen.
2. Hostinganbieter, Auftragsverarbeiter, Löschfristen und Formularversand in der Datenschutzerklärung konkretisieren.
3. Kontakt-Webhook konfigurieren und mit Testanfragen prüfen.
4. Verwendungsrechte aller finalen Fotos dokumentieren; idealerweise freigegebene Originalfotos des Unternehmens lokal einbinden.
5. Telefonnummern, E-Mail-Adresse, Einsatzgebiet und Unternehmensangaben intern final freigeben.
6. Rechtsseiten durch eine qualifizierte Rechtsberatung prüfen lassen.

## Datenquellen

Unternehmensangaben wurden ausschließlich aus öffentlich zugänglichen Quellen übernommen, insbesondere von:

- `https://pflegedienst-mariaschnee.de/`
- `https://pflegedienst-mariaschnee.de/impressum.html`
- `https://www.biva.de/pflege-adressen/ambulant/bayern/kreis-m%C3%BChldorf%2Ba.inn/waldkraiburg/112872/ambulanter%2B%26%2Bintensivpflegedienst%2Bmaria%2Bschnee/`
- `https://www.pflegesuche.de/pflegedienst/ambulanter-intensivpflegedienst-maria-schnee-in-waldkraiburg_1696.html`

Bei widersprüchlichen Angaben wurde der offiziellen Unternehmenswebsite Vorrang gegeben. Nicht verifizierbare Angaben wurden nicht als Tatsachen veröffentlicht.
