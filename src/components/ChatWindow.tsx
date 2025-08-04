'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useData } from '@/context/DataContext';
import { chatWithOpenRouter } from '@/lib/openrouter';
import { ChatMessage } from './ChatMessage';
import { DataUploader } from './DataUploader';
import { Button } from '@/components/ui/button';

export function ChatWindow() {
  const { data, chat, addChat } = useData();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const summary = React.useMemo(() => {
    if (!data.length) return 'No data loaded.';
    const last = data[data.length - 1];
    return `Rows: ${data.length}, Latest revenue $${last.revenue.toFixed(
      2
    )}, users ${last.users}, conversions ${last.conversions}, growth ${(
      last.growth * 100
    ).toFixed(2)}%`;
  }, [data]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chat]);

  const send = async () => {
    if (!input.trim()) return;
    addChat({ role: 'user', content: input });
    setLoading(true);
    try {
      const ans = await chatWithOpenRouter(input, summary, chat);
      addChat({ role: 'assistant', content: ans });
    } catch {
      addChat({
        role: 'assistant',
        content: '❌ Error reaching AI. Try again later.',
      });
    } finally {
      setLoading(false);
      setInput('');
    }
  };

  return (
    <>
      <Button onClick={() => setOpen((o) => !o)}>Chat with AI</Button>
      {open && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 w-80 h-96 rounded-lg shadow-lg flex flex-col">
          <div className="p-2 border-b flex justify-between">
            <h3>Analytics Bot</h3>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="flex-1 p-2 overflow-y-auto flex flex-col">
            {chat.length === 0 ? (
              <DataUploader />
            ) : (
              chat.map((m, i) => (
                <ChatMessage key={i} role={m.role} content={m.content} />
              ))
            )}
            <div ref={endRef} />
          </div>
          <div className="p-2 border-t flex">
            <input
              className="flex-1 border rounded-l px-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              disabled={loading}
            />
            <button
              onClick={send}
              disabled={loading}
              className="bg-blue-600 text-white px-4 rounded-r"
            >
              {loading ? '…' : 'Send'}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
