import { NextRequest, NextResponse } from "next/server";
import { getLanguageClient, getTableClient } from "@/lib/azure";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: NextRequest) {
  try {
    const { text, name } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: "Feedback text is required." }, { status: 400 });
    }

    // Analyze sentiment
    const langClient = getLanguageClient();
    const [result] = await langClient.analyzeSentiment([text]);

    if (result.error) {
      return NextResponse.json({ error: "Sentiment analysis failed." }, { status: 500 });
    }

    const sentiment = result.sentiment;
    const scores = result.confidenceScores;

    // Store in Azure Table Storage
    const tableClient = getTableClient();
    await tableClient.createTable();

    const id = uuidv4();
    const entity = {
      partitionKey: "feedback",
      rowKey: id,
      name: name?.trim() || "Anonymous",
      text: text.trim(),
      sentiment,
      scorePositive: scores.positive,
      scoreNeutral: scores.neutral,
      scoreNegative: scores.negative,
      submittedAt: new Date().toISOString(),
    };

    await tableClient.createEntity(entity);

    return NextResponse.json({ success: true, sentiment, scores, id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
