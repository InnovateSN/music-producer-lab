import express from "express";
import dotenv from "dotenv";
import { supabase } from "./supabaseClient.js";

dotenv.config({ path: process.env.SUPABASE_ENV_PATH || undefined });

const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());

app.post("/api/gumroad-webhook", async (req, res) => {
  const { email, purchase_id: purchaseId } = req.body || {};

  if (!email || !purchaseId) {
    return res
      .status(400)
      .json({ success: false, error: "Missing email or purchase_id" });
  }

  const normalizedEmail = email.trim().toLowerCase();

  const { data, error } = await supabase
    .from("users")
    .upsert({ email: normalizedEmail, has_paid: true }, { onConflict: "email" })
    .select("id, email, has_paid")
    .single();

  if (error) {
    return res.status(500).json({ success: false, error: error.message });
  }

  return res.status(200).json({ success: true, user: data });
});

app.get("/api/health", (_, res) => {
  res.json({ ok: true, service: "music-producer-lab", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Music Producer Lab backend listening on :${PORT}`);
});
