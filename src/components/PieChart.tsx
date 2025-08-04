'use client';
import React from 'react';
import { useData } from '@/context/DataContext';
import {
  PieChart as PC,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function PieChart() {
  const { data } = useData();
  // Show proportion of conversions vs users (just example)
  const totalUsers = data.reduce((s, r) => s + r.users, 0);
  const totalConv = data.reduce((s, r) => s + r.conversions, 0);

  const pieData = [
    { name: 'Users', value: totalUsers },
    { name: 'Conversions', value: totalConv },
  ];

  const COLORS = ['#3b82f6', '#f59e0b'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Conversions vs Users</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <PC>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              outerRadius={80}
              label
            >
              {pieData.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PC>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
