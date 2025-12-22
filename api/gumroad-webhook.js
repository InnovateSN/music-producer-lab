import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const gumroadSecret = process.env.GUMROAD_SECRET;
  const providedSecret = req.body?.secret;

  if (gumroadSecret && providedSecret !== gumroadSecret) {
    return res.status(401).json({ error: 'Unauthorized: invalid secret' });
  }

  try {
    const {
      purchaser_email,
      purchase_id,
      price,
      product_name,
      created_at
    } = req.body;

    const { error } = await supabase.from('users').insert([
      {
        email: purchaser_email,
        has_paid: true,
        purchase_id,
        plan_tier: product_name,
        created_at
      }
    ]);

    if (error) {
      console.error('Supabase insert error:', error);
      return res.status(500).json({ error: 'Supabase insert failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Webhook error:', err);
    return res.status(500).json({ error: 'Unexpected server error' });
  }
}
