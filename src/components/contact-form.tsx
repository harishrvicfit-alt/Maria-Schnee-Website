"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein."),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
  phone: z.string().optional(),
  message: z.string().min(10, "Bitte beschreiben Sie Ihr Anliegen in mindestens 10 Zeichen."),
  website: z.string().max(0).optional(),
  consent: z.boolean().refine(Boolean, { message: "Bitte bestätigen Sie die Datenschutzhinweise." }),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { consent: false, website: "" } });
  const submit = async (data: FormValues) => {
    const response = await fetch("/api/kontakt", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    if (!response.ok) { toast.error("Ihre Nachricht konnte nicht gesendet werden."); return; }
    toast.success("Vielen Dank. Ihre Anfrage wurde vorbereitet."); reset();
  };
  return <form onSubmit={handleSubmit(submit)} className="space-y-5" noValidate><div className="absolute -left-[9999px]" aria-hidden="true"><Label htmlFor="website">Website</Label><Input id="website" tabIndex={-1} autoComplete="off" {...register("website")} /></div><div className="grid gap-5 sm:grid-cols-2"><Field label="Name *" id="name" error={errors.name?.message}><Input id="name" autoComplete="name" className="h-12 bg-white" {...register("name")} /></Field><Field label="E-Mail *" id="email" error={errors.email?.message}><Input id="email" type="email" autoComplete="email" className="h-12 bg-white" {...register("email")} /></Field></div><Field label="Telefon" id="phone" error={errors.phone?.message}><Input id="phone" type="tel" autoComplete="tel" className="h-12 bg-white" {...register("phone")} /></Field><Field label="Wie können wir Ihnen helfen? *" id="message" error={errors.message?.message}><Textarea id="message" rows={5} className="min-h-36 resize-y bg-white" {...register("message")} /></Field><div><div className="flex items-start gap-3"><Checkbox id="consent" onCheckedChange={(checked) => setValue("consent", checked === true, { shouldValidate: true })} /><Label htmlFor="consent" className="text-sm font-normal leading-6 text-muted-foreground">Ich stimme zu, dass meine Angaben zur Bearbeitung meiner Anfrage verarbeitet werden. Weitere Informationen finden Sie in der Datenschutzerklärung.</Label></div>{errors.consent ? <p className="mt-2 text-xs font-medium text-destructive">{errors.consent.message}</p> : null}</div><Button type="submit" size="lg" disabled={isSubmitting} className="h-12 w-full rounded-full sm:w-auto">{isSubmitting ? <Loader2 className="animate-spin" /> : <Send />} Anfrage senden</Button><p className="text-xs leading-5 text-muted-foreground">Hinweis: Der Versanddienst muss vor dem Produktivbetrieb mit einem sicheren E-Mail-Anbieter verbunden werden. In Notfällen wenden Sie sich bitte an 112.</p></form>;
}

function Field({ label, id, error, children }: { label: string; id: string; error?: string; children: React.ReactNode }) { return <div className="space-y-2"><Label htmlFor={id}>{label}</Label>{children}{error ? <p className="text-xs font-medium text-destructive">{error}</p> : null}</div>; }
