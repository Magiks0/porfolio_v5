import type { Project } from "./types";

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "featured-1",
    slug: "plateforme-saas-gestion-rh",
    title: "Plateforme SaaS de Gestion RH",
    description:
      "Application complète de gestion des ressources humaines : contrats, congés, paie et onboarding, pensée pour les PME.",
    category: "SaaS",
    github_link: null,
    preview_link: null,
    techs: ["Symfony", "PHP 8.2", "React", "PostgreSQL"],
    created_at: "2026-01-01",
  },
  {
    id: "featured-2",
    slug: "e-commerce-headless",
    title: "E-Commerce Headless",
    description:
      "Storefront headless ultra-rapide branché sur une API commerce : panier, checkout, CMS et SEO technique.",
    category: "E-Commerce",
    github_link: null,
    preview_link: null,
    techs: ["Next.js", "React", "Node.js", "Stripe"],
    created_at: "2026-01-01",
  },
  {
    id: "featured-3",
    slug: "api-gateway-authentification",
    title: "API Gateway & Authentification",
    description:
      "Couche d'API gateway sécurisée avec authentification JWT, gestion de roles et rate-limiting distribués.",
    category: "Backend",
    github_link: null,
    preview_link: null,
    techs: ["Node.js", "JWT", "Redis", "Docker"],
    created_at: "2026-01-01",
  },
];