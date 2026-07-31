-- Contact form submissions.
--   anon (public form)           -> INSERT only
--   authenticated (admin inbox)  -> SELECT / UPDATE / DELETE
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

drop policy if exists "Public send messages" on public.contact_messages;
create policy "Public send messages"
  on public.contact_messages
  for insert
  with check (true);

drop policy if exists "Authenticated read messages" on public.contact_messages;
create policy "Authenticated read messages"
  on public.contact_messages
  for select to authenticated
  using (true);

drop policy if exists "Authenticated update messages" on public.contact_messages;
create policy "Authenticated update messages"
  on public.contact_messages
  for update to authenticated
  using (true)
  with check (true);

drop policy if exists "Authenticated delete messages" on public.contact_messages;
create policy "Authenticated delete messages"
  on public.contact_messages
  for delete to authenticated
  using (true);
