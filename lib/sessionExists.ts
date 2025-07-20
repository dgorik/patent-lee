export async function sessionExists(userId: string, sessionId: string): Promise<boolean> {
  const url = `https://hackathon-agent-693370628354.europe-west1.run.app/apps/hackathon_agent/users/${userId}/sessions/${sessionId}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // Session exists
      return true;
    } else if (response.status === 404) {
      // Session does not exist
      return false;
    } else {
      // Unexpected error status
      const errorText = await response.text();
      throw new Error(`Unexpected response checking session: ${response.status} - ${errorText}`);
    }
  } catch (err) {
    // Network or other error
    throw new Error(`Error checking session existence: ${err}`);
  }
}
