import { NextResponse } from "next/server";
import { getTableClient } from "@/lib/azure";

export async function GET() {
  try {
    const tableClient = getTableClient();
    await tableClient.createTable().catch(() => {}); // create if not exists, ignore if already exists
    const entities = tableClient.listEntities();

    const items = [];
    for await (const entity of entities) {
      items.push({
        id: entity.rowKey,
        name: entity.name,
        text: entity.text,
        sentiment: entity.sentiment,
        scores: {
          positive: entity.scorePositive,
          neutral: entity.scoreNeutral,
          negative: entity.scoreNegative,
        },
        submittedAt: entity.submittedAt,
      });
    }

    // Sort newest first
    items.sort((a, b) => new Date(b.submittedAt as string).getTime() - new Date(a.submittedAt as string).getTime());

    return NextResponse.json({ items });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Could not load feedback." }, { status: 500 });
  }
}
