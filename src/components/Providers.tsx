'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { DataProvider } from '@/context/DataContext';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <DataProvider>{children}</DataProvider>
    </ThemeProvider>
  );
}