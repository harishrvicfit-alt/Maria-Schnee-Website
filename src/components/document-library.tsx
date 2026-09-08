"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import type { PublicDocument } from "@/lib/document-config";

function formatBytes(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / 1024 / 1024).toLocaleString("de-DE", { maximumFractionDigits: 1 })} MB`;
}

export function DocumentLibrary({ documents }: { documents: PublicDocument[] }) {
  const [active, setActive] = useState<PublicDocument | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active]);

  if (!documents.length) {
    return (
      <div className="rounded-[2rem] border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-8 text-center shadow-sm sm:p-12">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
          <FileText className="size-7" />
        </div>
        <h2 className="mt-5 text-xl font-semibold">Dokumentenbereich wird vorbereitet</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
          Sobald neue Informationsmaterialien bereitstehen, finden Sie diese hier zur Ansicht und zum sicheren Herunterladen.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {documents.map((item) => (
          <article key={item.pathname} className="group rounded-[1.75rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_-35px_rgba(15,23,42,.35)] transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_25px_60px_-35px_rgba(14,116,144,.4)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-100 to-pink-50 text-sky-700">
                <FileText className="size-6" />
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[.12em] text-slate-600">
                PDF · {formatBytes(item.size)}
              </span>
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[.15em] text-primary">{item.categoryLabel}</p>
            <h2 className="mt-2 text-balance text-xl font-semibold leading-snug">{item.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Veröffentlicht am {new Date(item.uploadedAt).toLocaleDateString("de-DE")}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button type="button" className="h-10 rounded-xl" onClick={() => setActive(item)}>
                <ExternalLink className="size-4" /> Öffnen
              </Button>
              <Button asChild variant="outline" className="h-10 rounded-xl">
                <a href={item.downloadUrl} download>
                  <Download className="size-4" /> Herunterladen
                </a>
              </Button>
            </div>
          </article>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-3 backdrop-blur-md sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.title} ansehen`}
            onMouseDown={(event) => event.target === event.currentTarget && setActive(null)}
          >
            <motion.div className="flex h-[92dvh] w-full max-w-6xl flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-2xl" initial={{ opacity: 0, y: 18, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: .98 }}>
              <div className="flex items-center justify-between gap-3 border-b px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <p className="truncate font-semibold">{active.title}</p>
                  <p className="text-xs text-muted-foreground">PDF-Dokument</p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
                    <a href={active.downloadUrl} download><Download /> Herunterladen</a>
                  </Button>
                  <Button asChild variant="outline" size="icon" aria-label="In neuem Tab öffnen">
                    <a href={active.url} target="_blank" rel="noreferrer"><ExternalLink /></a>
                  </Button>
                  <Button type="button" variant="ghost" size="icon" aria-label="Dokument schließen" onClick={() => setActive(null)} autoFocus>
                    <X />
                  </Button>
                </div>
              </div>
              <iframe title={active.title} src={`${active.url}#view=FitH`} className="min-h-0 flex-1 bg-slate-100" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
