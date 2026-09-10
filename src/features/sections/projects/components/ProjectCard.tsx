import { ArrowUpRight, Code, Code2 } from "lucide-react";
import type { Project } from "../types";

export default function ProjectCard({ project }: { project: Project }) {
  const badgeTechs = project.techs?.slice(0, 2) ?? [];
  const hasImage = project.files?.length > 0;

  return (
    <article className="group flex flex-col gap-6 rounded-3xl border border-black/5 bg-[#E7E2D9] px-7 py-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/5 dark:bg-dark-card">
      <div className="relative flex h-64 items-center justify-center rounded-2xl bg-surface dark:bg-dark-surface">
        {hasImage && (
          <>
            <img
              src={project.files[0].url}
              alt="project_picture"
              className="w-full h-full rounded-2xl opacity-50"
            />
          </>
        )}
        {!hasImage && (
          <>
            <Code size={40} className="text-ink-muted dark:text-dark-ink-muted" />
          </>
        )}
      </div>

      {project.techs && project.techs.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {project.techs.slice(0, 3).map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-black/5 px-4 py-1.5 text-sm font-medium text-ink-muted dark:bg-white/10 dark:text-dark-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      <h3 className="text-2xl font-bold text-ink dark:text-dark-ink">
        {project.title}
      </h3>

      <p
        className="text-sm leading-relaxed text-ink-muted dark:text-dark-ink-muted"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />

      <div className="flex items-center justify-between border-t border-black/5 pt-6 dark:border-white/10">
        <span className="text-xs font-bold uppercase tracking-[0.15em] text-ink dark:text-dark-ink">
          Code source &amp; demo
        </span>

        <a
          href={
            project.preview_link ??
            project.github_link ??
            "https://github.com/Magiks0"
          }
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Voir le projet ${project.title}`}
          className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-black dark:bg-dark-ink dark:text-ink dark:group-hover:bg-white/85"
        >
          {project.preview_link ? (
            <ArrowUpRight size={20} />
          ) : (
            <Code2 size={18} />
          )}
        </a>
      </div>
    </article>
  );
}
