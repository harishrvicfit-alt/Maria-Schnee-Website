import { NextResponse } from "next/server";
import { z } from "zod";

const feedbackSchema = z
  .object({
    type: z.enum(["beschwerde", "anregung", "lob", "sonstiges"]),
    anonymous: z.boolean(),
    name: z.string().max(120).optional(),
    email: z.union([z.literal(""), z.string().email().max(180)]).optional(),
    phone: z.string().max(80).optional(),
    subject: z.string().min(3).max(160),
    message: z.string().min(20).max(5000),
    website: z.string().max(0).optional(),
    consent: z.literal(true),
  })
  .superRefine((data, context) => {
    if (!data.anonymous && (!data.name || data.name.trim().length < 2)) {
      context.addIssue({
        code: "custom",
        path: ["name"],
        message: "Name erforderlich",
      });
    }
  });

export async function POST(request: Request) {
  const body: unknown = await request.json().catch(() => null);
  const parsed = feedbackSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Bitte prüfen Sie Ihre Eingaben." },
      { status: 400 },
    );
  }

  const webhook =
    process.env.FEEDBACK_WEBHOOK_URL ?? process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    return NextResponse.json(
      {
        message:
          "Der sichere Formularversand ist noch nicht konfiguriert. Bitte kontaktieren Sie uns telefonisch oder per E-Mail.",
      },
      { status: 503 },
    );
  }

  const {
    anonymous,
    name,
    email,
    phone,
    website: _website,
    ...feedback
  } = parsed.data;
  void _website;
  const payload = {
    ...feedback,
    anonymous,
    name: anonymous ? undefined : name?.trim(),
    email: anonymous ? undefined : email || undefined,
    phone: anonymous ? undefined : phone?.trim() || undefined,
    source: "Website Maria Schnee – Beschwerden & Anregungen",
  };

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  if (!response.ok) {
    return NextResponse.json(
      { message: "Ihre Mitteilung konnte nicht übermittelt werden." },
      { status: 502 },
    );
  }
  return NextResponse.json({
    message: "Vielen Dank. Ihre Rückmeldung wurde sicher übermittelt.",
  });
}
