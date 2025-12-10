import crypto from "crypto";
import express from "express";
import dotenv from "dotenv";
import { supabase } from "./supabaseClient.js";

dotenv.config({ path: process.env.SUPABASE_ENV_PATH || undefined });

const app = express();
const PORT = process.env.PORT || 3001;
const webhookSecret = process.env.GUMROAD_WEBHOOK_SECRET || "";

function verifyGumroadSignature(rawBody, headerSignature) {
  if (!webhookSecret) return true;
  if (!headerSignature || !rawBody) return false;

  const expected = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex");

  try {
    return crypto.timingSafeEqual(Buffer.from(headerSignature, "hex"), Buffer.from(expected, "hex"));
  } catch (err) {
    return false;
  }
}

function parseGumroadBody(rawBody) {
  const asString = rawBody?.toString("utf8") || "";
  const params = new URLSearchParams(asString);

  if (params.has("payload")) {
    try {
      return JSON.parse(params.get("payload"));
    } catch (err) {
      // fallback to flat parsing below
    }
  }

  return Object.fromEntries(params.entries());
}

async function markUserPremium(email) {
  const normalizedEmail = email?.trim().toLowerCase();
  if (!normalizedEmail) {
    return { error: "Missing purchaser email" };
  }

  const { data, error } = await supabase
    .from("users")
    .upsert(
      { email: normalizedEmail, is_premium: true },
      { onConflict: "email" }
    )
    .select("id, email, is_premium")
    .single();

  return { data, error };
}

app.use("/api/gumroad-webhook", express.raw({ type: "*/*", limit: "1mb" }));

app.post("/api/gumroad-webhook", async (req, res) => {
  const rawBody = Buffer.isBuffer(req.body) ? req.body : Buffer.from(req.body || "");
  const headerSignature = req.get("X-Gumroad-Signature") || "";

  if (!verifyGumroadSignature(rawBody, headerSignature)) {
    return res.status(400).json({ success: false, error: "Invalid Gumroad signature" });
  }

  const payload = parseGumroadBody(rawBody);

  const email =
    payload?.purchase?.email ||
    payload?.purchase?.purchaser_email ||
    payload?.email ||
    payload?.purchaser_email ||
    payload?.sale?.email ||
    payload?.user_email ||
    null;

  const saleState =
    payload?.purchase?.status ||
    payload?.purchase?.state ||
    payload?.sale_state ||
    payload?.sale?.state ||
    payload?.state ||
    payload?.status ||
    "purchased";

  const normalizedState = saleState?.toString().toLowerCase();
  const allowedStates = ["paid", "purchased", "charged", "fulfilled", "active", "past_due"];
  const isSuccess = allowedStates.includes(normalizedState);

  if (!isSuccess) {
    return res
      .status(202)
      .json({ success: false, error: `Sale not chargeable (state: ${normalizedState})` });
  }

  const { data, error } = await markUserPremium(email);

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
