import type { Metadata } from "next";
import { DocumentLibrary } from "@/components/document-library";
import { PageHero } from "@/components/page-hero";
import { listPublicDocuments } from "@/lib/documents";
import { createMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";
export const metadata: Metadata = createMetadata(
  "Dokumente & Downloads",
  "Informationsmaterialien und PDF-Dokumente des Ambulanten & Intensivpflegedienstes Maria Schnee ansehen und herunterladen.",
  "/dokumente",
);

export default async function DocumentsPage() {
  const documents = await listPublicDocuments();
  return (
    <>
      <PageHero
        eyebrow="Gut informiert"
        current="Dokumente"
        title="Wichtige Informationen auf einen Blick."
        description="Hier können Sie unsere aktuellen Informationsmaterialien direkt ansehen und als PDF auf Ihrem Gerät speichern."
      />
      <section className="section-space bg-[linear-gradient(180deg,#fff_0%,#f7fbff_100%)]">
        <div className="container-shell">
          <DocumentLibrary documents={documents} />
        </div>
      </section>
    </>
  );
}
