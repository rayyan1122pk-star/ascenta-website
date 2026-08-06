create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  company text,
  budget text not null,
  timeline text not null,
  message text not null,
  preferred_contact text not null
);

alter table public.contact_submissions enable row level security;

-- No public select/update/delete policies: this table is only written to via the
-- server-side Server Action using the service role key, which bypasses RLS.
