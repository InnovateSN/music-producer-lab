-- Add password hint column to users table
-- This allows users to set a hint to remember their password

ALTER TABLE users ADD COLUMN IF NOT EXISTS password_hint VARCHAR(255);

COMMENT ON COLUMN users.password_hint IS 'A hint to help the user remember their password';
