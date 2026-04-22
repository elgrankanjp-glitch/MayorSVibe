-- MayorSVibe schema for contact + newsletter autosave

create extension if not exists pgcrypto;

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  focus text,
  message text not null,
  source text default 'website',
  created_at timestamptz not null default now()
);

create index if not exists contact_leads_created_at_idx
  on public.contact_leads (created_at desc);

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'website',
  created_at timestamptz not null default now()
);

create index if not exists newsletter_subscribers_created_at_idx
  on public.newsletter_subscribers (created_at desc);

alter table public.contact_leads enable row level security;
alter table public.newsletter_subscribers enable row level security;

-- Server-side API uses service-role key, so no public insert policy required.
-- Add read policies only if needed for dashboard access.
