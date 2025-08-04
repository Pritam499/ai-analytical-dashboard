'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { DataRow } from '@/types';

interface Props {
  data: DataRow[];
}

export function MetricCards({ data }: Props) {
  const totalRevenue = data.reduce((s, r) => s + r.revenue, 0);
  const totalUsers = data.reduce((s, r) => s + r.users, 0);
  const totalConversions = data.reduce((s, r) => s + r.conversions, 0);
  const avgGrowth =
    data.length > 0
      ? data.reduce((s, r) => s + r.growth, 0) / data.length
      : 0;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        { title: 'Revenue', value: `$${totalRevenue.toFixed(2)}` },
        { title: 'Users', value: totalUsers.toString() },
        { title: 'Conversions', value: totalConversions.toString() },
        { title: 'Avg. Growth', value: `${(avgGrowth * 100).toFixed(2)}%` },
      ].map((m) => (
        <Card key={m.title}>
          <CardHeader>
            <CardTitle>{m.title}</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {m.value}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
