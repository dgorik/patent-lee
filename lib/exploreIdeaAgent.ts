// lib/exploreIdeaAgent.ts

export async function runExploreIdeaAgent(userQuestion: string) {
  const url = 'https://hackathon-agent-693370628354.europe-west1.run.app/run';

  const body = {
    appName: 'hackathon_agent',
    userId: 'u_123',
    sessionId: 's_123',
    newMessage: {
      role: 'user',
      parts: [{ text: `"${userQuestion}"`}]
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
