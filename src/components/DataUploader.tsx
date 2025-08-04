'use client';
import React from 'react';
import { useData } from '@/context/DataContext';
import { validateImportedData } from '@/lib/data';

export function DataUploader() {
  const { setData } = useData();

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    // reuse same logic as ImportExport or call a shared helper
    // ...
    // after parsing: setData(validatedRows);
  };

  return (
    <div className="text-center text-indigo-400">
      <p>Ask questions about your latest data.</p>
    </div>
  );
}
