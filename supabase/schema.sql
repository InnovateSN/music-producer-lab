-- Enable UUID generation
create extension if not exists "pgcrypto";

-- Core users table
create table if not exists public.users (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  is_premium boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

-- Keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$ language plpgsql;

create trigger set_users_updated_at
before update on public.users
for each row execute procedure public.set_updated_at();

-- When a Supabase auth user signs up, mirror them into the profile table
create or replace function public.handle_new_auth_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email)
  on conflict (email) do update set id = excluded.id;
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_auth_user();

-- Enable Row Level Security and constrain access
alter table public.users enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies where schemaname = 'public' and tablename = 'users'
  ) then
    -- Authenticated users can see their own record
    create policy "Users can read self" on public.users
      for select using (auth.uid() = id);

    -- Authenticated users can update only their own record (e.g., name or flags)
    create policy "Users can update self" on public.users
      for update using (auth.uid() = id)
      with check (auth.uid() = id);
  end if;
end$$;
