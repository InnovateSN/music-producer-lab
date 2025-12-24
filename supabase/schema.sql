-- Music Producer Lab Database Schema
-- Supabase PostgreSQL Schema for Stripe Subscriptions
-- Version: 2.0.0 (Stripe Integration)

-- Enable UUID generation
create extension if not exists "pgcrypto";

-- ============================================================================
-- USERS TABLE
-- Core users table with subscription management fields
-- ============================================================================
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  
  -- Subscription Status
  has_paid boolean not null default false,
  plan_tier text not null default 'free', -- 'free', 'basic', 'pro', 'premium', 'elite'
  subscription_type text, -- 'monthly', 'yearly', 'lifetime'
  subscription_status text default 'inactive', -- 'active', 'past_due', 'canceled', 'inactive'
  
  -- Stripe Integration
  stripe_customer_id text unique,
  subscription_id text unique, -- Stripe subscription ID or payment intent for lifetime
  
  -- Access Control
  access_until timestamptz, -- When access expires
  cancel_at_period_end boolean default false, -- User requested cancellation at period end
  
  -- Legacy fields (for backward compatibility)
  purchase_id text, -- Deprecated: use subscription_id
  price integer, -- Deprecated: stored in Stripe
  payment_timestamp timestamptz, -- Deprecated: use created_at/updated_at
  
  -- Metadata
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

-- Create indexes for common queries
create index if not exists users_email_idx on public.users(email);
create index if not exists users_stripe_customer_idx on public.users(stripe_customer_id);
create index if not exists users_subscription_status_idx on public.users(subscription_status);
create index if not exists users_access_until_idx on public.users(access_until);

-- ============================================================================
-- WEBHOOK LOGS TABLE
-- Track all incoming webhook events for debugging and audit
-- ============================================================================
create table if not exists public.webhook_logs (
  id uuid primary key default gen_random_uuid(),
  event_id text, -- Stripe event ID
  event_type text not null,
  status text not null default 'received', -- 'received', 'processing', 'success', 'error', 'ignored'
  raw_payload jsonb,
  details jsonb, -- Additional processing details
  created_at timestamptz not null default timezone('utc', now())
);

-- Index for querying logs
create index if not exists webhook_logs_event_type_idx on public.webhook_logs(event_type);
create index if not exists webhook_logs_status_idx on public.webhook_logs(status);
create index if not exists webhook_logs_created_idx on public.webhook_logs(created_at);

-- ============================================================================
-- SUBSCRIPTION PLANS TABLE (Optional)
-- Define available subscription plans and their features
-- ============================================================================
create table if not exists public.subscription_plans (
  id text primary key, -- 'monthly', 'yearly', 'lifetime'
  name text not null,
  description text,
  price_cents integer not null,
  currency text not null default 'eur',
  interval text, -- 'month', 'year', null for one-time
  interval_count integer default 1,
  stripe_price_id text,
  tier text not null default 'pro', -- Which tier this plan grants
  features jsonb, -- Array of feature strings
  is_active boolean default true,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

-- Insert default plans
insert into public.subscription_plans (id, name, description, price_cents, interval, tier, features)
values 
  ('monthly', 'Pro Monthly', 'Accesso mensile a tutti i contenuti', 999, 'month', 'pro', 
   '["Accesso a tutte le lezioni", "Aggiornamenti mensili", "Supporto community"]'::jsonb),
  ('yearly', 'Pro Yearly', 'Accesso annuale con 2 mesi gratis', 7900, 'year', 'pro',
   '["Accesso a tutte le lezioni", "Aggiornamenti per 12 mesi", "Supporto prioritario", "Contenuti esclusivi"]'::jsonb),
  ('lifetime', 'Pro Forever', 'Accesso illimitato per sempre', 19700, null, 'premium',
   '["Accesso illimitato per sempre", "Tutti gli aggiornamenti futuri", "Supporto VIP", "Sessioni 1-to-1"]'::jsonb)
on conflict (id) do nothing;

-- ============================================================================
-- FUNCTIONS
-- ============================================================================

-- Keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$ language plpgsql;

-- Trigger for users table
drop trigger if exists set_users_updated_at on public.users;
create trigger set_users_updated_at
before update on public.users
for each row execute procedure public.set_updated_at();

-- Trigger for subscription_plans table
drop trigger if exists set_subscription_plans_updated_at on public.subscription_plans;
create trigger set_subscription_plans_updated_at
before update on public.subscription_plans
for each row execute procedure public.set_updated_at();

-- When a Supabase auth user signs up, mirror them into the users table
create or replace function public.handle_new_auth_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email)
  on conflict (email) do update set id = excluded.id;
  return new;
end;
$$ language plpgsql security definer;

-- Trigger on auth user creation
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_auth_user();

-- Function to check if user has valid premium access
create or replace function public.has_premium_access(user_email text)
returns boolean as $$
declare
  user_record record;
begin
  select has_paid, access_until, subscription_status
  into user_record
  from public.users
  where email = user_email;
  
  if not found then
    return false;
  end if;
  
  -- Check if user has paid and access hasn't expired
  if user_record.has_paid = true then
    if user_record.access_until is null then
      return true; -- No expiry = lifetime access
    elsif user_record.access_until > now() then
      return true;
    end if;
  end if;
  
  return false;
end;
$$ language plpgsql security definer;

-- Function to get user's subscription tier
create or replace function public.get_user_tier(user_email text)
returns text as $$
declare
  user_tier text;
begin
  select plan_tier
  into user_tier
  from public.users
  where email = user_email
    and has_paid = true
    and (access_until is null or access_until > now());
  
  return coalesce(user_tier, 'free');
end;
$$ language plpgsql security definer;

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

-- Enable RLS on users table
alter table public.users enable row level security;

-- Drop existing policies
drop policy if exists "Users can read self" on public.users;
drop policy if exists "Users can update self" on public.users;
drop policy if exists "Service role can manage all users" on public.users;

-- Authenticated users can see their own record
create policy "Users can read self" on public.users
  for select using (auth.uid() = id);

-- Authenticated users can update only their own non-sensitive fields
create policy "Users can update self" on public.users
  for update using (auth.uid() = id)
  with check (auth.uid() = id);

-- Enable RLS on webhook_logs
alter table public.webhook_logs enable row level security;

-- Only service role can access webhook logs (no user access)
-- The service role key bypasses RLS automatically

-- Enable RLS on subscription_plans
alter table public.subscription_plans enable row level security;

-- Everyone can read plans
drop policy if exists "Anyone can read plans" on public.subscription_plans;
create policy "Anyone can read plans" on public.subscription_plans
  for select using (true);

-- ============================================================================
-- MIGRATION: Add new columns to existing users table
-- Run this if you're upgrading from an existing installation
-- ============================================================================
-- ALTER TABLE public.users ADD COLUMN IF NOT EXISTS subscription_type text;
-- ALTER TABLE public.users ADD COLUMN IF NOT EXISTS subscription_status text default 'inactive';
-- ALTER TABLE public.users ADD COLUMN IF NOT EXISTS stripe_customer_id text unique;
-- ALTER TABLE public.users ADD COLUMN IF NOT EXISTS subscription_id text unique;
-- ALTER TABLE public.users ADD COLUMN IF NOT EXISTS access_until timestamptz;
-- ALTER TABLE public.users ADD COLUMN IF NOT EXISTS cancel_at_period_end boolean default false;
