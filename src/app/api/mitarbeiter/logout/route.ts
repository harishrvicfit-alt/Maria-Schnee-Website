import { NextResponse } from "next/server";
import { isSameOrigin } from "@/lib/request-security";
import { staffSessionCookie } from "@/lib/staff-auth";

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 403 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(staffSessionCookie.name, "", {
    ...staffSessionCookie.options,
    maxAge: 0,
  });
  return response;
}
