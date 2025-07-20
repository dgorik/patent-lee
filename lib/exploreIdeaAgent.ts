import { createSession } from "./createSession";
import { sessionExists } from "./sessionExists";

export async function runExploreIdeaAgent(userQuestion: string) {
  const userId = 'u_123';
  const sessionId = 's_123';

  // Create session first
// if (!(await sessionExists(userId, sessionId))) {
//     await createSession(userId, sessionId);
//   }


  // Send message
  const url = 'https://hackathon-agent-693370628354.europe-west1.run.app/run';

  const body = {
    appName: 'hackathon_agent',
    userId,
    sessionId,
    newMessage: {
      role: 'user',
      parts: [{ text: userQuestion }], // no extra quotes
    },
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Agent request failed: ${errorText}`);
  }

  return await response.json();
}
