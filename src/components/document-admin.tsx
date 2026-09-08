"use client";

import { upload } from "@vercel/blob/client";
import { Download, FilePenLine, FileText, Plus, Trash2, UploadCloud, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  documentCategories,
  type DocumentCategory,
  type PublicDocument,
} from "@/lib/document-config";

function encodeTitle(title: string) {
  const bytes = new TextEncoder().encode(title.trim());
  let binary = "";
  bytes.forEach((byte) => (binary += String.fromCharCode(byte)));
  return btoa(binary).replaceAll("+", "-").replaceAll("/", "_").replaceAll("=", "");
}

function pathnameFor(id: string, title: string, category: DocumentCategory) {
  return `dokumente/${category}/${id}--${encodeTitle(title)}.pdf`;
}

export function DocumentAdmin({ documents }: { documents: PublicDocument[] }) {
  const router = useRouter();
  const fileRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<DocumentCategory>("pflegeinformationen");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [editing, setEditing] = useState<PublicDocument | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editCategory, setEditCategory] = useState<DocumentCategory>("pflegeinformationen");

  async function addDocument(event: React.FormEvent) {
    event.preventDefault();
    const file = fileRef.current?.files?.[0];
    if (!title.trim() || !file) {
      toast.error("Bitte Titel und PDF-Datei auswählen.");
      return;
    }
    if (file.type !== "application/pdf" || !file.name.toLowerCase().endsWith(".pdf")) {
      toast.error("Es können ausschließlich PDF-Dateien hochgeladen werden.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      toast.error("Die PDF-Datei darf maximal 20 MB groß sein.");
      return;
    }

    setUploading(true);
    setProgress(0);
    const id = crypto.randomUUID();
    try {
      await upload(pathnameFor(id, title, category), file, {
        access: "public",
        handleUploadUrl: "/api/mitarbeiter/dokumente/upload",
        contentType: "application/pdf",
        clientPayload: JSON.stringify({ id, title: title.trim(), category }),
        multipart: file.size > 5 * 1024 * 1024,
        onUploadProgress: ({ percentage }) => setProgress(Math.round(percentage)),
      });
      toast.success("Das Dokument wurde veröffentlicht.");
      setTitle("");
      if (fileRef.current) fileRef.current.value = "";
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Das Dokument konnte nicht hochgeladen werden.");
    } finally {
      setUploading(false);
    }
  }

  function startEdit(document: PublicDocument) {
    setEditing(document);
    setEditTitle(document.title);
    setEditCategory(document.category);
  }

  async function saveEdit(event: React.FormEvent) {
    event.preventDefault();
    if (!editing || editTitle.trim().length < 2) return;
    try {
      const response = await fetch("/api/mitarbeiter/dokumente", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pathname: editing.pathname,
          title: editTitle.trim(),
          category: editCategory,
        }),
      });
      if (!response.ok) throw new Error("Bearbeitung fehlgeschlagen");
      toast.success("Dokumentdaten wurden aktualisiert.");
      setEditing(null);
      router.refresh();
    } catch {
      toast.error("Die Änderungen konnten nicht gespeichert werden.");
    }
  }

  async function removeDocument(document: PublicDocument) {
    if (!window.confirm(`„${document.title}“ wirklich dauerhaft löschen?`)) return;
    try {
      const response = await fetch(
        `/api/mitarbeiter/dokumente?pathname=${encodeURIComponent(document.pathname)}`,
        { method: "DELETE" },
      );
      if (!response.ok) throw new Error("Löschen fehlgeschlagen");
      toast.success("Das Dokument wurde gelöscht.");
      router.refresh();
    } catch {
      toast.error("Das Dokument konnte nicht gelöscht werden.");
    }
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[minmax(0,420px)_1fr]">
      <form onSubmit={addDocument} className="h-fit rounded-[2rem] border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700"><UploadCloud className="size-5" /></span>
          <div><h2 className="font-semibold">Neues PDF veröffentlichen</h2><p className="text-xs text-muted-foreground">Maximal 20 MB</p></div>
        </div>
        <div className="mt-7 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="document-title">Dokumenttitel</Label>
            <Input id="document-title" value={title} onChange={(event) => setTitle(event.target.value)} maxLength={120} className="h-11 bg-white" placeholder="z. B. Informationen zur Pflegeberatung" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="document-category">Kategorie</Label>
            <select id="document-category" value={category} onChange={(event) => setCategory(event.target.value as DocumentCategory)} className="h-11 w-full rounded-lg border border-input bg-white px-3 text-sm outline-none focus:border-ring focus:ring-3 focus:ring-ring/50">
              {documentCategories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="document-file">PDF-Datei</Label>
            <Input ref={fileRef} id="document-file" type="file" accept="application/pdf,.pdf" className="h-11 cursor-pointer bg-white py-2" required />
          </div>
          {uploading && (
            <div className="space-y-2" aria-live="polite">
              <div className="h-2 overflow-hidden rounded-full bg-sky-100"><div className="h-full rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} /></div>
              <p className="text-xs text-muted-foreground">Upload: {progress} %</p>
            </div>
          )}
          <Button type="submit" className="h-11 w-full rounded-xl" disabled={uploading}>
            <Plus className="size-4" /> {uploading ? "Wird hochgeladen …" : "Dokument veröffentlichen"}
          </Button>
          <p className="text-xs leading-5 text-muted-foreground">Nur Dokumente hochladen, die öffentlich zugänglich sein dürfen. Keine vertraulichen Personen- oder Patientendaten veröffentlichen.</p>
        </div>
      </form>

      <section>
        <div className="mb-5 flex items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[.15em] text-primary">Veröffentlichte Inhalte</p><h2 className="mt-1 text-2xl font-semibold">Dokumente verwalten</h2></div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{documents.length}</span>
        </div>
        {documents.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed p-10 text-center text-muted-foreground"><FileText className="mx-auto mb-3 size-7" />Noch keine Dokumente veröffentlicht.</div>
        ) : (
          <div className="space-y-3">
            {documents.map((document) => (
              <article key={document.pathname} className="flex flex-col gap-4 rounded-[1.5rem] border bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0"><p className="text-xs font-semibold uppercase tracking-[.12em] text-primary">{document.categoryLabel}</p><h3 className="mt-1 break-words font-semibold">{document.title}</h3><p className="mt-1 text-xs text-muted-foreground">{new Date(document.uploadedAt).toLocaleDateString("de-DE")} · PDF</p></div>
                <div className="flex shrink-0 flex-wrap gap-2">
                  <Button asChild variant="outline" size="icon" aria-label="Dokument herunterladen"><a href={document.downloadUrl} download><Download /></a></Button>
                  <Button type="button" variant="outline" size="icon" aria-label="Dokument bearbeiten" onClick={() => startEdit(document)}><FilePenLine /></Button>
                  <Button type="button" variant="destructive" size="icon" aria-label="Dokument löschen" onClick={() => removeDocument(document)}><Trash2 /></Button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {editing && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Dokument bearbeiten">
          <form onSubmit={saveEdit} className="w-full max-w-lg rounded-[1.75rem] bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between"><h2 className="text-xl font-semibold">Dokument bearbeiten</h2><Button type="button" variant="ghost" size="icon" aria-label="Schließen" onClick={() => setEditing(null)}><X /></Button></div>
            <div className="mt-6 space-y-5">
              <div className="space-y-2"><Label htmlFor="edit-title">Dokumenttitel</Label><Input id="edit-title" value={editTitle} onChange={(event) => setEditTitle(event.target.value)} maxLength={120} className="h-11" required /></div>
              <div className="space-y-2"><Label htmlFor="edit-category">Kategorie</Label><select id="edit-category" value={editCategory} onChange={(event) => setEditCategory(event.target.value as DocumentCategory)} className="h-11 w-full rounded-lg border border-input bg-white px-3 text-sm outline-none focus:border-ring focus:ring-3 focus:ring-ring/50">{documentCategories.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}</select></div>
              <div className="flex justify-end gap-2"><Button type="button" variant="outline" onClick={() => setEditing(null)}>Abbrechen</Button><Button type="submit">Änderungen speichern</Button></div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
