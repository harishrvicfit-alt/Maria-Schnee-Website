import Image from "next/image";
import { ArrowUpRight, Camera } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { cn } from "@/lib/utils";

const galleryImages = [
  {
    src: "/images/einblicke/maria-schnee-pflegeteam.webp",
    alt: "Das Pflegeteam von Maria Schnee vor der Geschäftsstelle in Waldkraiburg",
    caption: "Gemeinsam für gute Pflege",
    className: "col-span-2 row-span-2",
    position: "center 42%",
  },
  {
    src: "/images/einblicke/fortbildung-pflegepraxis.webp",
    alt: "Praxisnahe Fortbildung des Pflegeteams",
    caption: "Praxisnahe Fortbildung",
    className: "row-span-2",
    position: "center 35%",
  },
  {
    src: "/images/einblicke/wohngemeinschaft-raeume.webp",
    alt: "Helle Räume der Intensivpflege-Wohngemeinschaft Maria Schnee",
    caption: "Räume zum Wohlfühlen",
    className: "col-span-2",
    position: "center",
  },
  {
    src: "/images/einblicke/gemeinsame-fortbildung.webp",
    alt: "Mitarbeitende bei einer gemeinsamen Pflegeschulung",
    caption: "Wissen im Team teilen",
    className: "col-span-2",
    position: "center 38%",
  },
  {
    src: "/images/einblicke/pflegeteam-vor-der-geschaeftsstelle.webp",
    alt: "Maria Schnee Pflegeteam mit Dienstfahrzeug in Waldkraiburg",
    caption: "Für Sie unterwegs",
    className: "col-span-2",
    position: "center 40%",
  },
  {
    src: "/images/einblicke/praxisnahe-teamschulung.webp",
    alt: "Team bei einer praktischen Schulung für die Pflege",
    caption: "Sicherheit durch Übung",
    className: "row-span-2",
    position: "center 35%",
  },
  {
    src: "/images/einblicke/ansprechpartner-im-buero.webp",
    alt: "Ansprechpartner von Maria Schnee im Büro",
    caption: "Persönlich ansprechbar",
    className: "row-span-2",
    position: "center 28%",
  },
  {
    src: "/images/einblicke/leitung-maria-schnee.webp",
    alt: "Unternehmensleitung von Maria Schnee am Empfang",
    caption: "Nähe und Verantwortung",
    className: "col-span-2",
    position: "center 30%",
  },
  {
    src: "/images/einblicke/beratung-im-unternehmen.webp",
    alt: "Mitarbeiter von Maria Schnee bei der Beratung",
    caption: "Beratung auf Augenhöhe",
    className: "col-span-2",
    position: "center 30%",
  },
  {
    src: "/images/einblicke/mitarbeiter-maria-schnee.webp",
    alt: "Mitarbeiter des ambulanten und Intensivpflegedienstes Maria Schnee",
    caption: "Engagiert im Alltag",
    className: "row-span-2",
    position: "center 25%",
  },
  {
    src: "/images/einblicke/wohngemeinschaft-maria-schnee.webp",
    alt: "Hinweisschild der Wohngemeinschaft für außerklinische Intensivpflege",
    caption: "Unsere Intensivpflege-WG",
    className: "row-span-2",
    position: "center",
  },
  {
    src: "/images/einblicke/persoenliche-beratung.webp",
    alt: "Persönliche Ansprechpartnerin von Maria Schnee im Büro",
    caption: "Zeit für Ihre Anliegen",
    className: "col-span-2",
    position: "center 32%",
  },
] as const;

export function PhotoGallery() {
  return (
    <section
      className="section-space relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f2faff_52%,#fff7fb_100%)]"
      aria-labelledby="einblicke-title"
    >
      <div className="absolute -left-32 top-24 -z-10 size-96 rounded-full bg-sky-200/35 blur-3xl" />
      <div className="absolute -right-36 bottom-16 -z-10 size-96 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="Echte Einblicke"
              title="Menschen, Räume und Momente bei Maria Schnee."
              description="Lernen Sie unser Team, unsere Arbeitsweise und die Intensivpflege-Wohngemeinschaft in authentischen Bildern kennen."
            />
            <div className="inline-flex w-fit items-center gap-3 rounded-full border border-sky-100 bg-white/85 px-5 py-3 text-xs font-bold tracking-[.12em] text-sky-800 uppercase shadow-sm backdrop-blur-xl">
              <Camera className="size-4 text-primary" /> Aus unserem Alltag
            </div>
          </div>
        </Reveal>

        <div
          id="einblicke-title"
          className="mt-12 grid auto-rows-[135px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 lg:auto-rows-[210px] lg:grid-cols-4"
        >
          {galleryImages.map((image, index) => (
            <Reveal
              key={image.src}
              delay={(index % 4) * 0.04}
              className={cn("min-w-0", image.className)}
            >
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="group relative block size-full overflow-hidden rounded-[1.35rem] border border-white/80 bg-sky-50 shadow-[0_22px_55px_-34px_rgba(24,76,110,.5)] outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_65px_-30px_rgba(24,76,110,.55)] focus-visible:ring-4 focus-visible:ring-primary/25 sm:rounded-[1.75rem]"
                aria-label={`${image.caption} – Bild vergrößern`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.035]"
                  style={{ objectPosition: image.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/5 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3.5 sm:p-5">
                  <p className="text-pretty text-[.7rem] font-bold leading-4 text-white sm:text-sm sm:leading-5">
                    {image.caption}
                  </p>
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-white/35 bg-white/15 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 group-focus-visible:opacity-100 sm:size-9">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
