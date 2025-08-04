import { MetricCards } from '@/components/MetricCards';
import { LineChart } from '@/components/LineChart';
import { BarChart } from '@/components/BarChart';
import { PieChart } from '@/components/PieChart';
import { DataTable } from '@/components/DataTable';
import { ImportExport } from '@/components/ImportExport';
import { ChatWindow } from '@/components/ChatWindow';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <ImportExport />
      </div>

      <MetricCards />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChart />
        <BarChart />
      </div>

      <PieChart />

      <DataTable />

      <div className="fixed bottom-6 right-6">
        <ChatWindow />
      </div>
    </div>
  );
}
