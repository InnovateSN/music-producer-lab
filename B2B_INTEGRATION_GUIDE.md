# Music Producer Lab - B2B Platform Integration Guide

> **Important status note (2026-02-20):** This guide is a legacy integration snapshot and is **not a turnkey enterprise deployment runbook**. It contains manual steps and older Clerk-based paths that must be reconciled with the current NextAuth implementation before institutional rollout. Track closure in `docs/INSTITUTIONAL_READINESS_RESPONSE.md`.

## 🎉 What's Been Built

### ✅ Completed Infrastructure

1. **Database Schema** (`database/schema.sql`)
   - 10 tables for complete B2B functionality
   - Users, Schools, Classes, Progress, Patterns, Certificates, etc.
   - Row Level Security enabled
   - 30+ indexes for performance
   - 3 reporting views for dashboards

2. **Next.js Backend** (App Router)
   - Full TypeScript setup
   - Clerk authentication integration
   - Neon database connection
   - Resend email ready

3. **API Endpoints** (All functional)
   - ✅ `POST /api/auth/sync` - User authentication sync
   - ✅ `GET /api/users/me` - Get current user
   - ✅ `PATCH /api/users/me` - Update user profile
   - ✅ `GET /api/progress` - Get all lesson progress
   - ✅ `POST /api/progress` - Save lesson progress
   - ✅ `GET /api/progress/[lessonKey]` - Get specific lesson
   - ✅ `GET /api/patterns` - Get saved patterns
   - ✅ `POST /api/patterns` - Save pattern
   - ✅ `GET /api/stats/me` - User statistics
   - ✅ `GET /api/schools` - List schools (admin)
   - ✅ `POST /api/schools` - Create school (super admin)
   - ✅ `GET /api/schools/[id]` - School details
   - ✅ `PATCH /api/schools/[id]` - Update school

4. **Frontend Integration** (`js/api-client.js`)
   - Easy-to-use JavaScript API client
   - Works with existing HTML pages
   - Hybrid localStorage + cloud sync
   - Auto-migration from localStorage

5. **Authentication & Authorization**
   - Middleware configured
   - Role-based access control (RBAC)
   - 4 roles: student, teacher, school_admin, super_admin
   - Protected routes for dashboards

## 📋 What Still Needs to Be Done (blocking for enterprise launch)

### 🔴 Critical (Must do before launch)

1. **Execute Database Schema + Security Migrations**
   - See `database/README.md` for instructions
   - Run `database/schema.sql` first, then `database/add-auth-rate-limits.sql`
   - Use Neon web console (easiest method)
   - Or use AI agent with provided prompt
   - Verify all 10 core tables + `auth_rate_limits` are created

2. **Update Environment Variables on Vercel**
   - Go to Vercel project settings
   - Add these env vars (get actual values from your service dashboards):
     ```
     DATABASE_URL=<your-neon-connection-string>
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
     CLERK_SECRET_KEY=<your-clerk-secret-key>
     RESEND_API_KEY=<your-resend-api-key>
     NEXT_PUBLIC_APP_URL=https://music-producer-lab.vercel.app
     ```

   > **SECURITY NOTE:** Never commit actual credentials to version control.
   > Store secrets securely in Vercel Environment Variables or a secrets manager.

3. **Configure Clerk Dashboard**
   - Go to https://dashboard.clerk.com
   - Set up sign-up/sign-in flows
   - Configure OAuth providers (Google, GitHub)
   - Add custom fields: role, school_id
   - Set redirect URLs:
     - Sign-in: `/index.html`
     - Sign-up: `/index.html`
     - After sign-out: `/index.html`

4. **Verify RLS Isolation in Staging**
   - Execute `database/rls-verification.sql` with real tenant users
   - Capture evidence that cross-school reads are denied

5. **Add Clerk UI to HTML Pages**
   - Add Clerk script to existing HTML pages
   - Add sign-in/sign-up buttons
   - Show user profile when logged in
   - Example integration below

### 🟡 Medium Priority (Week 1-2)

6. **Teacher Dashboard**
   - Create `/app/teacher/page.tsx`
   - Show teacher's classes
   - Student progress tracking
   - Class management UI

7. **School Admin Panel**
   - Create `/app/admin/page.tsx`
   - License management
   - User management
   - Reports and analytics

