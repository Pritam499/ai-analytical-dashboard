'use client';
import React from 'react';
import { useData } from '@/context/DataContext';
import { validateImportedData } from '@/lib/data';
import * as XLSX from 'xlsx';
import { Button } from '@/components/ui/button';

export function ImportExport() {
  const { data, setData } = useData();

  const exportCSV = () => {
    const header = ['date', 'revenue', 'users', 'conversions', 'growth'];
    const rows = data.map((r) => [
      r.date,
      r.revenue,
      r.users,
      r.conversions,
      r.growth,
    ]);
    const csv =
      [header.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    a.click();
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      let parsed: any[] = [];
      if (file.name.endsWith('.csv')) {
        const text = evt.target?.result as string;
        const lines = text.split('\n').map((l) => l.trim());
        const [hdr, ...rest] = lines;
        const keys = hdr.split(',').map((h) => h.trim());
        parsed = rest.map((l) => {
          const vals = l.split(',');
          return keys.reduce((o, k, i) => {
            o[k] = vals[i];
            return o;
          }, {} as Record<string, string>);
        });
      } else {
        // Excel
        const wb = XLSX.read(evt.target?.result, {
          type: 'binary',
        });
        const ws = wb.Sheets[wb.SheetNames[0]];
        parsed = XLSX.utils.sheet_to_json(ws);
      }
      setData(validateImportedData(parsed));
    };

    if (file.name.endsWith('.csv')) reader.readAsText(file);
    else reader.readAsBinaryString(file);
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={exportCSV}>Export CSV</Button>
      <label>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={onFile}
          className="hidden"
        />
        {/* <Button>Import Data</Button> */}
      </label>
    </div>
  );
}
