import express from "express";
import { supabase } from "../supabaseClient.js";

const router = express.Router();

router.post("/api/gumroad-webhook", express.urlencoded({ extended: true }), async (req, res) => {
  try {
    const providedSecret = req.body.secret;

    if (!process.env.GUMROAD_WEBHOOK_SECRET || providedSecret !== process.env.GUMROAD_WEBHOOK_SECRET) {
      console.warn("Invalid webhook secret received.");
      return res.status(403).send("Forbidden");
    }

    const email = req.body.email?.toLowerCase();
    const purchaseId = req.body.purchase_id;

    if (!email || !purchaseId) {
      return res.status(400).send("Missing email or purchase_id.");
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
});

export default router;
