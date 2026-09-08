import { Files, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { DocumentAdmin } from "@/components/document-admin";
import { StaffLogoutButton } from "@/components/staff-logout-button";
import { listPublicDocuments } from "@/lib/documents";
import { getStaffSession } from "@/lib/staff-auth";

export const dynamic = "force-dynamic";

export default async function StaffDocumentsPage() {
  const session = await getStaffSession();
  if (!session) redirect("/mitarbeiterportal");
  const documents = await listPublicDocuments();

  return (
    <main className="min-h-[70vh] bg-slate-50/70 py-12 sm:py-16">
      <div className="container-shell">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-sky-700"><Files className="size-6" /></span>
            <div><p className="text-xs font-bold uppercase tracking-[.18em] text-primary">Mitarbeiterportal</p><h1 className="mt-1 text-3xl font-semibold tracking-tight">Dokumentenverwaltung</h1><p className="mt-2 text-sm text-muted-foreground">Angemeldet als {session.displayName}</p></div>
          </div>
          <StaffLogoutButton />
        </div>
        <div className="mb-8 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 px-5 py-4 text-sm leading-6 text-emerald-900"><ShieldCheck className="mt-0.5 size-5 shrink-0 text-emerald-600" /><p>Änderungen in diesem Bereich werden unmittelbar im öffentlichen Dokumentenbereich veröffentlicht.</p></div>
        <DocumentAdmin documents={documents} />
      </div>
    </main>
  );
}