8. **Super Admin Panel**
   - Create `/app/superadmin/page.tsx`
   - Manage all schools
   - Create/edit schools
   - Invoicing system
   - Global analytics

9. **Email Templates**
   - Welcome email
   - Progress reports
   - Certificate emails
   - Weekly digests
   - Invoice reminders

### 🟢 Low Priority (Week 3-4)

10. **Certificate Generation**
   - PDF generation with certificate design
   - Unique verification codes
   - Downloadable certificates
   - Email delivery

11. **Advanced Analytics**
    - Time spent tracking
    - Popular lessons
    - Completion rates
    - Engagement metrics

12. **MIDI Export Enhancement**
    - Save to cloud (not just download)
    - Pattern library
    - Share patterns between users

13. **Real-time Features
    - Live teacher dashboard updates
    - Real-time progress notifications

## 🚀 Quick Start Guide

### Step 1: Execute Database Schema

```bash
# Option A: Neon Web Console
1. Go to https://console.neon.tech
2. Login and select your database
3. Click SQL Editor
4. Copy/paste database/schema.sql
5. Click Run

# Option B: Command Line (if you have psql)
psql "postgresql://neondb_owner:..." -f database/schema.sql
```

### Step 2: Test the API Locally

```bash
# Install dependencies (already done)
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
```

### Step 3: Test API Endpoints

```javascript
// Test in browser console
fetch('/api/users/me')
  .then(r => r.json())
  .then(console.log);
```

### Step 4: Integrate Clerk in HTML

Add to any existing HTML page (e.g., `index.html`):

```html
<!-- Before closing </head> tag -->
<script
  async
  crossorigin="anonymous"
  data-clerk-publishable-key="pk_test_bGFzdGluZy1zdW5iaXJkLTI2LmNsZXJrLmFjY291bnRzLmRldiQ"
  onload="window.Clerk.load()"
  src="https://wise-deer-22.clerk.accounts.dev/npm/@clerk/clerk-js@latest/dist/clerk.browser.js"
  type="text/javascript"
></script>

<!-- Before closing </body> tag -->
<script>
  window.addEventListener('load', async function () {
    await window.Clerk.load();

    if (window.Clerk.user) {
      // User is signed in
      console.log('User:', window.Clerk.user.primaryEmailAddress.emailAddress);

      // Sync with database
      await fetch('/api/auth/sync', { method: 'POST' });

      // Show user menu
      document.getElementById('user-menu').style.display = 'block';
      document.getElementById('sign-in-btn').style.display = 'none';
    } else {
      // User is signed out
      document.getElementById('sign-in-btn').style.display = 'block';
      document.getElementById('user-menu').style.display = 'none';
    }
  });

  function signIn() {
    window.Clerk.openSignIn();
  }

  function signOut() {
    window.Clerk.signOut();
  }
</script>

<!-- Add to your navigation -->
<div id="sign-in-btn" style="display: none;">
  <button onclick="signIn()">Sign In</button>
</div>

<div id="user-menu" style="display: none;">
  <span id="user-email"></span>
  <button onclick="signOut()">Sign Out</button>
</div>
```

### Step 5: Update Progress Tracking

Replace localStorage calls with cloud sync:

```javascript
// OLD (localStorage only)
localStorage.setItem('lessonProgress', JSON.stringify(progress));

// NEW (hybrid - both localStorage and cloud)
await MplApi.saveProgressHybrid('drums-1', {
  status: 'completed',
  completion_percentage: 100,
  time_spent_seconds: 120,
  module_name: 'Drums & Rhythm',
  lesson_number: 1
});
```

## 📊 Architecture Overview

