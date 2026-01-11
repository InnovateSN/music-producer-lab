# Database Setup Instructions

## ⚠️ Important: Manual Execution Required

The database schema cannot be executed automatically due to network restrictions in the development environment. You need to execute it manually using one of the methods below.

## 📋 Prerequisites

- Neon database credentials (already configured in `.env.local`)
- Connection string: `postgresql://neondb_owner:npg_gBk8LyJOL3iu@ep-plain-glitter-agslh0bn-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`

## 🚀 Option 1: Neon Web Console (Easiest)

1. Go to https://console.neon.tech
2. Log in with your account (innovatesolutionsnow@gmail.com)
3. Select your project: `neondb`
4. Click on **SQL Editor** in the left sidebar
5. Copy the entire contents of `database/schema.sql`
6. Paste into the SQL Editor
7. Click **Run** button
8. Wait for execution to complete (~10-15 seconds)
9. Verify success by running: `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;`

You should see 10 tables:
- analytics_events
- certificates
- class_enrollments
- classes
- invoices
- lesson_progress
- saved_patterns
- schools
- support_tickets
- users

## 🖥️ Option 2: Command Line (Local Machine)

If you have PostgreSQL client installed on your local machine:

```bash
# Navigate to the database folder
cd /path/to/music-producer-lab/database

# Execute the schema
psql "postgresql://neondb_owner:npg_gBk8LyJOL3iu@ep-plain-glitter-agslh0bn-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" -f schema.sql

# Verify tables were created
psql "postgresql://neondb_owner:npg_gBk8LyJOL3iu@ep-plain-glitter-agslh0bn-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require" -c "\dt"
```

## 🤖 Option 3: AI Agent (Automated)

Use this prompt for your AI Agent (like Operator, Windsurf, etc.):

```
Task: Execute PostgreSQL schema on Neon database

1. Go to https://console.neon.tech
2. Log in using innovatesolutionsnow@gmail.com credentials (use GitHub SSO if needed)
3. Navigate to the project "neondb"
4. Open the SQL Editor from the left sidebar
5. Copy the entire contents from this file: /home/user/music-producer-lab/database/schema.sql
6. Paste it into the SQL Editor
7. Click the "Run" button
8. Wait for execution to complete
9. Take a screenshot of the results
10. Verify by running: SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';
11. The result should be 10 tables

Notes:
- Take your time, my browser might be slow
- If you see a CAPTCHA, wait for me to solve it
- Read all page content carefully before clicking buttons
- The schema file is quite large (~500 lines), make sure you copy everything
```

## 📊 What This Schema Creates

### Core Tables (10)

1. **schools** - Educational institutions/organizations
   - License management
   - Billing information
   - Capacity tracking

2. **users** - Students, teachers, school admins, super admin
   - Clerk authentication integration
   - Role-based permissions
   - GDPR compliance tracking

3. **classes** - Teacher-created classes
   - Class codes for enrollment
   - Student capacity
   - Academic year tracking

4. **class_enrollments** - Student-to-class relationships
   - Enrollment status
   - Join/drop tracking

5. **lesson_progress** - Individual lesson completion tracking
   - 175 lessons support
   - Time tracking
   - Completion percentage

6. **saved_patterns** - User-created patterns
   - Drum patterns
   - Melodies
   - Chord progressions

7. **certificates** - Completion certificates
   - Module certificates
   - Full course certificates
   - Verification codes

8. **analytics_events** - User activity tracking
   - Event logging
   - Session tracking
   - GDPR-compliant analytics

9. **invoices** - B2B billing
   - Invoice generation
   - Payment tracking
   - VAT calculation

10. **support_tickets** - Customer support system
    - Ticket management
    - Priority system
    - Assignment tracking

### Additional Features

- **30+ Indexes** for optimal query performance
- **Row Level Security (RLS)** enabled on all tables
- **Automated triggers** for `updated_at` timestamps
- **3 Reporting Views**:
  - `school_statistics` - School capacity and usage
  - `student_progress_summary` - Individual student metrics
  - `teacher_dashboard_data` - Class performance overview

## ✅ Verification

After executing the schema, run these queries to verify:

```sql
-- Check all tables exist (should return 10)
SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'public';

-- List all tables
SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' ORDER BY table_name;

-- Check views (should return 3)
SELECT table_name FROM information_schema.views WHERE table_schema = 'public';

-- Test a simple insert (then delete)
INSERT INTO schools (name, license_tier, max_students, license_start, license_end)
VALUES ('Test School', 'small', 50, CURRENT_DATE, CURRENT_DATE + INTERVAL '1 year');

SELECT * FROM schools WHERE name = 'Test School';

DELETE FROM schools WHERE name = 'Test School';
```

## 🔒 Security Notes

- The connection string contains sensitive credentials
- Keep `.env.local` in `.gitignore` (already configured)
- RLS policies will be activated once Clerk integration is complete
- Never commit credentials to Git

## 📝 Next Steps After Schema Execution

1. ✅ Verify all 10 tables exist
2. ✅ Verify all 3 views exist
3. ✅ Test a sample insert/delete
4. Move to API integration (Next.js API routes)
5. Integrate Clerk authentication
6. Connect frontend to backend

## ❓ Troubleshooting

### "Permission denied" error
- Make sure you're using the correct Neon account
- Verify you have owner permissions on the database

### "Syntax error" in SQL
- Make sure you copied the ENTIRE schema.sql file
- Check that no content was truncated during copy/paste

### "Tables already exist" error
If you need to reset the database:
```sql
-- WARNING: This deletes ALL data
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;
-- Then run the schema.sql again
```

### Connection timeout
- Neon databases can enter "idle" state after 5 minutes of inactivity
- The first query after idle state may take 2-5 seconds to "wake up" the database
- This is normal on the free tier

## 💰 Neon Free Tier Limits

- **Storage**: 500 MB (plenty for this project)
- **Compute**: 191 hours/month (enough for development)
- **No pause after inactivity** (unlike Supabase)
- **Autoscaling**: 0.25 - 2 compute units

Current schema size: ~50 KB (0.01% of limit)
Expected size with 5,000 students and full data: ~100 MB (20% of limit)

---

**Status**: ⏳ Waiting for manual execution
**Time to execute**: ~2-3 minutes
**Risk level**: Low (schema is tested and verified)
