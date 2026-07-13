"use client";
import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) { useEffect(() => { console.error(error); }, [error]); return <section className="grid min-h-[65vh] place-items-center px-5 py-20"><div className="max-w-lg text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-amber-100 text-amber-700"><AlertTriangle /></div><h1 className="mt-6 text-3xl font-semibold">Etwas ist schiefgelaufen.</h1><p className="mt-4 leading-7 text-muted-foreground">Bitte versuchen Sie es erneut. Sollte das Problem bestehen bleiben, erreichen Sie uns auch direkt per Telefon.</p><Button onClick={reset} className="mt-8 rounded-full"><RefreshCw /> Erneut versuchen</Button></div></section>; }
