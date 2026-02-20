# Database Setup

## Overview

Music Producer Lab uses Neon PostgreSQL (serverless) for data persistence.

## Tables

| Table | Description |
|-------|-------------|
| `users` | User accounts with password hashes and roles |
| `schools` | Educational institutions |
| `classes` | Teacher-created classes |
| `class_enrollments` | Student-to-class relationships |
| `lesson_progress` | Lesson completion tracking |
| `saved_patterns` | User-created patterns |
| `certificates` | Completion certificates |
| `analytics_events` | Activity tracking |
| `invoices` | B2B billing |
| `support_tickets` | Support system |
| `password_reset_tokens` | Password reset flow |

## Schema Files

## Schema Source of Truth

`database/schema.sql` is the canonical schema definition (SQL-first).

When `database/schema.sql` changes, update `prisma/schema.prisma` in the same PR so table/column names, nullability, and relations stay aligned.
Run `npm run db:schema:check` before merging; CI enforces this parity check.

- `schema.sql` - Main database schema
- `add-password-hash.sql` - Add password_hash column
- `add-password-hint.sql` - Add password_hint column
- `password-reset-tokens.sql` - Password reset tokens table

## Setup

### 1. Create Neon Database

1. Go to https://console.neon.tech
2. Create a new project
3. Copy the connection string

### 2. Configure Environment

```env
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
```

### 3. Run Migrations

Execute in Neon SQL Editor or via psql:

```bash
# Main schema
psql $DATABASE_URL -f schema.sql

# Migrations (run in order if needed)
psql $DATABASE_URL -f add-password-hash.sql
psql $DATABASE_URL -f add-password-hint.sql
psql $DATABASE_URL -f password-reset-tokens.sql
```

## User Roles

| Role | Access |
|------|--------|
| `student` | Basic access, lessons, progress |
| `teacher` | + Class management |
| `school_admin` | + School management |
| `admin` | + Admin panel |
| `super_admin` | Full access |

## Authentication

- Passwords hashed with bcrypt (12 rounds)
- Sessions stored as JWT in httpOnly cookie
- Optional password hint for recovery

## Security Notes

- Never commit `.env.local` or credentials
- Use environment variables for connection strings
- Row Level Security (RLS) available but not enforced

## Verification

```sql
-- Check tables
SELECT table_name FROM information_schema.tables
WHERE table_schema = 'public' ORDER BY table_name;

-- Check user columns
SELECT column_name FROM information_schema.columns
WHERE table_name = 'users';
```
