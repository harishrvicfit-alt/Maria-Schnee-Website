import { cn } from "@/lib/utils";

export function BrandFeather({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 560 280" aria-hidden="true" className={cn("pointer-events-none", className)} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M82 226C207 183 319 103 488 40" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
      <path d="M164 190C122 174 89 146 66 106C116 111 159 132 195 164" fill="currentColor" opacity=".9" />
      <path d="M227 154C176 135 137 101 111 54C170 61 218 86 258 124" fill="currentColor" opacity=".78" />
      <path d="M297 120C248 96 214 62 191 22C246 27 291 48 331 85" fill="currentColor" opacity=".66" />
      <path d="M348 105C374 66 408 40 451 25C437 70 410 105 369 130" fill="currentColor" opacity=".82" />
      <path d="M284 142C310 103 344 77 387 62C372 108 345 143 305 168" fill="currentColor" opacity=".72" />
      <path d="M215 178C242 142 274 118 315 103C301 146 275 179 237 202" fill="currentColor" opacity=".62" />
      <path d="M71 237C191 259 329 246 489 185" stroke="currentColor" strokeWidth="5" strokeLinecap="round" opacity=".34" />
    </svg>
  );
}
