
import { type NextRequest, NextResponse } from "next/server";
import { runExploreIdeaAgent } from "@/lib/exploreIdeaAgent";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userQuestion } = body;

    const res = await runExploreIdeaAgent(userQuestion);
    const result = res[0].content;

    if (result.functionCall?.name === "brainstorm_ideas") {
      // If function is internal, send the functionCall back to agent endpoint to execute
      const functionCallResponse = await fetch(
        "https://hackathon-agent-693370628354.europe-west1.run.app/run",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            appName: "hackathon_agent",
            userId: "u_123",
            sessionId: "s_123",
            newMessage: {
              role: "user",
              parts: [
                {
                  text: result.functionCall.args.topic,
                },
              ],
            },
            functionCall: result.functionCall,
          }),
        }
      );

      if (!functionCallResponse.ok) {
        const errorText = await functionCallResponse.text();
        throw new Error(
          `Function call failed: ${functionCallResponse.status} - ${errorText}`
        );
      }

      const functionCallResult = await functionCallResponse.json();
      console.log("Function call result:", functionCallResult);

      return NextResponse.json({ success: true, data: functionCallResult });
    }

    // If no function call, return the original summary text
    const summary = result.parts[0].text;
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
