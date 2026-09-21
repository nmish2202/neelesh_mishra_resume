import { NextResponse } from "next/server";
import { assistantInstructions, getGroundingPrompt, getLocalPortfolioAnswer } from "@/lib/assistant";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message) return NextResponse.json({ error: "Enter a question first." }, { status: 400 });
  if (message.length > 600) return NextResponse.json({ error: "Keep questions under 600 characters." }, { status: 400 });

  const apiKey = process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL;
  if (!apiKey || !model) {
    return NextResponse.json({ answer: getLocalPortfolioAnswer(message), mode: "local" });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model,
        instructions: assistantInstructions,
        input: getGroundingPrompt(message),
        max_output_tokens: 350,
        store: false,
      }),
    });

    if (!response.ok) throw new Error(`OpenAI request failed with ${response.status}`);
    const data = await response.json();
    const answer = data.output_text || data.output?.flatMap((item) => item.content || []).find((item) => item.type === "output_text")?.text;
    if (!answer) throw new Error("The model returned no text response.");
    return NextResponse.json({ answer, mode: "ai" });
  } catch {
    return NextResponse.json({ answer: getLocalPortfolioAnswer(message), mode: "local" });
  }
}
