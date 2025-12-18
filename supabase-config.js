// Configurazione Supabase per il frontend. Non pubblicare online chiavi riservate (usa SOLO la anon key).
// Puoi anche passare i valori via data-attribute sul tag <script src="supabase-config.js" data-supabase-url="...">.
(function bootstrapSupabaseConfig() {
  const scriptEl = document.currentScript;
  const fromDataset = {
    url: scriptEl?.dataset?.supabaseUrl,
    anon: scriptEl?.dataset?.supabaseAnonKey,
  };

  const fallbackUrl = "https://la-tua-instanza.supabase.co";
  const fallbackAnon = "la-tua-anon-key";

  window.__SUPABASE_URL__ = fromDataset.url || window.__SUPABASE_URL__ || fallbackUrl;
  window.__SUPABASE_ANON_KEY__ = fromDataset.anon || window.__SUPABASE_ANON_KEY__ || fallbackAnon;
})();
