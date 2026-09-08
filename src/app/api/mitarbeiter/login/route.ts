import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyTurnstile } from "@/lib/turnstile";
import { getClientIp, isSameOrigin } from "@/lib/request-security";
import {
  createStaffSession,
  staffSessionCookie,
  verifyStaffCredentials,
} from "@/lib/staff-auth";
import {
  checkLoginRateLimit,
  clearLoginRateLimit,
} from "@/lib/staff-rate-limit";

export const runtime = "nodejs";

const loginSchema = z.object({
  username: z.string().trim().min(3).max(80),
  password: z.string().min(8).max(200),
  turnstileToken: z.string().min(1),
});

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 403 });
  }

  const parsed = loginSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Bitte prüfen Sie Ihre Eingaben und die Sicherheitsprüfung." },
      { status: 400 },
    );
  }

  const rateLimitKey = `${getClientIp(request)}:${parsed.data.username.toLowerCase()}`;
  const rateLimit = checkLoginRateLimit(rateLimitKey);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Zu viele Anmeldeversuche. Bitte versuchen Sie es später erneut." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfter) },
      },
    );
  }

  const human = await verifyTurnstile(
    parsed.data.turnstileToken,
    request,
    "mitarbeiter_login",
  );
  if (!human) {
    return NextResponse.json(
      { error: "Die Sicherheitsprüfung konnte nicht bestätigt werden." },
      { status: 400 },
    );
  }

  const user = verifyStaffCredentials(parsed.data.username, parsed.data.password);
  if (!user) {
    return NextResponse.json(
      { error: "Benutzername oder Passwort ist nicht korrekt." },
      { status: 401 },
    );
  }

  clearLoginRateLimit(rateLimitKey);
  const response = NextResponse.json({ success: true });
  response.cookies.set(
    staffSessionCookie.name,
    createStaffSession(user),
    {
      ...staffSessionCookie.options,
      maxAge: staffSessionCookie.maxAge,
    },
  );
  response.headers.set("Cache-Control", "no-store");
  return response;
}
