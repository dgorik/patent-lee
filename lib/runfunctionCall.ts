import { type NextRequest, NextResponse } from "next/server";

export async function runFunctionCall(result: any){
const functionCallResponse = await fetch(
        "https://hackathon-agent-693370628354.europe-west1.run.app/run",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            appName: "hackathon_agent",
            userId :'u_123',
            sessionId: 's_123',
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
      console.log(functionCallResult)
      console.log(functionCallResult[0].content.parts[0])
      const summary = functionCallResult[0].content.parts[0].text
      console.log("Function call result:", summary)

      return NextResponse.json({ success: true, summary });
    
}