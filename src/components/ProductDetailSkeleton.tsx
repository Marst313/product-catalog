import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";

export const ProductDetailSkeleton = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <Button variant="outline" disabled>
        ← Back
      </Button>

      <div className="flex flex-col md:flex-row gap-6">
        <Skeleton className="h-64 w-full md:w-1/3" />

        <div className="flex-1 space-y-3">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-10 w-40" />
        </div>
      </div>

      <div className="space-y-4 border-t pt-6">
        <Skeleton className="h-6 w-40" />

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-20 w-full" />
        </div>

        <Skeleton className="h-10 w-40" />
      </div>
    </div>
  );
};
