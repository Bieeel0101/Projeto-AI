import express from "express";
import cors from "cors";
import aiRoutes from "./routes/ai.js";

import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", aiRoutes);

app.listen(5000, () => console.log("Server rodando na porta 5000"));

dotenv.config();

export default app;
