# Supabase + Gumroad setup for Music Producer Lab

This repository includes a minimal Supabase + Express backend to track paid unlocks after a Gumroad purchase. The pieces below map directly to the app requirements.

## Database schema
Run `supabase/schema.sql` in your Supabase project (SQL Editor → New query) to create the `users` table and policies:

- `public.users`: `id (uuid)`, `email (text, unique)`, `has_paid (boolean)`, `plan_tier (text)`, `purchase_id (text)`, timestamps.
- Trigger `handle_new_auth_user` mirrors new Supabase Auth users into the `users` table so the auth UID and profile stay in sync.
- Row Level Security: authenticated users can read/update only their own row. Service role key (used by the webhook) bypasses RLS.

## Backend service
A lightweight Express server under `backend/` exposes the Gumroad webhook endpoint.

1. Copy `backend/.env.example` to `backend/.env` and fill in values from your Supabase project and Gumroad webhook settings.
2. Install and start locally:

```bash
cd backend
npm install
npm run dev
```

3. Expose the server to Gumroad (e.g., `ngrok http 3001`) and register the webhook URL: `https://<your-ngrok-domain>/gumroad-webhook`.

### Endpoint: `/gumroad-webhook`
- Accepts `POST` form payloads with `email` and `purchase_id` (or `sale_id`).
- Requires `GUMROAD_SECRET`: used to validate the HMAC signature provided in the `X-Gumroad-Signature` header.
- Requires `GUMROAD_ACCESS_TOKEN`: used to call Gumroad `/v2/sales/{purchase_id}` and confirm the sale email/id pair.
- Creates or updates the user with `has_paid = true`, `plan_tier = 'premium'` (or `offer_name`/`product_name`) and
  `purchase_id`.

### Health check
`GET /api/health` returns a simple JSON object for uptime monitors.

## Frontend integration
The front-end uses `supabase-access.js` to sync browser sessions with Supabase and gate premium lessons. Provide your public keys as globals before other modules load:

```html
<script>
  window.__SUPABASE_URL__ = "https://your-project.supabase.co";
  window.__SUPABASE_ANON_KEY__ = "your-public-anon-key";
</script>
```

Then import `supabase-access.js` anywhere in the app (already wired into `lesson-template.js`). The helper will:

- Read the current Supabase Auth session.
- Fetch `has_paid` from `public.users` for that user.
- Persist the entitlement locally so existing lesson gating continues to work offline.

You can also call it manually:

```js
import { syncSupabasePremiumStatus, getSupabaseClient } from "./supabase-access.js";

const { session, isPremium } = await syncSupabasePremiumStatus();
if (!session) {
  // redirect to login page or show CTA
}
```
