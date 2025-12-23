# 🔧 Configurazione Environment Variables Vercel

## Step 1: Ottieni SUPABASE_ANON_KEY

1. Vai su: https://supabase.com/dashboard/project/nmhmrucvsrhfnajagdyy/settings/api
2. Cerca la sezione "Project API keys"
3. Copia il valore di `anon` `public` key
   - **NON usare** la `service_role` key (solo per backend!)
   - La anon key è sicura da usare in frontend

## Step 2: Configura su Vercel

1. Vai su: https://vercel.com/innovatesn/music-producer-lab/settings/environment-variables
2. Aggiungi queste 2 variabili:

### Variabile 1:
- **Key:** `SUPABASE_URL`
- **Value:** `https://nmhmrucvsrhfnajagdyy.supabase.co`
- **Environment:** ✅ Production, ✅ Preview, ✅ Development

### Variabile 2:
- **Key:** `SUPABASE_ANON_KEY`
- **Value:** `[la chiave copiata da Supabase]`
- **Environment:** ✅ Production, ✅ Preview, ✅ Development

3. Clicca "Save" per ogni variabile

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
