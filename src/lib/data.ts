import { DataRow } from '@/types';

export function generateMockData(count = 30): DataRow[] {
  const date = new Date();
  let revenue = 10000;
  const arr: DataRow[] = [];

  for (let i = 0; i < count; i++) {
    date.setDate(date.getDate() - 1);
    const users = 100 + Math.floor(Math.random() * 400);
    const growth = -0.05 + Math.random() * 0.1;
    revenue *= 1 + growth;
    const conversions = Math.floor(users * (0.02 + Math.random() * 0.05));
    arr.unshift({
      date: date.toISOString().split('T')[0],
      revenue: parseFloat(revenue.toFixed(2)),
      users,
      conversions,
      growth,
    });
  }
  return arr;
}

export function validateImportedData(raw: any[]): DataRow[] {
  return raw.map((r) => ({
    date: r.date || new Date().toISOString().split('T')[0],
    revenue: parseFloat(r.revenue ?? r.Revenue ?? 0),
    users: parseInt(r.users ?? r.Users ?? 0, 10),
    conversions: parseInt(r.conversions ?? r.Conversions ?? 0, 10),
    growth:
      parseFloat(r.growth ?? r.Growth ?? r['Growth %'] ?? 0) / (r['Growth %'] ? 1 : 100),
  }));
}
