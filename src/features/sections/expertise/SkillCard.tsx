import type { Skill } from "./types";

export default function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon;

  return (
    <article className="flex flex-col gap-5 rounded-2xl bg-card p-6 border border-black/5 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:border-white/5 dark:bg-dark-card">
      <div className="flex size-12 items-center justify-center rounded-xl bg-ink text-white dark:bg-dark-ink dark:text-ink">
        <Icon size={22} strokeWidth={1.8} />
      </div>

      <h3 className="text-base font-bold text-ink dark:text-dark-ink">
        {skill.title}
      </h3>

      <ul className="flex flex-col gap-2 border-t border-black/5 pt-4 dark:border-white/10">
        {skill.stack.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2.5 text-sm text-ink-muted dark:text-dark-ink-muted"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-ink-muted dark:bg-dark-ink-muted" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
