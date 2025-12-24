/**
 * Stripe Checkout Session Creator
 * Creates a Stripe Checkout session for subscription or one-time payments
 * 
 * Deploy: Vercel Serverless Function
 * Endpoint: POST /api/stripe/create-checkout-session
 */

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Plan configuration - maps plan types to Stripe price IDs
const PLAN_CONFIG = {
  monthly: {
    priceId: process.env.STRIPE_PRICE_MONTHLY,
    mode: 'subscription',
    subscriptionType: 'monthly',
    tier: 'pro',
  },
  yearly: {
    priceId: process.env.STRIPE_PRICE_YEARLY,
    mode: 'subscription',
    subscriptionType: 'yearly',
    tier: 'pro',
  },
  lifetime: {
    priceId: process.env.STRIPE_PRICE_LIFETIME,
    mode: 'payment',
    subscriptionType: 'lifetime',
    tier: 'premium',
  },
};

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { plan, email, userId, successUrl, cancelUrl } = req.body;

    // Validate required fields
    if (!plan || !email) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        details: 'plan and email are required'
      });
    }

    // Get plan configuration
    const planConfig = PLAN_CONFIG[plan];
    if (!planConfig) {
      return res.status(400).json({ 
        error: 'Invalid plan',
        details: `Plan "${plan}" is not supported. Valid plans: monthly, yearly, lifetime`
      });
    }

    if (!planConfig.priceId) {
      return res.status(500).json({ 
        error: 'Plan not configured',
        details: `Stripe price ID for "${plan}" is not configured`
      });
    }

    // Create checkout session parameters
    const sessionParams = {
      payment_method_types: ['card'],
      line_items: [
        {
          price: planConfig.priceId,
          quantity: 1,
        },
      ],
      mode: planConfig.mode,
      success_url: successUrl || `${process.env.FRONTEND_URL || 'http://localhost:3000'}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${process.env.FRONTEND_URL || 'http://localhost:3000'}/checkout.html?canceled=true`,
      customer_email: email,
      metadata: {
        userId: userId || '',
        plan,
        subscriptionType: planConfig.subscriptionType,
        tier: planConfig.tier,
      },
      // For subscriptions, allow promotion codes
      ...(planConfig.mode === 'subscription' && {
        allow_promotion_codes: true,
        subscription_data: {
          metadata: {
            userId: userId || '',
            plan,
            subscriptionType: planConfig.subscriptionType,
            tier: planConfig.tier,
          },
        },
      }),
      // For one-time payments
      ...(planConfig.mode === 'payment' && {
        payment_intent_data: {
          metadata: {
            userId: userId || '',
            plan,
            subscriptionType: planConfig.subscriptionType,
            tier: planConfig.tier,
          },
        },
      }),
    };

    // Create the session
    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log(`[stripe] Created checkout session ${session.id} for ${email} (${plan})`);

    return res.status(200).json({
      sessionId: session.id,
      url: session.url,
    });

  } catch (error) {
    console.error('[stripe] Checkout session error:', error);
    
    if (error.type === 'StripeInvalidRequestError') {
      return res.status(400).json({ 
        error: 'Invalid request',
        details: error.message
      });
    }

    return res.status(500).json({ 
      error: 'Failed to create checkout session',
      details: error.message
    });
  }
}
