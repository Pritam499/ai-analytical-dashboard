import './globals.css';
import { ReactNode } from 'react';
import { Providers } from '@/components/Providers';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';

export const metadata = {
  title: 'AI-Powered Analytics Dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900">
        <Providers>
          <Header />
          <main className="max-w-7xl mx-auto p-4">{children}</main>
        </Providers>
      </body>
    </html>
  );
}