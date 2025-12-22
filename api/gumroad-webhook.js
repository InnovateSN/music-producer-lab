import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => resolve(data));
    req.on('error', (error) => reject(error));
  });
}

async function parseBody(req) {
  const rawBody = await readRawBody(req);
  const contentType = req.headers['content-type'] || '';

  if (!rawBody) {
    return {};
  }

  if (contentType.includes('application/x-www-form-urlencoded')) {
    return Object.fromEntries(new URLSearchParams(rawBody));
  }

  if (contentType.includes('application/json')) {
    return JSON.parse(rawBody);
  }

  return {};
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const parsedBody = await parseBody(req);

    console.log('🔥 Ricevuto da Gumroad:', parsedBody);

    const gumroadSecret = process.env.GUMROAD_SECRET;
    const providedSecret = parsedBody?.secret;

    if (gumroadSecret && providedSecret !== gumroadSecret) {
      return res.status(401).json({ error: 'Unauthorized: invalid secret' });
    }

    const purchaserEmail = parsedBody.purchaser_email || parsedBody.email;
    const purchaseId = parsedBody.purchase_id;
    const planTier = parsedBody.plan_tier || parsedBody.product_name;
    const price = parsedBody.price;
    const createdAt = parsedBody.created_at;

    const { error } = await supabase.from('users').insert([
      {
        email: purchaserEmail,
        has_paid: true,
        purchase_id: purchaseId,
        plan_tier: planTier,
        price,
        created_at: createdAt
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
