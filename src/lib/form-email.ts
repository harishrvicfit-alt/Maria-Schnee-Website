import { Resend } from "resend";
import { site } from "@/lib/site-data";

type EmailField = { label: string; value?: string };

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}

export async function sendFormEmail({
  subject,
  heading,
  fields,
  replyTo,
}: {
  subject: string;
  heading: string;
  fields: EmailField[];
  replyTo?: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_NOT_CONFIGURED");

  const resend = new Resend(apiKey);
  const from =
    process.env.RESEND_FROM_EMAIL ??
    "Maria Schnee Website <website@mariaschnee-pflege.de>";
  const to = process.env.FORM_RECIPIENT_EMAIL ?? site.email;
  const visibleFields = fields.filter((field) => field.value?.trim());
  const html = `
    <div style="background:#f3f8fb;padding:32px 16px;font-family:Arial,sans-serif;color:#172033">
      <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #dceaf2;border-radius:20px;overflow:hidden">
        <div style="padding:24px 28px;background:linear-gradient(135deg,#eaf7fd,#fff2f8)">
          <p style="margin:0 0 8px;color:#c90084;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase">Maria Schnee Website</p>
          <h1 style="margin:0;font-size:24px;line-height:1.3">${escapeHtml(heading)}</h1>
        </div>
        <div style="padding:28px">
          ${visibleFields
            .map(
              ({ label, value }) =>
                `<div style="margin-bottom:20px"><div style="margin-bottom:6px;color:#617080;font-size:12px;font-weight:700;text-transform:uppercase">${escapeHtml(label)}</div><div style="font-size:15px;line-height:1.7;white-space:pre-wrap">${escapeHtml(value ?? "")}</div></div>`,
            )
            .join("")}
        </div>
      </div>
    </div>`;

  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject,
    html,
    replyTo,
  });
  if (error) throw new Error(`RESEND_ERROR:${error.message}`);
}
