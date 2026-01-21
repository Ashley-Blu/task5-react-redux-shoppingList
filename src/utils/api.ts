const API_BASE = "http://localhost:5005";

export async function fetchLists() {
  const res = await fetch(`${API_BASE}/lists`);
  if (!res.ok) throw new Error("Failed to fetch lists");
  return res.json();
}

export async function createList(payload: { name: string; category?: string; notes?: string; image?: string }) {
  const res = await fetch(`${API_BASE}/lists`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create list");
  return res.json();
}

export async function updateList(id: number, payload: Partial<{ name: string; category: string; notes: string; image: string }>) {
  const res = await fetch(`${API_BASE}/lists/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update list");
  return res.json();
}

export async function deleteList(id: number) {
  const res = await fetch(`${API_BASE}/lists/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Failed to delete list");
  return true;
}

export async function createUser(payload: { username: string; password: string; email?: string }) {
  const res = await fetch(`${API_BASE}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to create user");
  return res.json();
}

export async function findUserByUsername(username: string) {
  const res = await fetch(`${API_BASE}/users?username=${encodeURIComponent(username)}`);
  if (!res.ok) throw new Error("Failed to find user");
  return res.json();
}
