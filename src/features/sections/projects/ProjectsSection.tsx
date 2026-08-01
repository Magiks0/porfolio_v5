import { useEffect, useState } from "react";
import supabase from "../../../services/supabaseClient";
import type { Project } from "./types";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    let ignore = false;

    supabase
      .from("projects")
      .select("*, files(*)")
      .then(({ data, error }) => {
        if (ignore) return;
        if (error) {
          console.error(error);
          return;
        }
        setProjects(data ?? []);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <section className="relative pb-10 px-5 bg-gray-50 overflow-hidden">
      <div className="max-w-300 mx-auto relative z-10">
        <div className="text-center animate-fadeInUp">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-5 text-gray-800">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-150 mx-auto">
            Découvrez mes dernières créations et expérimentations
          </p>

          {/* <div className="flex flex-wrap justify-evenly gap-4 py-4 px-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-8 py-2 rounded-full bg-gray-800 text-white transition-transform duration-300 hover:scale-105"
                >
                  {cat}
                </button>
              ))}
            </div> */}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
