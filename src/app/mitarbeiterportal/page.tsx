import { LockKeyhole, ShieldCheck } from "lucide-react";
import { redirect } from "next/navigation";
import { StaffLoginForm } from "@/components/staff-login-form";
import { getStaffSession } from "@/lib/staff-auth";

export const dynamic = "force-dynamic";

export default async function StaffLoginPage() {
  if (await getStaffSession()) redirect("/mitarbeiterportal/dokumente");

  return (
    <main className="relative overflow-hidden bg-[linear-gradient(135deg,#f3fbff_0%,#fff_48%,#fff2f8_100%)] py-16 sm:py-24">
      <div className="absolute -left-20 top-10 size-80 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 size-80 rounded-full bg-pink-200/25 blur-3xl" />
      <div className="container-shell relative">
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/80 shadow-[0_35px_100px_-45px_rgba(15,23,42,.35)] backdrop-blur-xl lg:grid-cols-[.85fr_1.15fr]">
          <div className="hidden bg-gradient-to-br from-sky-700 to-cyan-600 p-10 text-white lg:flex lg:flex-col lg:justify-between">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25"><LockKeyhole className="size-7" /></div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[.2em] text-sky-100">Interner Bereich</p>
              <h1 className="mt-4 text-4xl font-semibold leading-tight">Sicherer Zugang für Mitarbeitende.</h1>
              <p className="mt-5 leading-7 text-sky-50/85">Verwalten Sie die öffentlich bereitgestellten PDF-Dokumente zentral und übersichtlich.</p>
            </div>
          </div>
          <div className="p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3 lg:hidden"><span className="flex size-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-700"><LockKeyhole /></span><p className="font-semibold">Mitarbeiterportal</p></div>
            <p className="mt-8 text-xs font-bold uppercase tracking-[.18em] text-primary lg:mt-0">Anmeldung</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Willkommen zurück</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Bitte melden Sie sich mit den persönlich zugewiesenen Zugangsdaten an.</p>
            <div className="mt-8"><StaffLoginForm /></div>
            <p className="mt-6 flex items-start gap-2 text-xs leading-5 text-muted-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-600" />Der Zugang ist verschlüsselt, zeitlich begrenzt und vor automatisierten Anmeldeversuchen geschützt.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
