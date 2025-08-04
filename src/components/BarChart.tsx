'use client';

import React from 'react';
import { DataRow } from '@/types';
import {
  BarChart as BC,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Props {
  data: DataRow[];
}

export function BarChart({ data }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Users & Conversions</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BC data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" stackId="a" fill="#10b981" />
            <Bar dataKey="conversions" stackId="a" fill="#f59e0b" />
          </BC>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
