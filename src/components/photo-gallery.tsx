"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { MotionProvider } from "@/components/motion-provider";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + galleryImages.length) % galleryImages.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % galleryImages.length,
    );
  }, []);

  const closeGallery = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => lastTriggerRef.current?.focus(), 0);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          "button:not([disabled])",
        );
        if (!focusableElements?.length) return;
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeGallery, showNext, showPrevious]);

  const openGallery = (index: number, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setActiveIndex(index);
  };

  const activeImage =
    activeIndex === null ? null : galleryImages[activeIndex];

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
              <button
                type="button"
                onClick={(event) => openGallery(index, event.currentTarget)}
                className="group relative block size-full overflow-hidden rounded-[1.35rem] border border-white/80 bg-sky-50 shadow-[0_22px_55px_-34px_rgba(24,76,110,.5)] outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_65px_-30px_rgba(24,76,110,.55)] focus-visible:ring-4 focus-visible:ring-primary/25 sm:rounded-[1.75rem]"
                aria-label={`${image.caption} – Galerie öffnen`}
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
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage && activeIndex !== null && typeof document !== "undefined"
        ? createPortal(
            <MotionProvider>
              <AnimatePresence>
                <m.div
                    ref={dialogRef}
                    className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/78 p-2 backdrop-blur-xl sm:p-5"
                    initial={reduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.24 }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Bildergalerie"
                    onMouseDown={(event) => {
                      if (event.target === event.currentTarget) closeGallery();
                    }}
                  >
                    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                      <Image
                        src={activeImage.src}
                        alt=""
                        fill
                        sizes="100vw"
                        className="scale-110 object-cover opacity-20 blur-3xl"
                      />
                      <div className="absolute inset-0 bg-slate-950/65" />
                    </div>

                    <m.div
                      className="relative flex h-[min(92dvh,920px)] w-full max-w-7xl flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-slate-950/72 shadow-[0_45px_120px_-30px_rgba(0,0,0,.8)] sm:rounded-[2rem]"
                      initial={
                        reduceMotion ? false : { opacity: 0, scale: 0.97, y: 18 }
                      }
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: 12 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.36,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden">
                        <div
                          className="relative size-full touch-pan-y"
                          onTouchStart={(event) => {
                            touchStartX.current = event.touches[0]?.clientX ?? null;
                          }}
                          onTouchEnd={(event) => {
                            if (touchStartX.current === null) return;
                            const endX = event.changedTouches[0]?.clientX;
                            if (endX === undefined) return;
                            const distance = endX - touchStartX.current;
                            if (Math.abs(distance) > 55) {
                              if (distance > 0) showPrevious();
                              else showNext();
                            }
                            touchStartX.current = null;
                          }}
                        >
                          <AnimatePresence mode="wait" initial={false}>
                            <m.div
                              key={activeImage.src}
                              className="absolute inset-0"
                              initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.01 }}
                              transition={{ duration: reduceMotion ? 0 : 0.26 }}
                            >
                              <Image
                                src={activeImage.src}
                                alt={activeImage.alt}
                                fill
                                priority
                                sizes="100vw"
                                className="object-contain p-2 sm:p-6 lg:p-8"
                              />
                            </m.div>
                          </AnimatePresence>
                        </div>

                        <button
                          ref={closeButtonRef}
                          type="button"
                          onClick={closeGallery}
                          className="absolute right-3 top-3 z-20 grid size-11 place-items-center rounded-full border border-white/20 bg-slate-950/55 text-white shadow-lg backdrop-blur-xl transition hover:scale-105 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35 sm:right-5 sm:top-5"
                          aria-label="Galerie schließen"
                        >
                          <X className="size-5" />
                        </button>

                        <button
                          type="button"
                          onClick={showPrevious}
                          className="absolute left-2 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-950/55 text-white shadow-xl backdrop-blur-xl transition hover:scale-105 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35 sm:left-5 sm:size-13"
                          aria-label="Vorheriges Bild"
                        >
                          <ChevronLeft className="size-6" />
                        </button>
                        <button
                          type="button"
                          onClick={showNext}
                          className="absolute right-2 top-1/2 z-20 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-slate-950/55 text-white shadow-xl backdrop-blur-xl transition hover:scale-105 hover:bg-white hover:text-slate-950 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/35 sm:right-5 sm:size-13"
                          aria-label="Nächstes Bild"
                        >
                          <ChevronRight className="size-6" />
                        </button>
                      </div>

                      <div className="border-t border-white/10 bg-slate-950/80 px-4 py-3 text-white backdrop-blur-xl sm:px-7 sm:py-5">
                        <div className="mx-auto flex max-w-5xl items-center justify-between gap-5">
                          <div className="min-w-0">
                            <p className="truncate text-sm font-bold sm:text-base">
                              {activeImage.caption}
                            </p>
                            <p className="mt-1 text-xs text-white/55">
                              Mit den Pfeiltasten oder per Wischgeste navigieren
                            </p>
                          </div>
                          <p className="shrink-0 rounded-full border border-white/15 bg-white/8 px-3 py-1.5 text-xs font-bold tabular-nums text-white/80">
                            {String(activeIndex + 1).padStart(2, "0")} / {galleryImages.length}
                          </p>
                        </div>
                      </div>
                    </m.div>
                  </m.div>
              </AnimatePresence>
            </MotionProvider>,
            document.body,
          )
        : null}
    </section>
  );
}
