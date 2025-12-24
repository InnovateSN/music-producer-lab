/**
 * Stripe Webhook Handler
 * Processes Stripe events for subscription management
 * 
 * Deploy: Vercel Serverless Function
 * Endpoint: POST /api/stripe/webhook
 * 
 * Required Events to enable in Stripe Dashboard:
 * - checkout.session.completed
 * - customer.subscription.created
 * - customer.subscription.updated
 * - customer.subscription.deleted
 * - invoice.paid
 * - invoice.payment_failed
 */

import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Initialize Supabase with service role for admin operations
const supabase = createClient(
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Subscription type to access duration mapping
const SUBSCRIPTION_DURATIONS = {
  monthly: 30, // days
  yearly: 365,
  lifetime: 365 * 100, // 100 years
};

// Calculate access_until date based on subscription type
function calculateAccessUntil(subscriptionType, startDate = new Date()) {
  const days = SUBSCRIPTION_DURATIONS[subscriptionType] || 30;
  const accessUntil = new Date(startDate);
  accessUntil.setDate(accessUntil.getDate() + days);
  return accessUntil.toISOString();
}

// Update user profile with subscription data
async function updateUserSubscription(email, data) {
  const {
    subscriptionId,
    subscriptionType,
    tier,
    status,
    currentPeriodEnd,
    cancelAtPeriodEnd,
  } = data;

  // Calculate access_until
  let accessUntil;
  if (currentPeriodEnd) {
    // For subscriptions, use Stripe's period end
    accessUntil = new Date(currentPeriodEnd * 1000).toISOString();
  } else {
    // For one-time payments, calculate based on type
    accessUntil = calculateAccessUntil(subscriptionType);
  }

  const updateData = {
    email,
    has_paid: true,
    subscription_id: subscriptionId,
    subscription_type: subscriptionType,
    subscription_status: status || 'active',
    plan_tier: tier,
    access_until: accessUntil,
    cancel_at_period_end: cancelAtPeriodEnd || false,
    updated_at: new Date().toISOString(),
  };

  console.log(`[webhook] Updating user ${email}:`, updateData);

  const { error } = await supabase
    .from('users')
    .upsert(updateData, { onConflict: 'email' });

  if (error) {
    console.error(`[webhook] Failed to update user ${email}:`, error);
    throw error;
  }

  console.log(`[webhook] Successfully updated user ${email}`);
}

// Handle subscription cancellation
async function handleSubscriptionCanceled(email, subscriptionId) {
  console.log(`[webhook] Canceling subscription for ${email}`);

  const { error } = await supabase
    .from('users')
    .update({
      subscription_status: 'canceled',
      has_paid: false,
      cancel_at_period_end: true,
      updated_at: new Date().toISOString(),
    })
    .eq('email', email);

  if (error) {
    console.error(`[webhook] Failed to cancel subscription for ${email}:`, error);
    throw error;
  }
}

// Log webhook event
async function logWebhookEvent(event, status, details = null) {
  try {
    await supabase.from('webhook_logs').insert({
      event_id: event.id,
      event_type: event.type,
      status,
      raw_payload: event,
      details,
      created_at: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[webhook] Failed to log event:', err);
  }
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for raw body access
  },
};

// Get raw body for signature verification
async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let event;

  try {
    const rawBody = await getRawBody(req);
    const signature = req.headers['stripe-signature'];

    if (!webhookSecret) {
      console.error('[webhook] STRIPE_WEBHOOK_SECRET is not configured');
      return res.status(500).json({ error: 'Webhook secret not configured' });
    }

    // Verify webhook signature
    event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);

  } catch (err) {
    console.error('[webhook] Signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  console.log(`[webhook] Received event: ${event.type} (${event.id})`);

  try {
    switch (event.type) {
      // Checkout completed - initial purchase
      case 'checkout.session.completed': {
        const session = event.data.object;
        const email = session.customer_email;
        const metadata = session.metadata || {};
        
        if (session.mode === 'subscription') {
          // For subscriptions, get the subscription details
          const subscription = await stripe.subscriptions.retrieve(session.subscription);
          
          await updateUserSubscription(email, {
            subscriptionId: subscription.id,
            subscriptionType: metadata.subscriptionType || 'monthly',
            tier: metadata.tier || 'pro',
            status: subscription.status,
            currentPeriodEnd: subscription.current_period_end,
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          });
        } else {
          // One-time payment (lifetime)
          await updateUserSubscription(email, {
            subscriptionId: session.payment_intent,
            subscriptionType: metadata.subscriptionType || 'lifetime',
            tier: metadata.tier || 'premium',
            status: 'active',
          });
        }
        
        await logWebhookEvent(event, 'success', { email });
        break;
      }

      // Subscription created
      case 'customer.subscription.created': {
        const subscription = event.data.object;
        const customer = await stripe.customers.retrieve(subscription.customer);
        const email = customer.email;
        const metadata = subscription.metadata || {};

        await updateUserSubscription(email, {
          subscriptionId: subscription.id,
          subscriptionType: metadata.subscriptionType || 'monthly',
          tier: metadata.tier || 'pro',
          status: subscription.status,
          currentPeriodEnd: subscription.current_period_end,
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
        });

        await logWebhookEvent(event, 'success', { email });
        break;
      }

      // Subscription updated (renewal, plan change, etc.)
      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        const customer = await stripe.customers.retrieve(subscription.customer);
        const email = customer.email;
        const metadata = subscription.metadata || {};

        await updateUserSubscription(email, {
          subscriptionId: subscription.id,
          subscriptionType: metadata.subscriptionType || 'monthly',
          tier: metadata.tier || 'pro',
          status: subscription.status,
          currentPeriodEnd: subscription.current_period_end,
          cancelAtPeriodEnd: subscription.cancel_at_period_end,
        });

        await logWebhookEvent(event, 'success', { email, status: subscription.status });
        break;
      }

      // Subscription canceled
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        const customer = await stripe.customers.retrieve(subscription.customer);
        const email = customer.email;

        await handleSubscriptionCanceled(email, subscription.id);
        await logWebhookEvent(event, 'success', { email, action: 'canceled' });
        break;
      }

      // Invoice paid - renewal successful
      case 'invoice.paid': {
        const invoice = event.data.object;
        if (invoice.subscription) {
          const subscription = await stripe.subscriptions.retrieve(invoice.subscription);
          const customer = await stripe.customers.retrieve(invoice.customer);
          const email = customer.email;
          const metadata = subscription.metadata || {};

          await updateUserSubscription(email, {
            subscriptionId: subscription.id,
            subscriptionType: metadata.subscriptionType || 'monthly',
            tier: metadata.tier || 'pro',
            status: 'active',
            currentPeriodEnd: subscription.current_period_end,
            cancelAtPeriodEnd: subscription.cancel_at_period_end,
          });

          await logWebhookEvent(event, 'success', { email, action: 'renewed' });
        }
        break;
      }

      // Payment failed
      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        const customer = await stripe.customers.retrieve(invoice.customer);
        const email = customer.email;

        console.log(`[webhook] Payment failed for ${email}`);

        // Update subscription status
        await supabase
          .from('users')
          .update({
            subscription_status: 'past_due',
            updated_at: new Date().toISOString(),
          })
          .eq('email', email);

        await logWebhookEvent(event, 'success', { email, action: 'payment_failed' });
        break;
      }

      default:
        console.log(`[webhook] Unhandled event type: ${event.type}`);
        await logWebhookEvent(event, 'ignored');
    }

    return res.status(200).json({ received: true });

  } catch (error) {
    console.error(`[webhook] Error processing ${event.type}:`, error);
    await logWebhookEvent(event, 'error', { error: error.message });
    return res.status(500).json({ error: 'Webhook processing failed' });
  }
}
