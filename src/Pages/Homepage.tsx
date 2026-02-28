import { Github, Linkedin, Mail } from "lucide-react";
import Hero from "../Components/Sections/Hero";
import Projects from "../Components/Sections/Projects";
import Contact from "../Components/Sections/Contact";

export default function Homepage() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Web",
      description:
        "Un portfolio moderne en React et Tailwind pour présenter mes projets et compétences.",
      techs: ["React", "Tailwind", "JavaScript", "HTML", "CSS"],
      imageUrl: "https://via.placeholder.com/400x300?text=Portfolio+Web",
      view_link: "https://lucas-portfolio.com",
      github_link: "https://github.com/Magiks0/portfolio",
    },
    {
      id: 2,
      title: "Jeu 2D en JavaScript",
      description:
        "Petit jeu de plateforme 2D développé en JavaScript pur avec animations CSS.",
      techs: ["JavaScript", "HTML", "CSS", "Canvas"],
      imageUrl: "https://via.placeholder.com/400x300?text=Jeu+2D",
      view_link: "https://lucas-2dgame.com",
      github_link: "https://github.com/Magiks0/jeu-2d",
    },
    {
      id: 3,
      title: "Application ToDo",
      description:
        "Application ToDo simple avec stockage local et filtre de tâches.",
      techs: ["React", "TypeScript", "Tailwind"],
      imageUrl: "https://via.placeholder.com/400x300?text=Todo+App",
      view_link: "https://lucas-todoapp.com",
      github_link: "https://github.com/Magiks0/todo-app",
    },
    {
      id: 4,
      title: "Impression 3D : Support Smartphone",
      description:
        "Modélisation 3D et impression d’un support de smartphone ajustable.",
      techs: ["Fusion 360", "3D Printing", "Tinkercad"],
      imageUrl: "https://via.placeholder.com/400x300?text=3D+Support",
      view_link: null,
      github_link: null,
    },
    {
      id: 5,
      title: "Application de Recettes",
      description:
        "Une application web pour gérer et partager des recettes de cuisine.",
      techs: ["Vue.js", "Tailwind", "Firebase"],
      imageUrl: "https://via.placeholder.com/400x300?text=Recettes+App",
      view_link: "https://lucas-recipes.com",
      github_link: "https://github.com/Magiks0/recipes-app",
    },
    {
      id: 6,
      title: "Projet Scolaire : Site E-commerce",
      description:
        "Mini site e-commerce développé dans le cadre d’un projet scolaire, avec panier et paiement simulé.",
      techs: ["React", "JavaScript", "CSS", "HTML"],
      imageUrl: "https://via.placeholder.com/400x300?text=E-commerce+School",
      view_link: "https://lucas-ecommerce.com",
      github_link: "https://github.com/Magiks0/ecommerce-school",
    },
  ];
  return (
    <>
          <Hero />
          <Projects projects={projects}/>
          <Contact />
    </>
  );
}
