# Prossimo incarico AI

AI consigliata: **Claude Code** o **GPT-4o** (capacità di coding estese per completare e distribuire l'infrastruttura).

Prompt da usare (incollare nella chat della AI):

"""
Sei uno sviluppatore full-stack. Completa e rendi operativo il progetto Music Producer Lab con questi obiettivi prioritari:

1) Rifinisci il front-end statico (login, signup, dashboard, pagine premium) mantenendo Supabase Auth funzionante.

2) Integra il controllo `has_paid`/tier nel front-end: utente guest -> redirect a login; utente free -> dashboard con banner upgrade; utente premium -> contenuti Pro.

3) Prepara il deploy statico su Vercel (output directory `.` senza build) con variabili pubbliche Supabase se necessarie.

4) Finalizza il backend Node/Express per webhook Stripe: ascolta `process.env.PORT`, endpoint POST `/api/stripe/webhook` che aggiorna `has_paid=true` su Supabase usando `SUPABASE_SERVICE_ROLE_KEY`; logga payload e gestisci eventi subscription.

5) Scrivi istruzioni di configurazione: env per Render/Railway (SUPABASE_URL, SERVICE_ROLE_KEY, STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET), URL webhook da impostare in Stripe Dashboard.

6) Aggiorna README/guide con passi di test end-to-end: signup/login, acquisto via Stripe Checkout, verifica `has_paid`, accesso premium.

7) Non esporre chiavi sensibili nel frontend; usa solo anon key lato client.

Consegna con file aggiornati e note di deploy/pronti all'uso.
"""

---

## Note Tecniche (Aggiornate 2025-12-24)

### Sistema di Pagamento: **Stripe**
Il progetto utilizza Stripe per i pagamenti (migrazione da Gumroad completata).

- **Stripe Checkout**: `/api/stripe/create-checkout-session.js`
- **Stripe Webhook**: `/api/stripe/webhook.js` e `/backend/routes/stripe-webhook.js`
- **Piani disponibili**: Monthly (€9.99/mese), Yearly (€79/anno)

### Webhook Events da configurare in Stripe:
- `checkout.session.completed`
- `customer.subscription.created`
- `customer.subscription.updated`
- `customer.subscription.deleted`
- `invoice.paid`
- `invoice.payment_failed`

### Environment Variables richieste:
```env
# Frontend (Vercel)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key

# Backend (Render/Railway)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
STRIPE_SECRET_KEY=sk_live_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
STRIPE_PRICE_MONTHLY=price_xxx
STRIPE_PRICE_YEARLY=price_xxx
```
