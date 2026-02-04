import axios from "axios";

export async function fetchFromInternet(query) {
  if (query.includes("biblioteca")) {
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=${query}`,
    );
    return res.data.items.slice(0, 3);
  }

  if (query.includes("dataset")) {
    const res = await axios.get(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
    );
    return res.data;
  }

  return { message: "Nenhuma fonte encontrada" };
}
