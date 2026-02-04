export async function askAI(query) {
  const res = await fetch("http://localhost:5000/api/ai-query", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  return res.json();
}
const API = "https://abcd123.execute-api.us-east-1.amazonaws.com/api/ai-query";
