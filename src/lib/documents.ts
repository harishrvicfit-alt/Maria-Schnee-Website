import "server-only";

import { list } from "@vercel/blob";
import {
  documentCategories,
  isDocumentCategory,
  type DocumentCategory,
  type PublicDocument,
} from "@/lib/document-config";

export { isDocumentCategory } from "@/lib/document-config";

function encodeTitle(title: string) {
  return Buffer.from(title.trim(), "utf8").toString("base64url");
}

export function makeDocumentPath(
  id: string,
  title: string,
  category: DocumentCategory,
) {
  return `dokumente/${category}/${id}--${encodeTitle(title)}.pdf`;
}

export function parseDocumentPath(pathname: string) {
  const match = pathname.match(
    /^dokumente\/(pflegeinformationen|qualitaet|formulare|sonstiges)\/([a-zA-Z0-9-]{8,})--([a-zA-Z0-9_-]+)\.pdf$/,
  );
  if (!match || !isDocumentCategory(match[1])) return null;

  try {
    const title = Buffer.from(match[3], "base64url").toString("utf8").trim();
    if (!title) return null;
    return { category: match[1], id: match[2], title };
  } catch {
    return null;
  }
}

export async function listPublicDocuments(): Promise<PublicDocument[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return [];
  const { blobs } = await list({ prefix: "dokumente/", limit: 1000 });

  return blobs
    .flatMap((blob) => {
      const parsed = parseDocumentPath(blob.pathname);
      if (!parsed) return [];
      const categoryLabel =
        documentCategories.find((item) => item.value === parsed.category)?.label ??
        "Dokument";
      return [
        {
          ...parsed,
          categoryLabel,
          pathname: blob.pathname,
          url: blob.url,
          downloadUrl: blob.downloadUrl,
          size: blob.size,
          uploadedAt: blob.uploadedAt.toISOString(),
        },
      ];
    })
    .sort((a, b) => b.uploadedAt.localeCompare(a.uploadedAt));
}
