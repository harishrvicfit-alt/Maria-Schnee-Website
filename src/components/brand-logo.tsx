import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function BrandLogo({
  className,
  light = false,
  priority = false,
}: {
  className?: string;
  light?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group flex h-14 w-[165px] shrink-0 items-center gap-2.5 min-[360px]:w-[214px] sm:h-[62px] sm:w-[222px] sm:gap-3",
        className,
      )}
    >
      <span className="relative block size-10 shrink-0 overflow-hidden rounded-[1rem] bg-white shadow-[0_12px_35px_-16px_rgba(10,25,45,.35)] ring-1 ring-slate-200/70 sm:size-12 sm:rounded-[1.15rem]">
        <span className="absolute left-1/2 top-0 h-[68px] w-[110px] -translate-x-1/2 sm:h-[80px] sm:w-[130px]">
          <Image
            src="/maria-schnee-logo.png"
            alt=""
            fill
            sizes="(max-width: 639px) 110px, 130px"
            priority={priority}
            className="object-contain object-top"
          />
        </span>
      </span>
      <span
        className={cn(
          "min-w-0 leading-none",
          light ? "text-white" : "text-slate-950",
        )}
      >
        <span className="block whitespace-nowrap font-editorial text-[1.24rem] font-semibold tracking-[-0.035em] sm:text-[1.48rem]">
          Maria{" "}
          <span className={light ? "text-pink-300" : "text-primary"}>
            Schnee
          </span>
        </span>
        <span
          className={cn(
            "mt-1 hidden whitespace-nowrap text-[.47rem] font-bold tracking-[.055em] uppercase min-[360px]:block sm:mt-1.5 sm:text-[.56rem] sm:tracking-[.095em]",
            light ? "text-white/55" : "text-slate-500",
          )}
        >
          Ambulanter & Intensivpflegedienst
        </span>
      </span>
    </Link>
  );
}
