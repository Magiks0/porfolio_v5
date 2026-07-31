export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string | null;
  github_link: string | null;
  preview_link: string | null;
  created_at: string;
}
