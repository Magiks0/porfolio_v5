import { useEffect, useState } from "react";
import supabase from "../../../services/supabaseClient";
import type { Project } from "./types";
import ProjectCard from "./components/ProjectCard";
import { FEATURED_PROJECTS } from "./featured-projects";

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[] | null>(null);

  useEffect(() => {
    let ignore = false;

    supabase
      .from("projects")
      .select("*, files(*)")
      .then(({ data, error }) => {
        if (ignore) return;
        if (error) {
          console.error(error);
          setProjects([]);
          return;
        }
        setProjects(data ?? []);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const visibleProjects =
    projects && projects.length > 0 ? projects : FEATURED_PROJECTS;

  return (
    <section
      id="projets"
      className="border-b border-black/5 px-6 py-14 sm:px-10 lg:px-14 dark:border-white/10"
    >
      <div className="mx-auto max-w-330">
        <header className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted dark:text-dark-ink-muted">
              Sélection
            </p>
            <h2 className="text-3xl font-bold text-ink dark:text-dark-ink">
              Projets Sélectionnés
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-muted sm:text-right dark:text-dark-ink-muted">
            Conception d'architectures robustes, d'APIs sécurisées et
            d'interfaces réactives centrées sur la performance.
          </p>
        </header>

        <div className="flex flex-col gap-5">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}