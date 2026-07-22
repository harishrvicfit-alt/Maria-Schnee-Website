import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  HeartHandshake,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import { ConsentMap } from "@/components/consent-map";
import { FaqList } from "@/components/faq-list";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { BrandFeather } from "@/components/brand-feather";
import { services, trustPoints, site } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[760px] overflow-hidden bg-[linear-gradient(135deg,#f8fcff_0%,#edf8fd_48%,#fff4fa_100%)] text-foreground lg:min-h-[790px]">
        <div className="noise-overlay absolute inset-0 -z-10 opacity-[.018]" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_78%_30%,rgba(125,211,252,.28),transparent_27rem),radial-gradient(circle_at_36%_95%,rgba(244,114,182,.16),transparent_30rem)]" />
        <div className="soft-grid absolute inset-0 -z-10 opacity-[.38] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
        <BrandFeather className="absolute -left-44 bottom-[-5rem] -z-10 w-[52rem] rotate-[8deg] text-sky-700/[.045]" />
        <div className="container-shell grid min-h-[760px] items-center gap-14 py-14 sm:gap-16 sm:py-20 lg:min-h-[790px] lg:grid-cols-[1.02fr_.98fr] lg:py-24">
          <div>
            <div className="relative z-10">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-3xl border border-sky-200/70 bg-white/80 py-2 pl-2 pr-3 text-[.7rem] font-semibold leading-5 text-slate-600 shadow-sm backdrop-blur-xl sm:gap-3 sm:rounded-full sm:pr-4 sm:text-xs">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <ShieldCheck className="size-3.5" />
                </span>
                <span>Pflege aus Waldkraiburg · persönlich seit 2017</span>
              </div>
              <nav aria-label="Pflegeleistungen" className="mb-8 max-w-xl">
                <p className="mb-3 text-[.64rem] font-bold tracking-[.16em] text-sky-700 uppercase sm:text-[.7rem]">
                  Unsere Leistungen – direkt auswählen
                </p>
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="group flex min-h-12 items-center gap-1.5 rounded-2xl border border-white/80 bg-white/75 px-2 py-2 text-[.625rem] font-bold leading-4 tracking-[-.01em] text-slate-700 shadow-[0_12px_35px_-25px_rgba(30,90,125,.55)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white hover:text-primary focus-visible:-translate-y-0.5 sm:gap-3 sm:px-3 sm:text-xs sm:tracking-normal"
                      >
                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-xl transition-colors sm:size-8 ${index % 2 === 0 ? "bg-sky-100 text-sky-700 group-hover:bg-sky-200" : "bg-pink-50 text-primary group-hover:bg-pink-100"}`}
                        >
                          <Icon className="size-3.5 sm:size-4" />
                        </span>
                        <span className="hyphens-none [overflow-wrap:normal]">{service.title}</span>
                        <ArrowRight className="ml-auto hidden size-3.5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
                      </Link>
                    );
                  })}
                </div>
              </nav>
              <h1 className="text-balance text-[2.65rem] font-medium leading-[.98] tracking-[-0.055em] min-[375px]:text-[3rem] sm:text-6xl lg:text-[5.15rem]">
                Pflege, die{" "}
                <span className="font-editorial font-normal italic text-pink-400">
                  Sicherheit
                </span>{" "}
                gibt. Nähe, die bleibt.
              </h1>
              <p className="mt-7 max-w-xl text-balance text-base leading-7 text-slate-600 sm:mt-8 sm:text-lg sm:leading-8">
                Ambulante und außerklinische Intensivpflege für Kinder,
                Jugendliche und Erwachsene – individuell geplant, fachlich
                verlässlich und mitten im vertrauten Leben.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-auto min-h-14 w-full whitespace-normal rounded-full px-5 py-3 text-center text-sm shadow-[0_18px_45px_-15px_rgba(223,0,122,.8)] sm:w-auto sm:px-8 sm:text-base"
                >
                  <Link href="/kontakt">
                    Jetzt kostenlos beraten lassen{" "}
                    <ArrowRight className="shrink-0" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-auto min-h-14 w-full whitespace-normal rounded-full border-sky-200 bg-white/85 px-5 py-3 text-sm text-slate-700 shadow-sm backdrop-blur-xl hover:border-sky-300 hover:bg-sky-50 hover:text-sky-900 sm:w-auto sm:px-7 sm:text-base"
                >
                  <a href={`tel:${site.phone}`}>
                    <Phone className="shrink-0" /> Direkt anrufen
                  </a>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-3 text-xs font-semibold text-slate-600 sm:mt-10 sm:gap-x-6">
                {[
                  "Individuell geplant",
                  "Familienzentriert",
                  "Mehrsprachig",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-700">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <Reveal delay={0.15} className="relative">
            <div className="relative mx-auto max-w-[560px] lg:ml-auto">
              <div className="absolute -inset-3 rounded-[2.75rem] bg-gradient-to-br from-sky-300/15 via-transparent to-primary/20 blur-xl sm:-inset-5 sm:rounded-[3.5rem]" />
              <div className="relative aspect-[4/4.75] overflow-hidden rounded-[2.2rem] border border-white/80 bg-white shadow-[0_40px_100px_-42px_rgba(40,105,145,.45)] sm:rounded-[2.7rem]">
                <Image
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=88"
                  alt="Pflegefachkraft begleitet eine ältere Dame einfühlsam"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/20 to-transparent" />
                <div className="absolute inset-x-5 bottom-6 flex items-end justify-between gap-5 sm:inset-x-7 sm:bottom-7">
                  <div>
                    <p className="text-[.68rem] font-bold tracking-[.16em] text-sky-700 uppercase sm:text-xs sm:tracking-[.2em]">
                      Pflege mit Haltung
                    </p>
                    <p className="mt-2 max-w-[17rem] font-editorial text-xl leading-6 text-slate-900 sm:text-2xl sm:leading-7">
                      „Der Mensch bleibt immer im Mittelpunkt.“
                    </p>
                  </div>
                  <div className="hidden size-14 shrink-0 place-items-center rounded-full border border-sky-100 bg-white/90 text-primary shadow-sm backdrop-blur-xl sm:grid">
                    <HeartHandshake className="size-6" />
                  </div>
                </div>
              </div>
              <div className="absolute left-2 top-8 rounded-2xl border border-sky-100 bg-white/90 px-3 py-2.5 text-[.7rem] font-bold text-slate-700 shadow-xl backdrop-blur-xl sm:-left-10 sm:top-12 sm:px-4 sm:py-3 sm:text-xs">
                <span className="mr-2 inline-block size-2 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,.12)]" />
                Persönlich erreichbar
              </div>
              <div className="absolute -bottom-7 right-1 w-[210px] rounded-[1.4rem] border border-white/60 bg-white/92 p-4 text-slate-950 shadow-2xl backdrop-blur-xl sm:-right-8 sm:w-[245px] sm:rounded-[1.6rem] sm:p-5">
                <p className="text-[.6rem] font-bold tracking-[.15em] text-primary uppercase sm:text-[.65rem] sm:tracking-[.18em]">
                  Unser Versprechen
                </p>
                <p className="mt-2 text-sm font-bold leading-5">
                  Fachkompetenz mit echter Menschlichkeit
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 border-b bg-white">
        <div className="container-shell -mt-1 grid gap-px overflow-hidden bg-border/80 sm:grid-cols-3">
          <div className="bg-white px-6 py-8 text-center">
            <p className="font-editorial text-4xl font-semibold text-primary">
              Seit 2017
            </p>
            <p className="mt-1 text-[.68rem] font-bold tracking-[.16em] text-muted-foreground uppercase">
              für Menschen da
            </p>
          </div>
          <div className="bg-white px-6 py-8 text-center">
            <p className="font-editorial text-4xl font-semibold text-primary">
              Bis zu 24/7
            </p>
            <p className="mt-1 text-[.68rem] font-bold tracking-[.16em] text-muted-foreground uppercase">
              bedarfsgerechte Versorgung
            </p>
          </div>
          <div className="bg-white px-6 py-8 text-center">
            <p className="font-editorial text-4xl font-semibold text-primary">
              Bis 150 km
            </p>
            <p className="mt-1 text-[.68rem] font-bold tracking-[.16em] text-muted-foreground uppercase">
              öffentlich genanntes Einsatzgebiet
            </p>
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden">
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-[54rem] -translate-x-1/2 rounded-full bg-sky-100/45 blur-3xl" />
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Warum Maria Schnee?"
              title="Weil gute Pflege mehr braucht als einen Plan."
              description="Sie braucht Menschen, die fachlich sicher handeln, aufmerksam zuhören und den Alltag der gesamten Familie im Blick behalten."
              align="center"
            />
          </Reveal>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {trustPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={i * 0.08}>
                  <Card
                    className={`group h-full overflow-hidden border-white bg-white premium-shadow ${i === 1 ? "lg:-translate-y-5" : ""}`}
                  >
                    <CardContent className="relative p-8 sm:p-9">
                      <span className="absolute right-5 top-2 font-editorial text-7xl text-slate-100">
                        0{i + 1}
                      </span>
                      <div
                        className={`relative grid size-14 place-items-center rounded-[1.25rem] ${i === 1 ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-secondary text-sky-700"}`}
                      >
                        <Icon />
                      </div>
                      <h3 className="mt-8 text-xl font-bold">{point.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">
                        {point.text}
                      </p>
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-[#f3f7fa]">
        <BrandFeather className="absolute -right-32 top-0 w-[38rem] rotate-[-13deg] text-sky-950/[.025]" />
        <div className="container-shell relative">
          <Reveal>
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <SectionHeading
                eyebrow="Unsere Leistungen"
                title="Versorgung, die sich dem Leben anpasst – nicht umgekehrt."
                description="Von verlässlicher Unterstützung im Alltag bis zur anspruchsvollen außerklinischen Intensivpflege entwickeln wir Lösungen rund um den einzelnen Menschen."
              />
              <p className="max-w-xs border-l-2 border-primary pl-5 text-sm leading-6 text-muted-foreground">
                Jede Versorgung beginnt mit einem persönlichen Gespräch und
                einem Plan, der wirklich zum Alltag passt.
              </p>
            </div>
          </Reveal>
          <div className="mt-16">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <section className="section-space overflow-hidden">
        <div className="container-shell grid items-center gap-16 lg:grid-cols-[.92fr_1.08fr]">
          <Reveal>
            <div className="relative pb-8 pr-4">
              <div className="absolute -left-8 -top-8 size-36 rounded-full border border-sky-200" />
              <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2.75rem] premium-shadow">
                <Image
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
                  alt="Pflegefachkraft im persönlichen Beratungsgespräch"
                  fill
                  sizes="(max-width:1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent" />
              </div>
              <div className="absolute bottom-0 right-0 rounded-[2rem] bg-primary p-7 text-white shadow-[0_25px_60px_-20px_rgba(223,0,122,.6)]">
                <p className="font-editorial text-4xl font-semibold">
                  4 Schritte
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-white/70 uppercase">
                  zu Ihrer Versorgung
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              eyebrow="So funktioniert die Zusammenarbeit"
              title="Klarheit von Anfang an. Begleitung auf jedem Schritt."
            />
            <div className="relative mt-10 space-y-2 before:absolute before:bottom-8 before:left-[1.38rem] before:top-8 before:w-px before:bg-border">
              {[
                [
                  "01",
                  "Erstes Kennenlernen",
                  "Sie schildern uns unverbindlich Ihre Situation, Fragen und Wünsche.",
                ],
                [
                  "02",
                  "Bedarf gemeinsam erfassen",
                  "Wir betrachten Pflegebedarf, Alltag, medizinische Anforderungen und familiäre Ressourcen.",
                ],
                [
                  "03",
                  "Versorgung sorgfältig planen",
                  "Pflegeziele, Tagesstruktur, Einsatzzeiten und Abstimmungen werden transparent festgelegt.",
                ],
                [
                  "04",
                  "Sicher begleitet starten",
                  "Unser Team koordiniert den Start und bleibt für Veränderungen und Rückfragen ansprechbar.",
                ],
              ].map((step, i) => (
                <div
                  key={step[0]}
                  className="group relative flex gap-5 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                >
                  <span
                    className={`relative z-10 grid size-11 shrink-0 place-items-center rounded-full text-xs font-bold shadow-sm ${i === 0 ? "bg-primary text-white" : "border bg-white text-primary"}`}
                  >
                    {step[0]}
                  </span>
                  <div>
                    <h3 className="font-bold">{step[1]}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {step[2]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space border-y border-sky-100 bg-[linear-gradient(135deg,#eef9ff_0%,#ffffff_52%,#fff2f8_100%)] text-foreground">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-sky-700">Unser Team</p>
            <h2 className="text-balance text-[1.9rem] font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              Kompetenz zeigt sich dort, wo Menschen Verantwortung übernehmen.
            </h2>
            <p className="mt-6 text-base leading-7 text-muted-foreground">
              Zum Team gehören laut Unternehmen Fachkräfte aus der Anästhesie-
              und Intensivpflege, Pflegeexperten für Beatmungspflege,
              Gesundheits- und Krankenpflege, Altenpflege, Palliative Care sowie
              Assistenz-, Betreuungs- und Hauswirtschaftskräfte.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-8 rounded-full border-sky-200 bg-white text-slate-700 shadow-sm hover:bg-sky-50 hover:text-sky-900"
            >
              <Link href="/ueber-uns">
                Mehr über uns <ArrowRight />
              </Link>
            </Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-4 min-[480px]:grid-cols-2">
              <div className="relative aspect-[16/9] overflow-hidden rounded-3xl min-[480px]:col-span-2 min-[480px]:aspect-[16/8]">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=85"
                  alt="Professionelle Pflegefachkraft"
                  fill
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="rounded-3xl border border-pink-100 bg-white/85 p-6 shadow-sm">
                <p className="text-2xl font-bold text-pink-400 sm:text-3xl">
                  Mehrsprachig
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Beratung unter anderem auf Deutsch, Englisch, Kroatisch,
                  Serbisch und Spanisch.
                </p>
              </div>
              <div className="rounded-3xl border border-sky-100 bg-sky-50/90 p-6 shadow-sm">
                <p className="text-2xl font-bold text-sky-700 sm:text-3xl">
                  Kontinuierlich
                </p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Schulungen für sicheren Umgang mit Medizinprodukten und
                  Behandlungspflege.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-sky-50/60">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Bewertungen"
              title="Vertrauen entsteht durch Erfahrungen."
              description="Öffentlich verfügbare Rückmeldungen geben einen Einblick in die Zusammenarbeit mit Maria Schnee."
            />
          </Reveal>
          <div className="mt-12">
            <TestimonialCarousel />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Häufige Fragen"
              title="Orientierung für Ihre nächsten Schritte."
              align="center"
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-4xl">
            <FaqList limit={5} />
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/faq">
                Alle Fragen ansehen <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-space bg-slate-50">
        <div className="container-shell">
          <div className="grid overflow-hidden rounded-[2rem] border bg-white shadow-sm lg:grid-cols-2">
            <div className="p-7 sm:p-10 lg:p-12">
              <div className="eyebrow">
                <MapPin className="size-4" />
                Einsatzgebiet & Standort
              </div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Aus Waldkraiburg für die Region.
              </h2>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                Maria Schnee nennt für die außerklinische Versorgung ein
                Einsatzgebiet von Waldkraiburg bis zu einem Radius von 150
                Kilometern. Die tatsächliche Verfügbarkeit wird individuell
                geprüft.
              </p>
              <address className="mt-8 not-italic">
                <p className="font-bold">{site.name}</p>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {site.address}
                </p>
              </address>
              <Button asChild variant="outline" className="mt-7 rounded-full">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Berliner+Stra%C3%9Fe+33a%2C+84478+Waldkraiburg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Route planen <ArrowRight />
                </a>
              </Button>
            </div>
            <ConsentMap />
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Kontakt"
              title="Erzählen Sie uns, was Sie gerade brauchen."
              description="Wir nehmen uns Zeit für Ihre Situation und melden uns so bald wie möglich persönlich bei Ihnen."
            />
            <div className="mt-8 rounded-3xl bg-secondary p-6">
              <p className="text-sm font-bold">Lieber direkt sprechen?</p>
              <a
                href={`tel:${site.phone}`}
                className="mt-2 inline-flex items-center gap-2 text-xl font-bold text-primary"
              >
                <Phone className="size-5" />
                {site.phoneDisplay}
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Bei medizinischen Notfällen wählen Sie bitte 112.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] border bg-slate-50 p-6 sm:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
