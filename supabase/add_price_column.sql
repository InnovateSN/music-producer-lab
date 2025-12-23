-- Migration: Add price column to users table
-- Date: 2025-12-23
-- Description: Adds price column to track purchase amount from Gumroad webhook

-- Add price column (numeric for currency values)
ALTER TABLE public.users 
ADD COLUMN IF NOT EXISTS price numeric(10, 2);

-- Add comment for documentation
COMMENT ON COLUMN public.users.price IS 'Purchase price from Gumroad (in dollars, e.g., 99.00)';

-- Optional: Create index for analytics queries
CREATE INDEX IF NOT EXISTS idx_users_price ON public.users(price) WHERE price IS NOT NULL;

-- Verify the change
SELECT column_name, data_type, character_maximum_length, is_nullable
FROM information_schema.columns
WHERE table_schema = 'public' 
  AND table_name = 'users'
  AND column_name = 'price';
