import { ChatMessage } from '@/types';

export async function chatWithOpenRouter(
  prompt: string,
  summary: string,
  history: ChatMessage[]
): Promise<string> {
  const system = `
You are an assistant for ADmyBRAND Insights. The user’s data summary:
${summary}
Answer questions strictly based on that summary. If you lack info, say so.
  `.trim();

  const messages = [
    { role: 'system', content: system },
    ...history,
    { role: 'user' as const, content: prompt },
  ];

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'mistralai/mistral-small-3.2-24b-instruct:free',
      messages,
    }),
  });
  const json = await res.json();
  return json.choices?.[0]?.message?.content ?? 'No answer.';
}
