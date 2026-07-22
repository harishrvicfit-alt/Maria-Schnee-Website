import { NextResponse } from "next/server";
import { z } from "zod";
import { sendFormEmail } from "@/lib/form-email";

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

  const {
    anonymous,
    name,
    email,
    phone,
    website: _website,
    ...feedback
  } = parsed.data;
  void _website;
  const typeLabels = {
    beschwerde: "Beschwerde",
    anregung: "Anregung",
    lob: "Lob",
    sonstiges: "Sonstige Rückmeldung",
  } as const;
  try {
    await sendFormEmail({
      subject: `${anonymous ? "Anonyme " : ""}${typeLabels[feedback.type]}: ${feedback.subject}`,
      heading: "Neue Rückmeldung über die Website",
      replyTo: anonymous ? undefined : email || undefined,
      fields: [
        { label: "Art", value: typeLabels[feedback.type] },
        { label: "Anonym", value: anonymous ? "Ja" : "Nein" },
        { label: "Name", value: anonymous ? undefined : name?.trim() },
        { label: "E-Mail", value: anonymous ? undefined : email },
        { label: "Telefon", value: anonymous ? undefined : phone?.trim() },
        { label: "Betreff", value: feedback.subject },
        { label: "Mitteilung", value: feedback.message },
      ],
    });
  } catch (error) {
    console.error("Feedbackformular konnte nicht versendet werden", error);
    return NextResponse.json(
      { message: "Ihre Mitteilung konnte nicht übermittelt werden." },
      { status: 502 },
    );
  }
  return NextResponse.json({
    message: "Vielen Dank. Ihre Rückmeldung wurde sicher übermittelt.",
  });
}
