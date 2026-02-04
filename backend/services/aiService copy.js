export async function processWithAI(data, query) {
  // Aqui depois você pluga OpenAI ou outro modelo
  return {
    summary: `IA analisou dados para: ${query}`,
    data,
  };
}
