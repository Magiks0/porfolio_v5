-- RLS for projects:
--   anon (public portfolio)      -> SELECT only
--   authenticated (admin)        -> full CRUD
alter table public.projects enable row level security;

drop policy if exists "Public read projects" on public.projects;
create policy "Public read projects"
  on public.projects
  for select
  using (true);

drop policy if exists "Authenticated manage projects" on public.projects;
create policy "Authenticated manage projects"
  on public.projects
  for all to authenticated
  using (true)
  with check (true);
