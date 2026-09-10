export interface ProjectFile {
  id: string;
  size: number;
  mime_type: string;
  url: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string | null;
  github_link: string | null;
  preview_link: string | null;
  techs?: string[];
  created_at: string;
  files?: ProjectFile[];
}
