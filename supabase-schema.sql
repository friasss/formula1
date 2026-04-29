-- Speed Bolt — Posts table
-- Run this in your Supabase SQL editor

create table if not exists posts (
  id          uuid primary key default gen_random_uuid(),
  description text        not null,
  images      text[]      not null default '{}',
  date        text        not null,
  created_at  timestamptz not null default now()
);

-- Anyone can read posts
alter table posts enable row level security;

create policy "Public read" on posts
  for select using (true);

-- Only service-role key (used server-side) can insert / delete
create policy "Service insert" on posts
  for insert with check (false);   -- blocked for anon; server uses service role

create policy "Service delete" on posts
  for delete using (false);        -- blocked for anon; server uses service role
