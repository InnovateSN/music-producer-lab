# Prossimo incarico AI

AI consigliata: **GPT-5.1-Codex-Max** (capacità di coding estese per completare e distribuire l'infrastruttura).

Prompt da usare (incollare nella chat della AI):

"""
Sei uno sviluppatore full-stack. Completa e rendi operativo il progetto Music Producer Lab con questi obiettivi prioritari:
1) Rifinisci il front-end statico (login, signup, dashboard, pagine premium) mantenendo Supabase Auth funzionante.
2) Integra il controllo `has_paid`/tier nel front-end: utente guest -> redirect a login; utente free -> dashboard con banner upgrade; utente premium -> contenuti Pro.
3) Prepara il deploy statico su Vercel (output directory `.` senza build) con variabili pubbliche Supabase se necessarie.
4) Finalizza il backend Node/Express per webhook Gumroad: ascolta `process.env.PORT`, endpoint POST `/gumroad-webhook` che aggiorna `has_paid=true` su Supabase usando `SUPABASE_SERVICE_ROLE_KEY`; logga payload e gestisci test ping senza modifiche.
5) Scrivi istruzioni di configurazione: env per Render/Railway (SUPABASE_URL, SERVICE_ROLE_KEY, eventuale GUMROAD_SECRET), URL webhook da impostare in Gumroad.
6) Aggiorna README/guide con passi di test end-to-end: signup/login, acquisto Gumroad, verifica `has_paid`, accesso premium.
7) Non esporre chiavi sensibili nel frontend; usa solo anon key lato client.
Consegna con file aggiornati e note di deploy/pronti all'uso.
"""
