import express from "express";
import { getFromCache, saveToCache } from "../services/cacheService.js";
import { fetchFromInternet } from "../services/fetchService.js";
import { processWithAI } from "../services/aiService.js";
import hash from "../utils/hash.js";

const router = express.Router();
const CACHE_HOURS = 4;

router.post("/ai-query", async (req, res) => {
  const { query } = req.body;
  const key = hash(query);

  // 🔍 1. Verifica cache
  const cached = await getFromCache(key);

  if (cached && Date.now() - cached.timestamp < CACHE_HOURS * 3600000) {
    return res.json({ result: cached.data, source: "cache" });
  }

  // 🌍 2. Busca na internet
  const internetData = await fetchFromInternet(query);

  // 🧠 3. Processa com IA
  const aiResult = await processWithAI(internetData, query);

  // 💾 4. Salva no cache
  await saveToCache(key, aiResult);

  res.json({ result: aiResult, source: "internet" });
});

export default router;
