import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <Link href="/" aria-label="Maria Schnee – Startseite" className={cn("relative block h-[72px] w-[190px] shrink-0 overflow-hidden", className)}>
      <Image src="/maria-schnee-logo.png" alt="Maria Schnee – Ambulanter & Intensivpflegedienst GmbH" fill sizes="190px" priority className={cn("object-contain", light && "brightness-0 invert")} />
    </Link>
  );
}
