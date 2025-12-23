import crypto from "crypto";
import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();
const webhookSecret = process.env.GUMROAD_SECRET;
const gumroadAccessToken = process.env.GUMROAD_ACCESS_TOKEN || process.env.GUMROAD_TOKEN;

const rawBodySaver = (req, res, buf) => {
  req.rawBody = buf?.toString("utf8");
};

router.post(
  "/api/gumroad-webhook",
  express.urlencoded({ extended: true, verify: rawBodySaver }),
  async (req, res) => {
    if (!webhookSecret) {
      console.error("GUMROAD_SECRET is not configured; refusing request.");
      return res.status(500).send("Server misconfigured");
    }

    const signatureHeader = req.get("X-Gumroad-Signature");

    if (!signatureHeader || !req.rawBody) {
      console.warn("Missing Gumroad signature or raw body.");
      return res.status(400).send("Invalid signature");
    }

    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(req.rawBody, "utf8")
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

    if (req.body?.test) {
      return res.status(200).send("pong");
    }

    try {
      if (!gumroadAccessToken) {
        console.error("Gumroad access token missing for sale validation.");
        return res.status(500).send("Server misconfigured");
      }

      const email = req.body.email?.toLowerCase();
      const purchaseId = req.body.purchase_id || req.body.sale_id;
      const planTier = req.body.offer_name || req.body.product_name || "premium";

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
                      price: sale.price || null,
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
);

export default router;
