import { del } from "@vercel/blob";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { getStaffSession } from "@/lib/staff-auth";
import {
  isDocumentCategory,
  makeDocumentPath,
} from "@/lib/documents";
import { isSameOrigin } from "@/lib/request-security";

export const runtime = "nodejs";

type UploadPayload = {
  id: string;
  title: string;
  category: string;
};

export async function POST(request: Request) {
  const body = (await request.json()) as HandleUploadBody;
  // Der Browser darf Upload-Tokens nur aus derselben Origin anfordern. Der
  // signierte Abschluss-Callback kommt dagegen direkt von Vercel Blob.
  if (body.type === "blob.generate-client-token" && !isSameOrigin(request)) {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 403 });
  }
  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        const session = await getStaffSession();
        if (!session) throw new Error("Nicht angemeldet");

        const payload = JSON.parse(clientPayload ?? "{}") as UploadPayload;
        const title = payload.title?.trim();
        if (
          !title ||
          title.length > 120 ||
          !/^[a-zA-Z0-9-]{8,}$/.test(payload.id ?? "") ||
          !isDocumentCategory(payload.category)
        ) {
          throw new Error("Ungültige Dokumentdaten");
        }
        if (pathname !== makeDocumentPath(payload.id, title, payload.category)) {
          throw new Error("Ungültiger Dateipfad");
        }

        return {
          allowedContentTypes: ["application/pdf"],
          maximumSizeInBytes: 20 * 1024 * 1024,
          addRandomSuffix: false,
          allowOverwrite: false,
          cacheControlMaxAge: 300,
          tokenPayload: JSON.stringify(payload),
        };
      },
      onUploadCompleted: async ({ blob }) => {
        const parsed = blob.pathname.endsWith(".pdf");
        if (!parsed) {
          await del(blob.pathname);
          return;
        }

        try {
          const response = await fetch(blob.url, {
            headers: { Range: "bytes=0-4" },
            cache: "no-store",
          });
          const signature = Buffer.from(await response.arrayBuffer()).toString(
            "ascii",
          );
          if (!response.ok || !signature.startsWith("%PDF-")) {
            await del(blob.pathname);
          }
        } catch (error) {
          console.error("PDF-Signatur konnte nicht geprüft werden", error);
          await del(blob.pathname);
        }
      },
    });
    return Response.json(result);
  } catch (error) {
    console.error("Dokument-Upload abgelehnt", error);
    return Response.json(
      { error: "Der Upload konnte nicht vorbereitet werden." },
      { status: 400 },
    );
  }
}
