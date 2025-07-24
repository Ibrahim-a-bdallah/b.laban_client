import { Skeleton } from "@/components/ui/skeleton";

export const ShopLoading = () => {
  return (
    <div className="container px-4 mx-auto py-6 space-y-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="mb-8 bg-white rounded-lg shadow-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <Skeleton className="h-6 w-1/4 rounded" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <div className="space-y-3">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="flex justify-between items-center p-4">
                <div className="flex items-center gap-4">
                  <Skeleton className="w-16 h-16 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-3 w-[150px]" />
                  </div>
                </div>
                <Skeleton className="h-4 w-[50px]" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
