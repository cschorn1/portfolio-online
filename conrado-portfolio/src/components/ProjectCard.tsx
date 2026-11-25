"use client";

import Image from "next/image";
import { useId, useRef } from "react";
import type { PortfolioProject } from "@/data/projects";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: PortfolioProject;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogTitleId = useId();

  function closeOnCancel(event: React.SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault();
    event.currentTarget.close();
  }

  function closeOnBackdrop(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  }

  return (
    <article className={styles.card}>
      <button
        className={styles.mediaButton}
        type="button"
        aria-haspopup="dialog"
        aria-label={
          project.screenshot
            ? `Ampliar screenshot de ${project.name}`
            : `Visualizar marcador de screenshot pendente de ${project.name}`
        }
        onClick={() => dialogRef.current?.showModal()}
      >
        {project.screenshot ? (
          <Image
            className={styles.screenshot}
            src={project.screenshot.src}
            alt={project.screenshot.alt}
            fill
            sizes="(max-width: 700px) 100vw, (max-width: 1000px) 80vw, 30vw"
          />
        ) : (
          <span className={styles.imagePending}>
            ❌ INSERIR SCREENSHOT
            <span>{project.name}</span>
          </span>
        )}
      </button>

      <div className={styles.details}>
        <h2 className={styles.title}>{project.name}</h2>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.technologyGroup}>
          <h3>Tecnologias</h3>
          <ul className={styles.technologies}>
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>

        <div className={styles.links} aria-label={`Links de ${project.name}`}>
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <span className={styles.pending}>❌ PREENCHER GitHub</span>
          )}
          {project.demo.status === "available" ? (
            <a href={project.demo.url} target="_blank" rel="noreferrer">
              Demonstração
            </a>
          ) : project.demo.status === "unavailable" ? (
            <span>Sem demonstração online</span>
          ) : (
            <span className={styles.pending}>
              ❌ PREENCHER demo (se houver)
            </span>
          )}
        </div>
      </div>

      <dialog
        className={styles.lightbox}
        ref={dialogRef}
        aria-labelledby={dialogTitleId}
        onCancel={closeOnCancel}
        onClick={closeOnBackdrop}
      >
        <div className={styles.lightboxContent}>
          <div className={styles.lightboxHeader}>
            <h2 id={dialogTitleId}>{project.name}</h2>
            <button
              className={styles.closeButton}
              type="button"
              onClick={() => dialogRef.current?.close()}
            >
              Fechar
            </button>
          </div>
          {project.screenshot ? (
            <div className={styles.lightboxImage}>
              <Image
                src={project.screenshot.src}
                alt={project.screenshot.alt}
                fill
                sizes="94vw"
              />
            </div>
          ) : (
            <div className={styles.lightboxPending}>
              ❌ INSERIR SCREENSHOT DO PROJETO
            </div>
          )}
        </div>
      </dialog>
    </article>
  );
}
