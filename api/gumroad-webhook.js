import crypto from "crypto";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const webhookSecret = process.env.GUMROAD_SECRET;
const gumroadAccessToken = process.env.GUMROAD_ACCESS_TOKEN || process.env.GUMROAD_TOKEN;

// Helper to parse URL-encoded body
async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const params = new URLSearchParams(body);
      const parsed = {};
      for (const [key, value] of params) {
        parsed[key] = value;
      }
      resolve({ parsed, raw: body });
    });
    req.on("error", reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  if (!webhookSecret) {
    console.error("GUMROAD_SECRET is not configured; refusing request.");
    return res.status(500).send("Server misconfigured");
  }

  const signatureHeader = req.headers["x-gumroad-signature"];

  // Parse the body
  const { parsed: body, raw: rawBody } = await parseBody(req);

  if (!signatureHeader || !rawBody) {
    console.warn("Missing Gumroad signature or raw body.");
    return res.status(400).send("Invalid signature");
  }

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody, "utf8")
    .digest("hex");

  const providedSignature = Buffer.from(signatureHeader, "hex");
  const calculatedSignature = Buffer.from(expectedSignature, "hex");

  if (
    providedSignature.length !== calculatedSignature.length ||
    !crypto.timingSafeEqual(providedSignature, calculatedSignature)
  ) {
    console.warn("Invalid Gumroad signature received.");
    return res.status(403).send("Forbidden");
  }

  if (body?.test) {
    return res.status(200).send("pong");
  }

  try {
    if (!gumroadAccessToken) {
      console.error("Gumroad access token missing for sale validation.");
      return res.status(500).send("Server misconfigured");
    }

    const email = body.email?.toLowerCase();
    const purchaseId = body.purchase_id || body.sale_id;
    const planTier = body.offer_name || body.product_name || "premium";

    if (!email || !purchaseId) {
      return res.status(400).send("Missing email or purchase_id.");
    }

    const validationResponse = await fetch(
      `https://api.gumroad.com/v2/sales/${encodeURIComponent(purchaseId)}?access_token=${encodeURIComponent(gumroadAccessToken)}`
    );

    if (!validationResponse.ok) {
      console.warn("Failed to validate sale with Gumroad:", validationResponse.status);
      return res.status(403).send("Unable to validate purchase");
    }

    const validationPayload = await validationResponse.json();
    const sale = validationPayload.sale;

    if (!validationPayload.success || sale?.id !== purchaseId || sale?.email?.toLowerCase() !== email) {
      console.warn("Purchase validation failed for", purchaseId);
      return res.status(403).send("Purchase validation failed");
    }

    const { data: existing, error: existingError } = await supabase
      .from("users")
      .select("purchase_id")
      .eq("email", email)
      .maybeSingle();

    if (existingError) {
      console.error("Supabase lookup error:", existingError);
      return res.status(500).send("Failed to check existing purchase.");
    }

    if (existing?.purchase_id === purchaseId) {
      console.log("Purchase already recorded.");
      return res.status(200).send("Already processed.");
    }

    const { error } = await supabase
      .from("users")
      .upsert(
        {
          email,
          has_paid: true,
          plan_tier: planTier,
          purchase_id: purchaseId,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).send("Failed to update user.");
    }

    console.log(`✅ Upserted user ${email} with premium access.`);
    return res.status(200).send("OK");
  } catch (err) {
    console.error("Webhook error:", err);
    return res.status(500).send("Internal server error");
  }
}
