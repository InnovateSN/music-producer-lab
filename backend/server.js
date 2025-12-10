import express from "express";
import dotenv from "dotenv";
import gumroadWebhook from "./routes/gumroad-webhook.js";

dotenv.config({ path: process.env.SUPABASE_ENV_PATH || undefined });

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(gumroadWebhook);

app.get("/api/health", (_, res) => {
  res.json({ ok: true, service: "music-producer-lab", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Music Producer Lab backend listening on :${PORT}`);
});
