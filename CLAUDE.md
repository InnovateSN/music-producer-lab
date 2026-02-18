# Music Producer Lab (MPL)

## Project Overview
Music Producer Lab è una piattaforma educativa interattiva per music production.
Il concetto è "Learn by Doing" — labs interattivi nel browser invece di video passivi.
174 lezioni across 10 categorie, con drum sequencer, piano roll, e mixing tools.
Evoluzione v2.0 del precedente progetto Beat Expert Lab (ora legacy).

## Tech Stack
- **Framework:** Next.js 16.1.1 (App Router) — API routes, auth, teacher dashboard
- **Frontend (Lessons):** Vanilla JavaScript ES6 modules — 180+ HTML pages in `/public/`
- **Frontend (Dashboard):** React 19.2.3 + TypeScript — teacher panel under `/app/teacher/`
- **Audio:** Web Audio API (synthesized drum sounds, no external audio libs)
- **Database:** Neon PostgreSQL (serverless) via `@neondatabase/serverless`
- **Auth:** NextAuth.js 4.24.13 (custom CredentialsProvider, JWT sessions)
- **Email:** Resend (welcome emails, password reset)
- **Deployment:** Vercel (auto-deploy da GitHub)
- **Language:** TypeScript (`app/`, `lib/`) + JavaScript (`public/`)
- **Domain:** music-producer-lab.vercel.app

## Architecture
Hybrid: Next.js App Router serves `/app/` paths (React/TSX), while static HTML pages in
`/public/` are served directly by Vercel. Lessons are self-contained HTML + config files
that load via ES6 module imports and use `lesson-engine.js` + `sequencer.js` at runtime.

## Project Structure
```
/app/                   → Next.js App Router
  /api/                 → API routes (auth, signup, admin, progress, schools, teacher, health)
  /teacher/             → Teacher dashboard (React TSX pages)
  layout.tsx            → Root layout
  page.tsx              → Root page (redirects to /index.html)
  providers.tsx         → Client providers
/lib/                   → Shared TypeScript utilities
  auth.ts               → NextAuth config (CredentialsProvider)
  db.ts                 → Neon PostgreSQL connection (lazy serverless init)
  clerk.ts              → NextAuth session helper (legacy name from Clerk migration)
  email.ts              → Resend email service
  security.ts           → CSRF validation, origin checking
/public/                → Static assets served by Vercel
  index.html            → Landing page
  labs.html             → Lessons dashboard/overview
  signin.html           → Login page
  signup.html           → Registration page
  lesson-*.html         → 180 lesson HTML pages
  /configs/             → 185 lesson config JS files (lesson-{category}-{n}.config.js)
  /js/                  → Client-side utility scripts
  /images/              → Image assets (PNG only, no SVG)
  /samples/             → Audio samples (drums, loops)
  sequencer.js          → Drum step sequencer (Web Audio API)
  piano-roll-sequencer.js → Piano roll sequencer
  harmony-playground-engine.js → Harmony playground
  lesson-engine.js      → Initializes lessons from config
  curriculum.js         → Curriculum registry (all lessons)
  navbar.js             → Navigation component
  styles.css            → Main stylesheet
/components/            → React components (SignOutButton.tsx)
/database/              → SQL schema and migrations
  schema.sql            → Main schema (10 tables)
  execute-schema.js     → Schema runner
  execute-migration.js  → Migration runner
/docs/                  → Technical docs, specs, QA docs
/scripts/               → Generation scripts
/tests/                 → Smoke tests
/sales/                 → Sales materials, email templates
```

## Lesson System
Each lesson consists of TWO files:
1. **HTML page:** `/public/lesson-{category}-{number}.html`
2. **Config file:** `/public/configs/lesson-{category}-{number}.config.js`

**How it works:**
- Config exports `lessonConfig` with metadata, sequencer settings, instruments, validation, theory
- HTML page imports config + `lesson-engine.js` via ES6 module `<script type="module">`
- `lesson-engine.js` populates the page from config, sets up the sequencer
- `sequencer.js` handles Web Audio playback, step scheduling, pattern validation

**10 Categories:** drums, harmony, bass, arrangement, mixing, mastering, sound-design, ear, theory, vocals

**Config structure (key fields):**
- `lessonKey` — progress storage key (format: `mpl-lesson{n}-progress`)
- `sequencer: { tempo, stepCount, swing }`
- `instruments[]: { id, label, color, targetSteps, instructionText }`
- `validation: { type, requiredInstruments[], requiredTempo }`
- `theory: { sections[]: { title, content } }`
- `mode: { sandbox, showTargetHint, enablePresets, enableExport, sequencerType }`
- Available sound IDs: `kick`, `snare`, `hihat`, `clap`, `tom`, `rim`

