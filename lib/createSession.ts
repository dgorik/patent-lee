export async function createSession(userId: string, sessionId: string) {
  const url = `https://hackathon-agent-693370628354.europe-west1.run.app/apps/hackathon_agent/users/${userId}/sessions/${sessionId}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({}), // empty body as per curl
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Session creation failed: ${errorText}`);
  }

  return await response.json();
}