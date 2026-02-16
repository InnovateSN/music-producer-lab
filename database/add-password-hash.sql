-- Migration: Add password_hash column for NextAuth credentials authentication
-- Run this migration to enable email/password login

-- Add password_hash column to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hash VARCHAR(255);

-- Make clerk_id nullable (no longer required with NextAuth)
ALTER TABLE users ALTER COLUMN clerk_id DROP NOT NULL;

-- Add index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_users_email_lower ON users(LOWER(email));

-- Comment describing the changes
COMMENT ON COLUMN users.password_hash IS 'Bcrypt hashed password for email/password authentication';
COMMENT ON COLUMN users.clerk_id IS 'Legacy Clerk ID - nullable after NextAuth migration';
