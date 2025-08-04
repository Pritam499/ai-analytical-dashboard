'use client';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { DataRow, ChatMessage } from '@/types';
import { generateMockData } from '@/lib/data';

interface Context {
  data: DataRow[];
  setData: (arr: DataRow[]) => void;
  chat: ChatMessage[];
  addChat: (msg: ChatMessage) => void;
}

const DataContext = createContext<Context | undefined>(undefined);

export const useData = () => {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('useData must be inside DataProvider');
  return ctx;
};

export const DataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<DataRow[]>([]);
  const [chat, setChat] = useState<ChatMessage[]>([]);

  useEffect(() => {
    // initialize mock data on first load
    if (data.length === 0) setData(generateMockData(30));
  }, [data]);

  const addChat = (msg: ChatMessage) => {
    setChat((c) => [...c, msg]);
  };

  return (
    <DataContext.Provider value={{ data, setData, chat, addChat }}>
      {children}
    </DataContext.Provider>
  );
};
