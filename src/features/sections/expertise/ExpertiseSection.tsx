import { Layout as LayoutIcon, Server, ShieldCheck } from "lucide-react";
import type { Skill } from "./types";
import SkillCard from "./SkillCard";

const SKILLS: Skill[] = [
  {
    id: "frontend",
    icon: LayoutIcon,
    title: "Frontend Moderne",
    stack: [
      "React & TypeScript",
      "Tailwind CSS",
      "Interfaces accessibles",
      "Performance & UX",
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend & Architecture",
    stack: [
      "Symfony & PHP 8.2",
      "Node.js",
      "PostgreSQL",
      "API REST",
    ],
  },
  {
    id: "devops",
    icon: ShieldCheck,
    title: "Sécurité & Qualité",
    stack: [
      "Authentification & rôles",
      "Tests automatisés",
      "CI/CD",
      "Bonnes pratiques OWASP",
    ],
  },
];

export default function ExpertiseSection() {
  return (
    <section
      id="competences"
      className="border-b border-black/5 px-6 py-14 sm:px-10 lg:px-14 dark:border-white/10"
    >
      <div className="mx-auto max-w-330">
        <header className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted dark:text-dark-ink-muted">
            Savoir-faire
          </p>
          <h2 className="text-3xl font-bold text-ink dark:text-dark-ink">
            Compétences &amp; Stack
          </h2>
        </header>

        <div className="grid gap-7 md:grid-cols-3">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
