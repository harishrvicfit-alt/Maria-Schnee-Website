import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="Maria Schnee – Startseite" className={cn("group flex h-[62px] w-[222px] shrink-0 items-center gap-3", className)}>
      <span className="relative block size-12 shrink-0 overflow-hidden rounded-[1.15rem] bg-white shadow-[0_12px_35px_-16px_rgba(10,25,45,.35)] ring-1 ring-slate-200/70">
        <span className="absolute left-1/2 top-0 h-[80px] w-[130px] -translate-x-1/2">
          <Image src="/maria-schnee-logo.png" alt="" fill sizes="130px" priority className="object-contain object-top" />
        </span>
      </span>
      <span className={cn("min-w-0 leading-none", light ? "text-white" : "text-slate-950")}>
        <span className="block whitespace-nowrap font-editorial text-[1.48rem] font-semibold tracking-[-0.035em]">Maria <span className="text-primary">Schnee</span></span>
        <span className={cn("mt-1.5 block whitespace-nowrap text-[.56rem] font-bold tracking-[.095em] uppercase", light ? "text-white/55" : "text-slate-500")}>Ambulanter & Intensivpflegedienst</span>
      </span>
    </Link>
  );
}
