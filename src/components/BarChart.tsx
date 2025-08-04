'use client';
import React from 'react';
import { useData } from '@/context/DataContext';
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

export function BarChart() {
  const { data } = useData();
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
