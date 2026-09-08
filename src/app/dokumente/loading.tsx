import { Skeleton } from "@/components/ui/skeleton";

export default function DocumentsLoading() {
  return (
    <div className="container-shell section-space" aria-label="Dokumente werden geladen">
      <Skeleton className="h-12 w-2/3 rounded-2xl" />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {[0, 1, 2].map((item) => <Skeleton key={item} className="h-64 rounded-[1.75rem]" />)}
      </div>
    </div>
  );
}
