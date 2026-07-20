import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  light?: boolean;
  priority?: boolean;
};

export function BrandLogo({ className, light = false, priority = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      aria-label="Maria Schnee – Startseite"
      className={cn(
        "relative block h-[62px] w-[102px] shrink-0 overflow-hidden min-[360px]:h-[66px] min-[360px]:w-[108px] sm:h-[72px] sm:w-[118px]",
        light &&
          "rounded-[1.75rem] bg-white p-4 shadow-[0_22px_60px_-28px_rgba(0,0,0,.85)] ring-1 ring-white/15",
        className,
      )}
    >
      <span className="relative block size-full">
        <Image
          src="/maria-schnee-logo.png"
          alt="Maria Schnee – Ambulanter & Intensivpflegedienst GmbH"
          fill
          sizes="(max-width: 359px) 102px, (max-width: 639px) 108px, 164px"
          priority={priority}
          className="object-contain"
        />
      </span>
    </Link>
  );
}
