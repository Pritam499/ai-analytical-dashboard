import { Skeleton } from '@/components/ui/skeleton';
import { DataRow } from '@/types';

export function OverviewCards({ data }: { data: DataRow[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <Skeleton key={i} className="h-24 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  // ...existing metrics rendering code
}
