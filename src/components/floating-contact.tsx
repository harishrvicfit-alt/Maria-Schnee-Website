"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
      {open ? (
        <div className="glass w-[min(330px,calc(100vw-40px))] rounded-3xl p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-bold">Wie können wir helfen?</p>
              <p className="text-xs text-muted-foreground">Persönlich und unverbindlich</p>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="rounded-full" aria-label="Kontaktmenü schließen">
              <X />
            </Button>
          </div>
          <div className="space-y-2">
            <a href={`tel:${site.phone}`} className="flex items-center gap-3 rounded-2xl bg-slate-950 p-4 text-sm font-bold text-white">
              <Phone className="size-5 text-sky-300" />{site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-2xl bg-muted p-4 text-sm font-bold">
              <Mail className="size-5 text-primary" />E-Mail schreiben
            </a>
            <Link href="/kontakt#kontaktformular" className="flex items-center gap-3 rounded-2xl bg-muted p-4 text-sm font-bold">
              <MessageCircle className="size-5 text-primary" />Kontaktformular
            </Link>
          </div>
          <p className="mt-4 text-[11px] leading-4 text-muted-foreground">Kein öffentlich bestätigter WhatsApp-Kanal vorhanden. Daher verlinken wir bewusst nur verifizierte Kontaktwege.</p>
        </div>
      ) : null}
      <Button onClick={() => setOpen((value) => !value)} size="lg" className="h-14 rounded-full px-5 shadow-xl shadow-primary/30">
        <MessageCircle className="size-5" /> <span className="hidden sm:inline">Kontakt</span>
      </Button>
    </div>
  );
}
