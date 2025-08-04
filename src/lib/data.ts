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

// Use a generic object type instead of `any[]`
export function validateImportedData(
  raw: Record<string, unknown>[]
): DataRow[] {
  return raw.map((r) => ({
    date:
      typeof r.date === 'string'
        ? r.date
        : new Date().toISOString().split('T')[0],
    revenue: parseFloat(
      (r.revenue as string) ??
        (r.Revenue as string) ??
        '0'
    ),
    users: parseInt(
      (r.users as string) ??
        (r.Users as string) ??
        '0',
      10
    ),
    conversions: parseInt(
      (r.conversions as string) ??
        (r.Conversions as string) ??
        '0',
      10
    ),
    growth:
      parseFloat(
        (r.growth as string) ??
          (r.Growth as string) ??
          (r['Growth %'] as string) ??
          '0'
      ) /
      ((r['Growth %'] as string) ? 1 : 100),
  }));
}
