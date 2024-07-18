const BASE_URL = 'https://aircall-backend.onrender.com';

export async function getCalls() {
  const response = await fetch(`${BASE_URL}/activities`);
  const data = await response.json();
  return data;
}

export async function archiveCall(callId) {
  await fetch(`${BASE_URL}/activities/${callId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ is_archived: true })
  });
}

export async function unarchiveCall(callId) {
  await fetch(`${BASE_URL}/activities/${callId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ is_archived: false })
  });
}
