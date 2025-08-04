'use client';

import React from 'react';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="border-b bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
        <h1 className="text-xl font-bold">Analytics Dashboard</h1>
        <div className="ml-auto flex items-center space-x-2">
          {/* Add nav links here if needed */}
          <ThemeToggle />
        </div>
      </div>
    </header>
    );
}