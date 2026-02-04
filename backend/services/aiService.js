import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function processWithAI(data, query) {
  const prompt = `
Você é uma IA que analisa dados da internet.

Pergunta do usuário:
${query}

Dados encontrados:
${JSON.stringify(data).slice(0, 4000)}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.3,
  });

  return response.choices[0].message.content;
}
