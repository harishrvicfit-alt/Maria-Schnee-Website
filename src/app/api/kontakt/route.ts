import { NextResponse } from "next/server";
import { z } from "zod";
import { sendFormEmail } from "@/lib/form-email";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(180),
  phone: z.string().max(80).optional(),
  message: z.string().min(10).max(5000),
  website: z.string().max(0).optional(),
  consent: z.literal(true),
});

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success)
    return NextResponse.json(
      { message: "Bitte prüfen Sie Ihre Eingaben." },
      { status: 400 },
    );
  try {
    await sendFormEmail({
      subject: `Neue Website-Anfrage von ${parsed.data.name}`,
      heading: "Neue Kontaktanfrage",
      replyTo: parsed.data.email,
      fields: [
        { label: "Name", value: parsed.data.name },
        { label: "E-Mail", value: parsed.data.email },
        { label: "Telefon", value: parsed.data.phone },
        { label: "Nachricht", value: parsed.data.message },
      ],
    });
  } catch (error) {
    console.error("Kontaktformular konnte nicht versendet werden", error);
    return NextResponse.json(
      { message: "Die Anfrage konnte nicht übermittelt werden." },
      { status: 502 },
    );
  }
  return NextResponse.json({
    message: "Vielen Dank. Wir melden uns so bald wie möglich.",
  });
}
