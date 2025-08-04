import { Skeleton } from '@/components/ui/skeleton';
import { DataRow } from '@/types';

export function ChartSection({ data }: { data: DataRow[] }) {
  if (!data || data.length === 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-64 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
      </div>
    );
  }

  // render charts...
}
