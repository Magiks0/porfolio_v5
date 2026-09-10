interface FormationEntry {
  id: string;
  title: string;
  period: string;
  description: string;
}

const FORMATION_ENTRIES: FormationEntry[] = [
  {
    id: "esgi",
    title: "Développeur en formation",
    period: "ESGI · Mastère Ingénierie du Web · 2023 - 2026",
    description:
      "Spécialisation sur l'architecture back-end avec Symfony et l'écosystème front-end React, avec un focus constant sur la qualité de code et les bonnes pratiques.",
  },
  {
    id: "freelance",
    title: "Développeur Freelance",
    period: "2023 - Aujourd'hui",
    description:
      "Conception et développement de sites et applications sur-mesure pour indépendants et petites entreprises, de la maquette à la mise en production.",
  },
];

export default function FormationSection() {
  return (
    <section
      id="formation"
      className="border-b border-black/5 px-6 py-14 sm:px-10 lg:px-14 dark:border-white/10"
    >
      <div className="mx-auto grid max-w-330 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted dark:text-dark-ink-muted">
            Parcours
          </p>
          <h2 className="text-3xl font-bold leading-tight text-ink dark:text-dark-ink">
            Une formation rigoureuse, une passion continue.
          </h2>
          <p className="text-sm leading-relaxed text-ink-muted dark:text-dark-ink-muted">
            Un socle académique solide couplé à une pratique de terrain, pour
            allier théorie et exigence de production.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {FORMATION_ENTRIES.map((entry) => (
            <article
              key={entry.id}
              className="rounded-2xl border border-black/5 bg-card p-6 shadow-sm dark:border-white/5 dark:bg-dark-card"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-bold text-ink dark:text-dark-ink">
                  {entry.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted dark:text-dark-ink-muted">
                  {entry.period}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted dark:text-dark-ink-muted">
                {entry.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