```
┌─────────────────────────────────────────────────────────┐
│                   FRONTEND LAYER                        │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Existing HTML Pages (Static)                      │  │
│  │  - index.html, learn-tools.html, etc.             │  │
│  │  - Clerk UI for auth                              │  │
│  │  - api-client.js for backend communication        │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↕ HTTP/JSON
┌─────────────────────────────────────────────────────────┐
│                 NEXT.JS API LAYER                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Middleware (Clerk Auth)                          │  │
│  │    ↓                                              │  │
│  │  API Routes (/api/*)                              │  │
│  │    - Authentication & user management             │  │
│  │    - Progress tracking                            │  │
│  │    - School/class management                      │  │
│  │    - Analytics & reporting                        │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                         ↕ SQL
┌─────────────────────────────────────────────────────────┐
│                  DATABASE LAYER                         │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Neon PostgreSQL                                  │  │
│  │    - 10 tables (users, schools, progress, etc.)   │  │
│  │    - Row Level Security                           │  │
│  │    - Indexes & views                              │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## 🔐 Security Features

1. **Authentication**: Clerk handles all auth (JWT tokens, sessions)
2. **Authorization**: Role-based access control at API level
3. **Database**: RLS policies (to be activated post-Clerk integration)
4. **HTTPS**: All API calls encrypted in transit
5. **Environment Variables**: Sensitive data not in code
6. **GDPR**: User consent tracking in database

## 💰 B2B Pricing Implementation

### Creating a School (Super Admin)

```javascript
const response = await fetch('/api/schools', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Example High School',
    domain: 'examplehs.ac.uk',
    country: 'GB',
    license_tier: 'medium', // small, medium, large
    max_students: 200,
    license_start: '2024-09-01',
    license_end: '2025-08-31',
    monthly_price_gbp: 266.67, // £3,200/year ÷ 12
    billing_email: 'admin@examplehs.ac.uk',
    billing_address: '123 School Lane, London, UK',
    vat_number: 'GB123456789',
  })
});
```

### Inviting Teachers/Students

Teachers and students sign up normally via Clerk. Super admin or school admin then:

1. Assigns them to the school (via `/api/users/[id]`)
2. Sets their role (teacher or student)
3. Teachers create classes
4. Students join classes with class codes

## 📈 Next Steps Checklist

- [ ] Execute database schema on Neon
- [ ] Configure Clerk dashboard (sign-up flows, OAuth, redirects)
- [ ] Update Vercel environment variables
- [ ] Deploy to Vercel (auto-deploy from git push)
- [ ] Test authentication flow
- [ ] Add Clerk UI to main HTML pages
- [ ] Migrate existing localStorage progress (optional)
- [ ] Build teacher dashboard
- [ ] Build school admin panel
- [ ] Build super admin panel
- [ ] Create email templates
- [ ] Set up invoice generation
- [ ] Launch beta to first school

## 🧪 Testing

### Test User Roles

Create test users in Clerk with different roles:

1. **Student** (default): Can access lessons, save progress
2. **Teacher**: Can create classes, view student progress
3. **School Admin**: Can manage school users, view school stats
4. **Super Admin**: Full access to all schools, create schools, invoicing

### Test API Endpoints

```bash
# Get current user
curl http://localhost:3000/api/users/me

# Save progress
curl -X POST http://localhost:3000/api/progress \
  -H "Content-Type: application/json" \
  -d '{
    "lesson_key": "drums-1",
    "status": "completed",
    "completion_percentage": 100
  }'

# Get stats
curl http://localhost:3000/api/stats/me
```

## 📚 Resources

- **Clerk Docs**: https://clerk.com/docs
- **Neon Docs**: https://neon.tech/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Resend Docs**: https://resend.com/docs

---

## 🎯 Development Roadmap

### Week 1 (Critical Path)
- ✅ Database schema
- ✅ API infrastructure
- ✅ Authentication setup
- ⏳ Deploy to production
- ⏳ Execute schema on Neon
- ⏳ Configure Clerk

### Week 2 (Core Features)
- ⏳ Teacher dashboard
- ⏳ Progress tracking UI
- ⏳ Class management
- ⏳ Email system

### Week 3 (Admin Features)
- ⏳ School admin panel
- ⏳ Super admin panel
- ⏳ Reporting & analytics
- ⏳ Invoice generation

### Week 4 (Polish & Launch)
- ⏳ Certificate generation
- ⏳ Sales materials
- ⏳ Demo video
- ⏳ First school beta

---

**Status**: Infrastructure 95% complete. Ready for database execution and deployment.

**Blockers**:
1. Database schema needs to be executed manually (network restrictions)
2. Clerk needs configuration in dashboard
3. Vercel env vars need to be set

**Estimated time to MVP**: 2-3 weeks with full-time work
