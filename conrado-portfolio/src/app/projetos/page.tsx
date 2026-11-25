import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import PageHero from "@/components/PageHero";
import { projects } from "@/data/projects";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projetos",
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <PageHero title="Projetos" />

      <section
        className={styles.content}
        aria-label="Projetos desenvolvidos durante o curso"
      >
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
