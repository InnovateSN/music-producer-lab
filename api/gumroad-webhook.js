// Vercel serverless function for handling Gumroad webhook events and granting access via Supabase.
// This file is designed to work both on Vercel (as /api/gumroad-webhook) and to share logic with the Express backend route.
import { supabase } from "../backend/supabaseClient.js";

/**
 * Shared webhook processor. It receives a parsed body and returns the HTTP response
 * status code and message to keep serverless and Express handlers in sync.
 */
export async function processGumroadWebhook({ body }) {
  const providedSecret = body?.secret;

  // Validate the shared secret to ensure the request originates from Gumroad.
  if (!process.env.GUMROAD_WEBHOOK_SECRET || providedSecret !== process.env.GUMROAD_WEBHOOK_SECRET) {
    console.warn("Invalid webhook secret received.");
    return { status: 403, message: "Forbidden" };
  }

  const email = body?.email?.toLowerCase();
  const purchaseId = body?.purchase_id;

  // Basic payload validation before hitting the database.
  if (!email || !purchaseId) {
    return { status: 400, message: "Missing email or purchase_id." };
  }

  // Check if this purchase was already recorded to avoid duplicate writes.
  const { data: existing, error: existingError } = await supabase
    .from("users")
    .select("purchase_id")
    .eq("email", email)
    .maybeSingle();

  if (existingError) {
    console.error("Supabase lookup error:", existingError);
    return { status: 500, message: "Failed to check existing purchase." };
  }

  if (existing?.purchase_id === purchaseId) {
    console.log("Purchase already recorded.");
    return { status: 200, message: "Already processed." };
  }

  // Upsert the user with premium access; onConflict ensures the email is unique.
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
    return { status: 500, message: "Failed to update user." };
  }

  console.log(`✅ Upserted user ${email} with premium access.`);
  return { status: 200, message: "OK" };
}

/**
 * Parse the incoming request body for both JSON and x-www-form-urlencoded payloads.
 * Gumroad sends webhooks as URL-encoded forms, so this helper ensures compatibility
 * in serverless environments where there is no body parser middleware.
 */
async function parseRequestBody(req) {
  // Vercel may already provide a parsed body (especially when running locally with vercel dev).
  if (req.body && Object.keys(req.body).length > 0) {
    return req.body;
  }

  const contentType = req.headers["content-type"] || "";

  const rawPayload = await new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });

  if (!rawPayload) return {};

  // JSON payloads (not typical for Gumroad, but supported for flexibility).
  if (contentType.includes("application/json")) {
    try {
      return JSON.parse(rawPayload);
    } catch (error) {
      console.warn("Failed to parse JSON webhook body:", error);
      return {};
    }
  }

  // Default to URL-encoded parsing for Gumroad webhooks.
  try {
    return Object.fromEntries(new URLSearchParams(rawPayload));
  } catch (error) {
    console.warn("Failed to parse webhook form body:", error);
    return {};
  }
}

/**
 * Vercel serverless function entrypoint for /api/gumroad-webhook.
 * It validates the HTTP method, parses the request body, and delegates to the shared processor.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  try {
    const parsedBody = await parseRequestBody(req);

    if (!parsedBody || Object.keys(parsedBody).length === 0) {
      return res.status(400).send("Missing webhook payload.");
    }

    const { status, message } = await processGumroadWebhook({ body: parsedBody });
    return res.status(status).send(message);
  } catch (error) {
    console.error("Webhook error:", error);
    return res.status(500).send("Internal server error");
  }
}
