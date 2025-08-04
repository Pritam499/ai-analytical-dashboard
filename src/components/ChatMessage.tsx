'use client';
import React from 'react';
import { ChatMessage as CM } from '@/types';

export function ChatMessage({ role, content }: CM) {
  return (
    <div
      className={`p-2 rounded-lg my-1 max-w-xs ${
        role === 'user'
          ? 'bg-blue-100 self-end text-right'
          : 'bg-gray-200 text-left'
      }`}
    >
      {content}
    </div>
  );
}
