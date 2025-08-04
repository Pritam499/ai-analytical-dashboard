'use client';

import { useEffect, useState } from 'react';
import { useData } from '@/context/DataContext';
import { DateRangeFilter } from '@/components/DateRangeFilter';
import { ImportExport } from '@/components/ImportExport';
import { DataTable } from '@/components/DataTable';
import { ChatWindow } from '@/components/ChatWindow';

import { LineChart } from '@/components/LineChart';
import { BarChart } from '@/components/BarChart';
import { PieChart } from '@/components/PieChart';
import { MetricCards } from '@/components/MetricCards';

import { DataRow } from '@/types';

export default function DashboardPage() {
  const { data } = useData();
  const [filtered, setFiltered] = useState<DataRow[]>(data);

  const [range, setRange] = useState({
    start: new Date(new Date().setDate(new Date().getDate() - 7)),
    end: new Date(),
  });

  useEffect(() => {
    const startStr = range.start.toISOString().split('T')[0];
    const endStr = range.end.toISOString().split('T')[0];
    setFiltered(
      data.filter((d) => d.date >= startStr && d.date <= endStr)
    );
  }, [data, range]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <ImportExport />
        <DateRangeFilter
          startDate={range.start}
          endDate={range.end}
          setRange={setRange}
        />
      </div>

      <MetricCards data={filtered} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <LineChart data={filtered} />
        <BarChart data={filtered} />
      </div>

      <PieChart data={filtered} />

      <DataTable data={filtered} />

      <div className="fixed bottom-6 right-6">
        <ChatWindow />
      </div>
    </div>
  );
}
