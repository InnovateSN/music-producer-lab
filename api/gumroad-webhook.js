import { createClient } from '@supabase/supabase-js';
import crypto from 'crypto';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Verify Gumroad signature
    const signature = req.headers['x-gumroad-signature'];
    if (signature) {
      const hmac = crypto.createHmac('sha256', process.env.GUMROAD_WEBHOOK_SECRET);
      const body = JSON.stringify(req.body);
      const expectedSignature = hmac.update(body).digest('hex');
      
      if (signature !== expectedSignature) {
        return res.status(401).json({ error: 'Invalid signature' });
      }
    }

    // Log webhook to webhook_logs table
    await supabase.from('webhook_logs').insert({
      raw_payload: req.body,
      event_type: req.body?.sale ? 'sale' : 'ping',
      status: 'received'
    });

    // Handle ping
    if (!req.body.sale) {
      return res.status(200).json({ success: true, message: 'Ping received' });
    }

    // Process sale
    const { sale } = req.body;
    const email = sale.email;
    const purchaseId = sale.id;
    const price = sale.price;
    const paymentTimestamp = sale.created_at || sale.sale_timestamp || new Date().toISOString();

    // Determine subscription type from Gumroad metadata/variants
    const rawDuration =
      sale.subscription_duration ||
      sale.recurrence ||
      sale.variants?.[0] ||
      sale.product_name ||
      '';
    const normalized = String(rawDuration).toLowerCase();
    let subscriptionType = 'lifetime';
    if (normalized.includes('month')) subscriptionType = 'monthly';
    else if (normalized.includes('year') || normalized.includes('annual')) subscriptionType = 'yearly';
    else if (normalized.includes('life')) subscriptionType = 'lifetime';

    // Calculate access_until based on subscription type
    const now = new Date();
    const accessUntil = new Date(now);
    if (subscriptionType === 'monthly') {
      accessUntil.setDate(accessUntil.getDate() + 30);
    } else if (subscriptionType === 'yearly') {
      accessUntil.setFullYear(accessUntil.getFullYear() + 1);
    } else {
      // Lifetime or unknown → long-term access window
      accessUntil.setFullYear(accessUntil.getFullYear() + 100);
    }

    // Determine plan tier for backward compatibility with existing UI code
    let planTier = 'free';
    const priceNum = parseInt(price) / 100;
    if (priceNum >= 97 || subscriptionType === 'lifetime') planTier = 'premium';
    else if (priceNum >= 47) planTier = 'pro';
    else if (priceNum >= 27) planTier = 'basic';

    // Upsert user access info
    const { error } = await supabase
      .from('users')
      .upsert({
        email,
        has_paid: true,
        plan_tier: planTier,
        purchase_id: purchaseId,
        price: price,
        subscription_type: subscriptionType,
        access_until: accessUntil.toISOString(),
        payment_timestamp: paymentTimestamp,
        updated_at: new Date().toISOString()
      }, {
        onConflict: 'email'
      });

    if (error) {
      console.error('Supabase error:', error);
      await supabase.from('webhook_logs').insert({
        raw_payload: req.body,
        event_type: 'sale',
        status: 'error'
      });
      return res.status(500).json({ error: error.message });
    }

    // Update webhook log status
    await supabase.from('webhook_logs').insert({
      raw_payload: req.body,
      event_type: 'sale',
      status: 'success'
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({ error: error.message });
  }
}