## Development Commands
```bash
npm run dev           # Start Next.js dev server (localhost:3000)
npm run build         # Production build (next build)
npm run start         # Start production server
npm run lint          # ESLint
npm run db:setup      # Execute database schema (fresh)
npm run db:migrate    # Execute migrations
```

## Environment Variables
```
DATABASE_URL          # Neon PostgreSQL connection string (required)
NEXTAUTH_SECRET       # JWT secret for NextAuth (required, no fallback)
NEXTAUTH_URL          # App URL (http://localhost:3000 in dev)
RESEND_API_KEY        # Email service (optional, degrades gracefully)
NEXT_PUBLIC_APP_URL   # Public-facing URL
```

## Auth System
- **Provider:** NextAuth.js with CredentialsProvider (custom email/password)
- **Roles:** student, teacher, school_admin, super_admin
- **Password:** bcryptjs (12 rounds)
- **Sessions:** JWT-based
- **Note:** `lib/clerk.ts` is the NextAuth session helper — legacy naming from Clerk migration
- Static HTML pages check auth via `/api/auth/session` endpoint client-side
- Teacher dashboard at `/app/teacher/` uses server-side role checking

## Database (Neon PostgreSQL)
10 tables: `schools`, `users`, `classes`, `class_enrollments`, `lesson_progress`,
`saved_patterns`, `certificates`, `analytics_events`, `invoices`, `support_tickets`

Schema uses UUID primary keys, Row Level Security concepts, and multi-tenant architecture.
`users.clerk_id` column is legacy naming — actually stores the internal user ID.

## Coding Conventions
- **NO emoji** in HTML/JS — use PNG images from `/public/images/`
- **NO SVG icons** — use PNG assets
- **All technical terms** must link to `glossary.html#{term-id}`
- English for code, variable names, function names
- Italian comments are acceptable (bilingual codebase)
- camelCase for JS variables/functions
- kebab-case for CSS classes
- Steps in configs are 0-indexed; displayed to users as 1-indexed
- Commenti in inglese preferiti, UI bilingue (EN/IT dove serve)
- Follow `QUALITY_CHECKLIST.md` for all page changes

## Security
- CSRF validation on all POST endpoints (`lib/security.ts` → `validateOrigin`)
- Security headers: X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict
- `poweredByHeader: false` in next.config.js
- `compress: true` for response compression
- bcrypt 12 rounds for passwords
- NEXTAUTH_SECRET required (auth fails without it)

## Deployment
- **Platform:** Vercel (framework: nextjs)
- **Build:** `npm run build` → output: `.next/`
- **Auto-deploy:** From GitHub pushes
- **Manual:** `vercel --prod`
- **Git workflow:** Feature branches → main → auto-deploy

## Business Model
- **Free tier:** Accesso limitato a labs base
- **Pro:** Paid subscription — tutti i labs + export (pricing TBD)
- **Schools:** Volume pricing — B2B, COPPA/GDPR compliant
- **Payment:** Stripe integration (da implementare — non ancora presente nel codebase)
- **Owner:** Project founder — Ableton Certified Trainer, insegnante ICMP (London)

## Current Priorities
1. Completare contenuti educativi per ~150 lezioni che sono ancora template senza contenuto
2. Implementare integrazione Stripe/payments per content gating (Free vs Pro)
3. Ottimizzare Web Audio performance e cross-browser compatibility (soprattutto Safari)
4. Testing sistematico su tutti i labs (vedi `QUALITY_CHECKLIST.md`)
5. Mobile/touch experience per i sequencer interattivi

## Key Documentation
- `QUALITY_CHECKLIST.md` — Mandatory checklist per ogni pagina (9 sezioni)
- `docs/specs/AUDIO_ENGINE.md` — Audio engine specification
- `docs/specs/PROGRESS_SAVING.md` — Progress tracking spec
- `docs/qa/DEFINITION_OF_DONE.md` — Definition of done
- `docs/qa/TEST_MATRIX.md` — Test matrix
- `ISSUES.md` — Known issues tracker

## Context for AI
- Il progetto deve funzionare anche su hardware modesto degli studenti
- Audio latency è critica — ottimizzare buffer sizes
- Il precedente BEL usava Hono + Cloudflare D1 + Stripe — migrazione a Next.js + Neon completata
- Target: sia individual learners che istituzioni educative (scuole, università)
- La maggior parte delle lezioni ha la struttura HTML ma manca di contenuto educativo vero
- `sequencer.js` è il file più critico per l'audio — trattare con cura
