'use client';
import React from 'react';
import { useData } from '@/context/DataContext';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function DataTable() {
  const { data } = useData();

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {['Date', 'Revenue', 'Users', 'Conversions', 'Growth %'].map(
              (h) => (
                <TableHead key={h}>{h}</TableHead>
              )
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((r, idx) => (
            <TableRow key={idx}>
              <TableCell>{r.date}</TableCell>
              <TableCell>${r.revenue.toFixed(2)}</TableCell>
              <TableCell>{r.users}</TableCell>
              <TableCell>{r.conversions}</TableCell>
              <TableCell>{(r.growth * 100).toFixed(2)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
