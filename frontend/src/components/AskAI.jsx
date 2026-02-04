import { useState } from "react";
import { askAI } from "../api";

export default function AskAI() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState(null);

  async function handleAsk() {
    const data = await askAI(query);
    setResponse(data);
  }

  return (
    <div className="p-6">
      <input
        className="border p-2"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pergunte algo..."
      />
      <button
        onClick={handleAsk}
        className="ml-2 bg-blue-500 text-white px-4 py-2"
      >
        Perguntar
      </button>

      {response && (
        <div className="mt-4 p-4 border">
          <p>
            <b>Fonte:</b> {response.source}
          </p>
          <pre>{JSON.stringify(response.result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
