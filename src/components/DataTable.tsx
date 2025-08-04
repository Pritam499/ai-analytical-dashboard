'use client';

import React from 'react';
import { DataRow } from '@/types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface Props {
  data: DataRow[];
}

export function DataTable({ data }: Props) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {['Date', 'Revenue', 'Users', 'Conversions', 'Growth %'].map((h) => (
              <TableHead key={h}>{h}</TableHead>
            ))}
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
