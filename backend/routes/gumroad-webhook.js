import express from "express";
import { processGumroadWebhook } from "../../api/gumroad-webhook.js";

const router = express.Router();

// Express wrapper around the shared Gumroad webhook processor.
router.post(
  "/api/gumroad-webhook",
  express.urlencoded({ extended: true }),
  async (req, res) => {
    try {
      const { status, message } = await processGumroadWebhook({ body: req.body });
      return res.status(status).send(message);
    } catch (err) {
      console.error("Webhook error:", err);
      return res.status(500).send("Internal server error");
    }
  }
);

export default router;
