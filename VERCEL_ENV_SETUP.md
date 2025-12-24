# 🔧 Configurazione Environment Variables Vercel

## Variabili Richieste

### Supabase (Frontend)
| Variabile | Valore | Descrizione |
|-----------|--------|-------------|
| `SUPABASE_URL` | `https://nmhmrucvsrhfnajagdyy.supabase.co` | URL progetto Supabase |
| `SUPABASE_ANON_KEY` | `[da Supabase Dashboard]` | Chiave pubblica anon |

### Supabase (Backend/Serverless)
| Variabile | Valore | Descrizione |
|-----------|--------|-------------|
| `SUPABASE_SERVICE_ROLE_KEY` | `[da Supabase Dashboard]` | Chiave service role (⚠️ segreta!) |

### Stripe (Pagamenti)
| Variabile | Valore | Descrizione |
|-----------|--------|-------------|
| `STRIPE_SECRET_KEY` | `sk_test_xxx` o `sk_live_xxx` | Chiave segreta Stripe |
| `STRIPE_WEBHOOK_SECRET` | `whsec_xxx` | Secret per webhook |
| `STRIPE_PRICE_MONTHLY` | `price_xxx` | Price ID piano mensile |
| `STRIPE_PRICE_YEARLY` | `price_xxx` | Price ID piano annuale |

### Altro
| Variabile | Valore | Descrizione |
|-----------|--------|-------------|
| `FRONTEND_URL` | `https://music-producer-lab.vercel.app` | URL frontend |

---

## Step 1: Ottieni le chiavi Supabase

1. Vai su: https://supabase.com/dashboard/project/nmhmrucvsrhfnajagdyy/settings/api
2. Cerca la sezione "Project API keys"
3. Copia:
   - `anon` `public` key → per frontend
   - `service_role` key → per backend (⚠️ mai esporre!)

## Step 2: Ottieni le chiavi Stripe

1. Vai su: https://dashboard.stripe.com/test/apikeys (test) o /live/apikeys (produzione)
2. Copia `Secret key`
3. Per webhook secret:
   - Vai su https://dashboard.stripe.com/webhooks
   - Crea endpoint: `https://music-producer-lab.vercel.app/api/stripe/webhook`
   - Copia il `Signing secret`
4. Per Price IDs:
   - Vai su https://dashboard.stripe.com/products
   - Crea prodotto con prezzi Monthly e Yearly
   - Copia i `Price ID` (iniziano con `price_`)

## Step 3: Configura su Vercel

1. Vai su: https://vercel.com/innovatesn/music-producer-lab/settings/environment-variables
2. Aggiungi tutte le variabili elencate sopra
3. Per ogni variabile seleziona: ✅ Production, ✅ Preview, ✅ Development
4. Clicca "Save" per ogni variabile

## Step 3: Redeploy

Dopo aver salvato le variabili:
- Vercel automaticamente triggera un rebuild
- **OPPURE** vai su Deployments → Latest → "Redeploy"

## Verifica

Dopo il deploy, verifica che:
1. Login su https://music-producer-lab.vercel.app/login.html funzioni
2. Non ci siano errori console tipo "Supabase configuration missing"

## Note Importanti

⚠️ **NON committare mai la ANON_KEY nel codice sorgente!**
- Le env vars di Vercel sono sicure e crittografate
- Usare solo variabili d'ambiente per valori sensibili

✅ La ANON_KEY è sicura da usare in frontend perché:
- Le RLS policies di Supabase limitano l'accesso
- È progettata per essere pubblica
- Non espone dati sensibili

## File HTML da NON modificare

Anche se nei file HTML (`login.html`, `signup.html`, ecc.) non ci sono data-attributes,
Vercel può iniettare le variabili usando un build script.

Se dopo il deploy continua a non funzionare, dovremo:
1. Creare uno script `inject-env.js` 
2. Configurare Vercel Build Command: `node inject-env.js`
3. Includere `public-env.js` negli HTML

Ma proviamo prima con solo le env vars configurate su Vercel.
