
import { type NextRequest, NextResponse } from "next/server";
import { runExploreIdeaAgent } from "@/lib/exploreIdeaAgent";
import { runFunctionCall } from "@/lib/runfunctionCall";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userQuestion } = body;

    const res = await runExploreIdeaAgent(userQuestion);
    // console.log(res)
    const result = res[0].content.parts[0];
    console.log(result)

    if (result.functionCall?.name === "draft_refinement") {
      return await runFunctionCall(result)
    }

    // If no function call, return the original summary text
    const summary = result.text;
    console.log(summary)
    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("Fetching Error:", error);
    return NextResponse.json(
      { success: false, message: "Data you requested doesn't exist" },
      { status: 500 }
    );
  }
}
