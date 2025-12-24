/**
 * Music Producer Lab Backend Server
 * Express server for handling Stripe webhooks and API routes
 */

import express from "express";
import dotenv from "dotenv";
import stripeWebhook from "./routes/stripe-webhook.js";

// Load environment variables
dotenv.config({ path: process.env.SUPABASE_ENV_PATH || undefined });

const app = express();
const PORT = process.env.PORT || 3001;

// Stripe webhook needs raw body, so we mount it before express.json()
app.use(stripeWebhook);

// Parse JSON for other routes
app.use(express.json());

// Health check endpoint
app.get("/api/health", (_, res) => {
  res.json({ 
    ok: true, 
    service: "music-producer-lab", 
    version: "2.0.0",
    timestamp: new Date().toISOString(),
    stripe: !!process.env.STRIPE_SECRET_KEY,
    supabase: !!process.env.SUPABASE_URL,
  });
});

// Environment check endpoint (useful for debugging)
app.get("/api/config", (_, res) => {
  res.json({
    stripeConfigured: !!process.env.STRIPE_SECRET_KEY,
    webhookConfigured: !!process.env.STRIPE_WEBHOOK_SECRET,
    supabaseConfigured: !!process.env.SUPABASE_URL && !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    frontendUrl: process.env.FRONTEND_URL || 'not set',
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found', path: req.path });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('[server] Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎵 Music Producer Lab backend listening on :${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Stripe webhook: http://localhost:${PORT}/api/stripe/webhook`);
});
