# Music Producer Lab

Interactive music production education platform. Learn to produce music through hands-on practice, not videos or theory.

**Live Site:** https://music-producer-lab.vercel.app

---

## Tech Stack

- **Framework:** Next.js 15 (App Router) + static HTML pages
- **Frontend:** Vanilla JavaScript (ES6 modules), HTML5, CSS3
- **Audio:** Web Audio API (synthesized drum sounds)
- **Database:** Neon PostgreSQL (serverless) + Prisma Client
- **Authentication:** NextAuth.js with custom credentials provider
- **Password Hashing:** bcryptjs (12 rounds)
- **Email:** Resend (optional, for notifications)
- **Deployment:** Vercel

---

## Project Status (Updated: February 2026)

### Educational Content Inventory: 174 Lessons

| Category | Lessons | Delivery Status |
|----------|---------|------------------|
| **Drums & Rhythm** | 23 (0-22) | Published |
| **Harmony & Melody** | 28 (1-28) | Published |
| **Bass & Low End** | 20 (1-20) | Published |
| **Arrangement & Songwriting** | 20 (1-20) | Published |
| **Mixing** | 20 (1-20) | Published |
| **Mastering** | 10 (1-10) | Published |
| **Sound Design** | 20 (1-20) | Published |
| **Ear Training** | 10 (1-10) | Published |
| **Music Theory** | 8 (1-8) | Published |
| **Vocals & Production** | 15 (1-15) | Published |

**Total: 174 lesson pages**

### Current Improvement Focus

The current focus is no longer page-count completion, but **didactic quality hardening**:

- Source traceability against AES, Ableton and Wikipedia.
- Explicit review metadata in lesson configs.
- Measurable learning outcomes through assessment rubrics.
- Repeatable quality checks before merge (`npm run content:crosscheck`).

### Recent Updates (February 2026)

- **Authentication:** Migrated from Clerk to NextAuth.js with custom credentials.
- **Security Audit:** Fixed critical vulnerabilities (JWT secrets, debug endpoints, account enumeration).
- **QA Audit:** Fixed missing assets, footers, and broken links across static pages.
- **Didactic Audit (in progress):** Introduced lesson-level review metadata and source references across the audited priority set.

---

## MVP Scope (Official, current)

This is the source of truth for what is in-scope right now:

1. Keep the current **Next.js app** as the primary platform (no WordPress migration).
2. Deliver a clear learner path: **Home -> Pricing -> Contact/Sign up**.
3. Keep contact and support simple (existing form/email flow).
4. Complete high-priority lesson content that is still template-only.
5. Run `npm run build` before merge and verify Vercel Preview is green.

Everything else (advanced chatbot automations, community add-ons, extra integrations) stays in phase-2 backlog until these items are consistently stable.

## Next Step Execution Order

- **Step 1:** Unify pricing/trial copy across all public pages.
- **Step 2:** Make onboarding CTA path explicit on homepage and pricing page.
- **Step 3:** Fill the top-priority lesson templates (content quality pass).
- **Step 4:** Add a recurring pre-merge checklist to PR workflow.

See also: `docs/workflow/NEXT_STEP_PLAN.md`.

---

## Project Structure

```
/music-producer-lab/
├── app/                        # Next.js App Router
│   └── api/                    # API Routes
│       ├── auth/               # Authentication endpoints
│       │   ├── signin-custom/  # Custom login
│       │   ├── session/        # Session check
│       │   ├── signout/        # Logout
│       │   ├── get-hint/       # Password hint
│       │   └── reset-password/ # Password reset
│       ├── signup/             # User registration
│       ├── admin/users/        # Admin panel API
│       └── health/             # Health check
│
├── lib/                        # Shared utilities
│   ├── db.ts                   # Database connection (Neon)
│   ├── auth.ts                 # Auth helpers
│   ├── security.ts             # CSRF validation
│   └── email.ts                # Email service (Resend)
│
├── public/                     # Static files (207 HTML pages)
│   ├── index.html              # Landing page
│   ├── labs.html               # Lessons dashboard
│   ├── signin.html             # Login page
│   ├── signup.html             # Registration page
│   ├── admin/users.html        # Admin panel
│   ├── lesson-*.html           # 174 lesson pages
│   ├── configs/                # Lesson configurations
│   ├── js/                     # Auth integration scripts
│   └── styles.css              # Design system
│
├── database/                   # SQL migrations
│   ├── schema.sql              # Main schema
│   └── *.sql                   # Migration files
│
└── docs/                       # Documentation
```

---

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database (or Neon account)

### Setup

```bash
# Install dependencies
npm install

# Configure environment
cp .env.example .env.local
# Edit .env.local with your database URL and secrets

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

### Environment Variables

```env
# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://...

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# Email (optional)
RESEND_API_KEY=re_...
```

---

## Authentication

The platform uses a custom NextAuth.js setup with credentials provider:

- **Registration:** Email, password, name, optional password hint
- **Login:** Email + password, JWT session stored in cookie
- **Password Recovery:** Password hint system (no email required)
- **Admin Panel:** Role-based access (admin/super_admin)

---

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/signup` | POST | Register new user |
| `/api/auth/signin-custom` | POST | Login |
| `/api/auth/session` | GET | Check session |
| `/api/auth/signout` | POST | Logout |
| `/api/auth/get-hint` | POST | Get password hint |
| `/api/admin/users` | GET | List users (admin only) |
| `/api/health` | GET | Health check |

---

## Security

- CSRF protection on all auth endpoints
- Password hashing with bcrypt (12 rounds)
- JWT tokens with required secret (no fallback)
- No sensitive data in logs
- Account enumeration prevention

---

## Content Quality Gates

Run these checks before merge:

```bash
npm run content:crosscheck
npm run content:crosscheck:strict
```

- `content:crosscheck` prints warnings and writes `docs/qa/content-source-crosscheck-report.json`.
- `content:crosscheck:strict` fails the build when structural quality issues are found.

---

## License

All rights reserved.
