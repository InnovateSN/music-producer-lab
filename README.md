# Music Producer Lab

Interactive music production education platform. Learn to produce music through hands-on practice, not videos or theory.

**Live Site:** https://music-producer-lab.vercel.app

---

## Tech Stack

- **Framework:** Next.js 14 (App Router) + Static HTML pages
- **Frontend:** Vanilla JavaScript (ES6 modules), HTML5, CSS3
- **Audio:** Web Audio API (synthesized drum sounds)
- **Database:** Neon PostgreSQL (serverless)
- **Authentication:** NextAuth.js with custom credentials provider
- **Password Hashing:** bcryptjs (12 rounds)
- **Email:** Resend (optional, for notifications)
- **Deployment:** Vercel

---

## Project Status (Updated: February 2026)

### Educational Content: 174 Lessons

| Category | Lessons | Status |
|----------|---------|--------|
| **Drums & Rhythm** | 23 (0-22) | Created |
| **Harmony & Melody** | 28 (1-28) | Created |
| **Bass & Low End** | 20 (1-20) | Created |
| **Arrangement & Songwriting** | 20 (1-20) | Created |
| **Mixing** | 20 (1-20) | Created |
| **Mastering** | 10 (1-10) | Created |
| **Sound Design** | 20 (1-20) | Created |
| **Ear Training** | 10 (1-10) | Created |
| **Music Theory** | 8 (1-8) | Created |
| **Vocals & Production** | 15 (1-15) | Created |

**Total: 174 lesson pages** | **Content: Needs completion**

### Recent Updates (February 2026)

- **Authentication:** Migrated from Clerk to NextAuth.js with custom credentials
- **Security Audit:** Fixed critical vulnerabilities (JWT secrets, debug endpoints, account enumeration)
- **QA Audit:** Fixed missing assets, footers, and broken links across 207 pages

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

## License

All rights reserved.
