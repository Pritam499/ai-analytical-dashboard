export interface DataRow {
  date: string;
  revenue: number;
  users: number;
  conversions: number;
  growth: number; // as decimal, e.g. 0.05 == 5%
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
