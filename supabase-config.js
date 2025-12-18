// Configurazione Supabase per il frontend. Non pubblicare online chiavi riservate (usa SOLO la anon key).
// Puoi anche passare i valori via data-attribute sul tag <script src="supabase-config.js" data-supabase-url="...">.
(function bootstrapSupabaseConfig() {
  const scriptEl = document.currentScript;
  const fromDataset = {
    url: scriptEl?.dataset?.supabaseUrl,
    anon: scriptEl?.dataset?.supabaseAnonKey,
  };

  const supabaseUrl = fromDataset.url || window.__SUPABASE_URL__;
  const supabaseAnon = fromDataset.anon || window.__SUPABASE_ANON_KEY__;

  if (!supabaseUrl || !supabaseAnon) {
    console.error("Supabase configuration missing. Please provide data-supabase-url and data-supabase-anon-key on the script tag.");
    return;
  }

  window.__SUPABASE_URL__ = supabaseUrl;
  window.__SUPABASE_ANON_KEY__ = supabaseAnon;
})();
