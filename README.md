# Music Producer Lab

Web application for music production courses with **Stripe** payment integration and **Supabase** authentication.

## Overview

- **Frontend**: Static HTML/CSS/JS (deployable on Vercel)
- **Backend**: Express server for Stripe webhooks (deployable on Render/Railway)
- **Auth**: Supabase Magic Link authentication
- **Payments**: Stripe Checkout for subscriptions and one-time purchases
- **Database**: Supabase PostgreSQL

## Quick Setup

### 1. Supabase Configuration

1. Create a project at [supabase.com](https://supabase.com)
2. Run the schema SQL in `supabase/schema.sql` via the SQL Editor
3. Get your project URL and anon key from Project Settings → API

### 2. Stripe Configuration

1. Create an account at [stripe.com](https://stripe.com)
2. Create a Product with three Prices:
   - **Monthly**: €9.99/month recurring
   - **Yearly**: €79/year recurring
   - **Lifetime**: €197 one-time
3. Copy the Price IDs for each plan
4. Get your API keys from Developers → API Keys
5. Set up webhook endpoint: `https://your-backend/api/stripe/webhook`
6. Enable these webhook events:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.paid`
   - `invoice.payment_failed`

### 3. Frontend Setup (Vercel)

Add these environment variables:

```
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key
```

In HTML files, configure via data attributes:

```html
<script
  src="./supabase-config.js"
  data-supabase-url="${SUPABASE_URL}"
  data-supabase-anon-key="${SUPABASE_ANON_KEY}"
></script>
```

### 4. Backend Setup (Render/Railway)

```bash
cd backend
cp .env.example .env
# Edit .env with your credentials
npm install
npm run dev
```

Required environment variables:

```env
# Supabase
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Stripe
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_MONTHLY=price_xxx
STRIPE_PRICE_YEARLY=price_xxx
STRIPE_PRICE_LIFETIME=price_xxx

# Server
FRONTEND_URL=https://your-frontend.com
PORT=3001
```

## API Endpoints

### Backend (Express)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check |
| `/api/config` | GET | Configuration status |
| `/api/stripe/webhook` | POST | Stripe webhook handler |

### Vercel Serverless Functions

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/stripe/create-checkout-session` | POST | Create Stripe Checkout session |
| `/api/stripe/webhook` | POST | Stripe webhook (alternative) |

## Frontend Flow

1. **User visits** `/checkout.html`
2. **User selects plan** (monthly, yearly, lifetime)
3. **Redirected to Stripe Checkout**
4. **After payment**: Stripe sends webhook → backend updates `users` table
5. **User redirected** to `/success.html`
6. **Frontend checks** `syncSupabasePremiumStatus()` → updates UI

## Database Schema

### `users` table

| Column | Type | Description |
|--------|------|-------------|
| `id` | uuid | Primary key |
| `email` | text | User email (unique) |
| `has_paid` | boolean | Has active subscription |
| `plan_tier` | text | 'free', 'pro', 'premium' |
| `subscription_type` | text | 'monthly', 'yearly', 'lifetime' |
| `subscription_status` | text | 'active', 'past_due', 'canceled' |
| `stripe_customer_id` | text | Stripe customer ID |
| `subscription_id` | text | Stripe subscription/payment ID |
| `access_until` | timestamptz | When access expires |
| `cancel_at_period_end` | boolean | Pending cancellation |

## Testing

### Run Unit Tests

```bash
npm install
npm test
```

### Test Stripe Webhook Locally

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3001/api/stripe/webhook

# Trigger test events
stripe trigger checkout.session.completed
stripe trigger customer.subscription.created
stripe trigger invoice.paid
```

### Test Checkout Flow

1. Start backend: `cd backend && npm run dev`
2. Open `checkout.html` in browser
3. Login with Supabase Magic Link
4. Select a plan and complete Stripe test checkout
5. Use test card: `4242 4242 4242 4242`

## File Structure

```
├── api/
│   └── stripe/
│       ├── create-checkout-session.js  # Vercel serverless
│       └── webhook.js                   # Vercel serverless
├── backend/
│   ├── routes/
│   │   └── stripe-webhook.js           # Express webhook handler
│   ├── server.js                       # Express server
│   ├── supabaseClient.js               # Supabase client
│   └── .env.example
├── supabase/
│   └── schema.sql                      # Database schema
├── __tests__/
│   ├── stripe-webhook.test.js
│   └── supabase-login-guard.test.js
├── checkout.html                       # Checkout page
├── success.html                        # Payment success page
├── premium.html                        # Premium content area
├── supabase-access.js                  # Frontend Supabase utils
├── supabase-login-guard.js             # Premium access guard
└── lesson-access.js                    # Lesson access control
```

## Subscription Tiers

| Tier | Access | Duration |
|------|--------|----------|
| `free` | Basic lessons (1-5) | Forever |
| `pro` | All lessons | Monthly/Yearly |
| `premium` | All lessons + VIP | Lifetime |

## Deployment

### Frontend (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Backend (Render)

1. Connect GitHub repo
2. Set build command: `cd backend && npm install`
3. Set start command: `cd backend && npm start`
4. Add environment variables

## Troubleshooting

### Webhook Not Receiving Events

1. Check webhook URL is correct in Stripe Dashboard
2. Verify `STRIPE_WEBHOOK_SECRET` is set correctly
3. Check webhook logs in Stripe Dashboard

### User Not Getting Premium Access

1. Check `users` table in Supabase
2. Verify `has_paid=true` and `access_until` is future date
3. Check `webhook_logs` table for errors

### Checkout Failing

1. Check browser console for errors
2. Verify Stripe keys are correct
3. Check that Price IDs match your Stripe products

## Migration from Gumroad

If upgrading from the previous Gumroad integration:

1. Run the schema migration (ADD COLUMN statements in `schema.sql`)
2. Update environment variables
3. Remove old Gumroad webhook endpoints
4. Update frontend to use new checkout page

## License

MIT
