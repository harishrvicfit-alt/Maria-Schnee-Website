import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, description, align = "left", className }: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; className?: string }) {
  return <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}><div className="eyebrow"><Sparkles className="size-3.5 shrink-0" />{eyebrow}</div><h2 className="text-balance text-[1.9rem] font-medium leading-[1.12] tracking-[-0.04em] text-foreground sm:text-4xl lg:text-[3.5rem] lg:leading-[1.03]">{title}</h2>{description ? <p className="mt-5 text-balance text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg">{description}</p> : null}</div>;
}
