import { del, rename } from "@vercel/blob";
import { z } from "zod";
import { getStaffSession } from "@/lib/staff-auth";
import {
  isDocumentCategory,
  makeDocumentPath,
  parseDocumentPath,
} from "@/lib/documents";
import { isSameOrigin } from "@/lib/request-security";

export const runtime = "nodejs";

const editSchema = z.object({
  pathname: z.string().max(500),
  title: z.string().trim().min(2).max(120),
  category: z.string().refine(isDocumentCategory),
});

async function authorize(request: Request) {
  return isSameOrigin(request) && Boolean(await getStaffSession());
}

export async function PATCH(request: Request) {
  if (!(await authorize(request))) {
    return Response.json({ error: "Nicht berechtigt." }, { status: 403 });
  }
  const parsed = editSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) {
    return Response.json({ error: "Ungültige Dokumentdaten." }, { status: 400 });
  }
  const existing = parseDocumentPath(parsed.data.pathname);
  if (!existing) {
    return Response.json({ error: "Dokument nicht gefunden." }, { status: 404 });
  }

  const pathname = makeDocumentPath(
    existing.id,
    parsed.data.title,
    parsed.data.category,
  );
  const blob = await rename(parsed.data.pathname, pathname, {
    access: "public",
    allowOverwrite: false,
  });
  return Response.json({ success: true, blob });
}

export async function DELETE(request: Request) {
  if (!(await authorize(request))) {
    return Response.json({ error: "Nicht berechtigt." }, { status: 403 });
  }
  const url = new URL(request.url);
  const pathname = url.searchParams.get("pathname") ?? "";
  if (!parseDocumentPath(pathname)) {
    return Response.json({ error: "Ungültiges Dokument." }, { status: 400 });
  }
  await del(pathname);
  return Response.json({ success: true });
}
