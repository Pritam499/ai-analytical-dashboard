'use client';

import React from 'react';
import { useData } from '@/context/DataContext';
import { validateImportedData } from '@/lib/data';
import * as XLSX from 'xlsx';
import { Button } from '@/components/ui/button';

// A loose row shape for CSV/Excel imports
type RawRow = Record<string, unknown>;

export function ImportExport() {
  const { data, setData } = useData();

  // Export current data as CSV
  const exportCSV = () => {
    const header = ['date', 'revenue', 'users', 'conversions', 'growth'];
    const rows = data.map((r) => [
      r.date,
      r.revenue.toString(),
      r.users.toString(),
      r.conversions.toString(),
      r.growth.toString(),
    ]);

    const csvContent =
      [header.join(','), ...rows.map((row) => row.join(','))].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  // Export dashboard section to PDF

  // Handle file input (CSV or Excel)
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      let parsed: RawRow[] = [];

      // CSV parsing
      if (file.name.toLowerCase().endsWith('.csv')) {
        const text = evt.target?.result as string;
        const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0);
        const [hdr, ...rest] = lines;
        const keys = hdr.split(',').map((h) => h.trim());

        parsed = rest.map((line) => {
          const vals = line.split(',');
          const row: RawRow = {};
          keys.forEach((key, i) => {
            row[key] = vals[i]?.trim() ?? '';
          });
          return row;
        });

      // Excel parsing
      } else {
        const bstr = evt.target?.result as ArrayBuffer;
        const wb = XLSX.read(bstr, { type: 'array' });
        const ws = wb.Sheets[wb.SheetNames[0]];
        // Generic JSON parse (returns array of objects)
        parsed = XLSX.utils.sheet_to_json<RawRow>(ws, { defval: '' });
      }

      // Validate & transform into DataRow[]
      setData(validateImportedData(parsed));
    };

    // Kick off file read
    if (file.name.toLowerCase().endsWith('.csv')) {
      reader.readAsText(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={exportCSV}>Export CSV</Button>
      <label>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={onFile}
          className="hidden"
        />
      </label>
    </div>
  );
}
