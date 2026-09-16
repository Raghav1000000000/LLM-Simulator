import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ configured: Boolean(process.env.LLM_API_KEY) });
}

export async function POST(request: Request) {
  const apiKey = process.env.LLM_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "Real API mode is not configured. The simulator is still fully available in Free Mode. Add your API key to .env.local to enable real generation." }, { status: 503 });
  const body = await request.json().catch(() => null) as { prompt?: unknown } | null;
  if (typeof body?.prompt !== "string" || body.prompt.length > 4000) return NextResponse.json({ error: "Prompt must be a string of at most 4000 characters." }, { status: 400 });
  const upstream = await fetch("https://api.openai.com/v1/chat/completions", { method: "POST", headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` }, body: JSON.stringify({ model: process.env.LLM_MODEL || "gpt-4o-mini", messages: [{ role: "user", content: body.prompt }], stream: true }), signal: request.signal });
  if (!upstream.ok || !upstream.body) return NextResponse.json({ error: "Real API generation failed. You can retry or switch back to Free Mode." }, { status: 502 });
  return new Response(upstream.body, { headers: { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" } });
}