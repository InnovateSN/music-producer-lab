# Music Producer Lab

Percorso statico con Supabase Auth e backend Express per attivare il flag `has_paid` dopo un acquisto Gumroad. Il frontend è
distribuibile come sito statico (es. Vercel) mentre il webhook gira su Node/Express.

## Configurazione rapida

1. **Supabase (frontend)**: apri `supabase-config.js` e imposta `window.__SUPABASE_URL__` e `window.__SUPABASE_ANON_KEY__` con i
   valori pubblici del tuo progetto (puoi anche passarli come data-attribute sullo script). Non usare la service role nel
   frontend.
2. **Backend**: copia `backend/.env.example` in `backend/.env` e popola `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` e
   facoltativamente `GUMROAD_SECRET`.
3. **Schema**: esegui `supabase/schema.sql` nel pannello SQL di Supabase.
4. **Avvio locale**:

   ```bash
   cd backend
   npm install
   npm run dev
   ```

## Deploy statico su Vercel

- Output directory: `.` (nessuna build necessaria).
- Aggiungi due environment variables **publiche** nel progetto Vercel (Project Settings → Environment Variables):
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
- Nel `head` delle pagine è già incluso `supabase-config.js`. Puoi anche passare le variabili tramite data-attribute:

  ```html
  <script src="/supabase-config.js" data-supabase-url="${SUPABASE_URL}" data-supabase-anon-key="${SUPABASE_ANON_KEY}"></script>
  ```

## Backend Gumroad (Render/Railway/altro)

Variabili richieste:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (service role key per bypassare RLS nel webhook)
- `GUMROAD_SECRET` (obbligatorio, usato per firmare e verificare il webhook Gumroad)
- `GUMROAD_ACCESS_TOKEN` (token API Gumroad per validare l'acquisto via `/v2/sales`)
- `PORT` (facoltativo, default 3001)

Endpoint da registrare in Gumroad: `https://<tuo-dominio>/gumroad-webhook`.

### Deploy sicuro suggerito

- **Frontend**: Vercel, configurando `SUPABASE_URL` e `SUPABASE_ANON_KEY` come environment variables e valorizzando i data-attribute
  `data-supabase-url` e `data-supabase-anon-key` sul tag di inclusione di `supabase-config.js`.
- **Backend**: Render o Railway, con le variabili `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `GUMROAD_SECRET` e
  `GUMROAD_ACCESS_TOKEN` impostate a livello di servizio.

## Flussi front-end

- **Login/Signup**: pagine statiche con Supabase Auth; in caso di mancanza di configurazione viene mostrato un errore lato
  client.
- **Dashboard**: reindirizza gli ospiti al login. Mostra un banner di upgrade per utenti free e sblocca i blocchi Pro se
  `has_paid=true`/tier Premium.
- **Pagine premium**: i componenti premium sono marcati con `data-mpl-premium`/`data-mpl-premium-block` e vengono bloccati se
  l'utente è free.

## Test end-to-end suggeriti

1. **Signup/Login**: crea un account dalla pagina `/signup.html`, quindi accedi da `/login.html` e verifica il redirect alla
   dashboard.
2. **Acquisto Gumroad**: simula o completa un checkout collegato al webhook e controlla i log del backend
   (`/gumroad-webhook`).
3. **Verifica `has_paid`**: su Supabase, controlla la tabella `public.users` e verifica `has_paid=true`, `plan_tier` e
   `purchase_id` dopo il webhook.
4. **Accesso premium**: ricarica la dashboard; i blocchi Pro non devono essere più bloccati e le lezioni premium devono
   risultare accessibili.

