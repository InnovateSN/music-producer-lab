---
name: deploy-check
description: Pre-deployment checklist for Vercel
allowed-tools: Read, Bash(vercel:*), Bash(git:*), Bash(npm:*), Glob, Grep
---

# Deploy Check Skill

Run this before deploying Music Producer Lab to Vercel, or when asked to verify
production readiness.

## Pre-Deployment Checklist

### 1. Build Verification

```bash
npm run build
```

Must complete without errors. Next.js builds:
- App Router pages (`/app/` directory, TypeScript)
- Static assets in `/public/` are served as-is (no build step)

### 2. TypeScript Check

Verify no type errors in:
- `/app/**/*.tsx`, `/app/**/*.ts` — App Router pages and API routes
- `/lib/**/*.ts` — Shared utilities (auth, db, security, email)
- `/components/**/*.tsx` — React components

Key files to watch:
- `lib/auth.ts` — NextAuth configuration
- `lib/db.ts` — Database connection
- `lib/security.ts` — CSRF validation
- `lib/email.ts` — Resend email service

### 3. Environment Variables

**Required for production:**
- [ ] `DATABASE_URL` — Neon PostgreSQL connection string
- [ ] `NEXTAUTH_SECRET` — Strong secret (auth WILL fail without it)
- [ ] `NEXTAUTH_URL` — Production URL: `https://music-producer-lab.vercel.app`

**Optional (degrade gracefully):**
- [ ] `RESEND_API_KEY` — Email features won't work without it
- [ ] `NEXT_PUBLIC_APP_URL` — Public-facing URL for client-side use

Check Vercel dashboard → Settings → Environment Variables to verify all are set.

### 4. Security Checks

- [ ] No `.env` or `.env.local` committed (verify `.gitignore`)
- [ ] No debug/test endpoints exposed in `/app/api/`
- [ ] CSRF validation active on all POST routes (`lib/security.ts` → `validateOrigin`)
- [ ] No hardcoded secrets, API keys, or tokens in source code
- [ ] `NEXTAUTH_SECRET` is set (no fallback in code)
- [ ] `poweredByHeader: false` in `next.config.js`
- [ ] Security headers configured (X-Frame-Options, X-Content-Type-Options, Referrer-Policy)

```bash
# Quick check for potential secrets
grep -r "sk_live\|sk_test\|password.*=.*['\"]" --include="*.ts" --include="*.js" --include="*.tsx" app/ lib/ public/
```

### 5. Static Content Integrity

- [ ] All lesson HTML files present in `/public/` (~180 files)
- [ ] All config JS files present in `/public/configs/` (~185 files)
- [ ] `styles.css` present and not empty
- [ ] Key JS modules present and valid:
  - `sequencer.js`
  - `lesson-engine.js`
  - `curriculum.js`
  - `navbar.js`
  - `piano-roll-sequencer.js`
  - `toast-notifications.js`
- [ ] Images directory populated (`/public/images/`)
- [ ] No broken lesson navigation links (check `nextLessonUrl` / `prevLessonUrl` in configs)

```bash
# Count lessons and configs
ls public/lesson-*.html | wc -l
ls public/configs/lesson-*.config.js | wc -l

# Check for broken nav links (basic)
grep -h "nextLessonUrl\|prevLessonUrl" public/configs/*.config.js | grep -oP '"[^"]+\.html"' | sort -u
```

### 6. API Endpoint Verification

Test each critical endpoint:

| Endpoint | Method | Expected |
|---|---|---|
| `/api/health` | GET | 200 OK |
| `/api/auth/session` | GET | 200 (null body if not logged in) |
| `/api/signup` | POST | 400 (missing fields) or 201 |
| `/api/auth/signin-custom` | POST | 401 (bad credentials) or 200 |
| `/api/admin/users` | GET | 401 (requires admin role) |

```bash
# Quick health check (run dev server first)
curl -s http://localhost:3000/api/health | head -20
```

### 7. Database Migration Check

Ensure schema is current:
- Main schema: `/database/schema.sql` (10 tables)
- Migrations applied:
  - `add-password-hash.sql`
  - `add-password-hint.sql`
  - `add-password-reset-tokens.sql`

```bash
# If fresh database
npm run db:setup

# If applying new migrations
npm run db:migrate
```

### 8. Vercel Configuration

File: `/vercel.json`
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

Verify this matches the current setup. Do NOT change unless there's a specific reason.

### 9. Quality Standards

- [ ] No emoji in HTML/JS (`QUALITY_CHECKLIST.md` rule)
- [ ] No SVG icons (use PNG from `/images/`)
- [ ] No `console.log` in production paths (only behind `isDev` flag)
- [ ] All lesson educational content is populated (not just template stubs)
- [ ] All glossary term links point to valid anchors

```bash
# Check for stray console.log in production code (excluding node_modules, .next)
grep -rn "console\.log" --include="*.ts" --include="*.tsx" app/ lib/ components/
```

### 10. Performance Checks

- [ ] `compress: true` in `next.config.js`
- [ ] Static HTML pages served directly (no SSR overhead)
- [ ] Neon DB uses serverless HTTP connections (lazy init in `db.ts`)
- [ ] No large unoptimized images in `/public/images/`
- [ ] CSS is a single file (`styles.css`) — no excessive network requests

### 11. Git Status

- [ ] All changes committed
- [ ] On correct branch (feature branch or main)
- [ ] No merge conflicts
- [ ] `.gitignore` is up to date

```bash
git status
git log --oneline -5
```

## Deployment

**Automatic (preferred):** Push to main branch → Vercel auto-deploys

**Manual:**
```bash
vercel --prod
```

## Post-Deploy Verification

1. Visit https://music-producer-lab.vercel.app
2. Check `/api/health` returns 200
3. Test login flow: `signin.html` → `/api/auth/signin-custom`
4. Open any lesson (e.g., `/lesson-drums-1.html`) and verify:
   - Page loads with config content
   - Sequencer renders correctly
   - Audio plays on click (user gesture)
   - Progress tracking works (check localStorage or API)
5. Check teacher dashboard at `/teacher` (requires teacher role)
6. Test on mobile device (touch sequencer interaction)
7. Test in Safari (AudioContext compatibility)
