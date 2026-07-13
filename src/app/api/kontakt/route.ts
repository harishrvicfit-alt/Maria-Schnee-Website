import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({ name: z.string().min(2).max(120), email: z.string().email().max(180), phone: z.string().max(80).optional(), message: z.string().min(10).max(5000), website: z.string().max(0).optional(), consent: z.literal(true) });

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ message: "Bitte prüfen Sie Ihre Eingaben." }, { status: 400 });
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return NextResponse.json({ message: "Der sichere Formularversand ist noch nicht konfiguriert. Bitte rufen Sie uns an oder schreiben Sie eine E-Mail." }, { status: 503 });
  const response = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...parsed.data, website: undefined, source: "Website Maria Schnee" }), cache: "no-store" });
  if (!response.ok) return NextResponse.json({ message: "Die Anfrage konnte nicht übermittelt werden." }, { status: 502 });
  return NextResponse.json({ message: "Vielen Dank. Wir melden uns so bald wie möglich." });
}
