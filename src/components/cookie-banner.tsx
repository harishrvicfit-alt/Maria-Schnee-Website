"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(!localStorage.getItem("maria-schnee-cookie-choice")); }, []);
  const choose = (value: string) => { localStorage.setItem("maria-schnee-cookie-choice", value); setVisible(false); };
  if (!visible) return null;
  return <aside role="dialog" aria-label="Cookie-Einstellungen" className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-3xl rounded-3xl border bg-white p-5 shadow-2xl sm:p-6"><div className="flex flex-col gap-5 sm:flex-row sm:items-start"><div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Cookie className="size-5" /></div><div className="flex-1"><h2 className="font-bold">Ihre Privatsphäre ist uns wichtig</h2><p className="mt-2 text-sm leading-6 text-muted-foreground">Wir verwenden technisch notwendige Speicherungen. Externe Inhalte wie Google Maps werden erst nach Ihrer aktiven Zustimmung geladen. Mehr dazu in unserer <Link href="/datenschutz" className="font-semibold text-primary underline underline-offset-4">Datenschutzerklärung</Link>.</p><div className="mt-5 flex flex-wrap gap-3"><Button onClick={() => choose("all")} className="rounded-full">Alle akzeptieren</Button><Button onClick={() => choose("necessary")} variant="outline" className="rounded-full">Nur notwendige</Button></div></div></div></aside>;
}
