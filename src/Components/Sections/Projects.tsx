import { Github } from "lucide-react";

export default function Projects({ projects }: { projects: Array<string[][][]> }) {
  return (
    <section className="relative pb-10 px-5 bg-gray-50 overflow-hidden">
      <div className="max-w-300 mx-auto relative z-10">
        {/* Section Header */}
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
            </div>*/}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-10 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden transform transition-all duration-400 hover:-translate-y-3 hover:shadow-2xl animate-slideInUp"
            >
              {/* Project Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-400 hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/80 opacity-0 flex items-center justify-center gap-4 transition-opacity duration-300 hover:opacity-100">
                  {project.view_link && (
                    <a
                      href={project.view_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold text-sm hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Voir le projet
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold text-sm hover:bg-gray-300 transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <Github size={16} /> Code source
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {project.title}
                </h3>
                <p
                  className="text-gray-600 text-sm mb-6 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                {/* Tech Stack */}
                {/* <div className="flex flex-wrap gap-2">
                    {project.techs.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 hover:bg-gray-200 hover:text-gray-900 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}