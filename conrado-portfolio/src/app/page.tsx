import Link from "next/link";
import PageHero from "@/components/PageHero";
import { contactEmail, socialProfiles } from "@/data/contact";
import styles from "./page.module.css";

const projects = [
  "FunTasks",
  "Ricetta Divina",
  "Todo List",
  "Restaurante com microfrontends",
  "Diário de Bordo PWA",
];

const featuredSkills = ["React", "TypeScript", "Next.js", "CSS"];

export default function Home() {
  return (
    <main className={styles.page}>
      <PageHero title="Portfólio de Conrado Schorn" />

      <div className={styles.content}>
        <section className={`${styles.section} ${styles.about}`} aria-labelledby="about-title">
          <h2 className={styles.heading} id="about-title">
            Sobre Mim
          </h2>
          <p className={styles.description}>
            Sou estudante de Desenvolvimento de Software Full Stack Java na
            EBAC, com interesse em ingressar no mercado de tecnologia e
            continuar aprendendo.
          </p>
          <Link className={styles.action} href="/sobre">
            Mais sobre mim
          </Link>
        </section>

        <section className={`${styles.section} ${styles.projects}`} aria-labelledby="projects-title">
          <h2 className={styles.heading} id="projects-title">
            Projetos
          </h2>
          <ul className={styles.projectList}>
            {projects.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
          <Link className={styles.action} href="/projetos">
            Conhecer projetos
          </Link>
        </section>

        <section className={`${styles.section} ${styles.skills}`} aria-labelledby="skills-title">
          <h2 className={styles.heading} id="skills-title">
            Habilidades em destaque
          </h2>
          <ul className={styles.skillList}>
            {featuredSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
          <Link className={styles.action} href="/habilidades">
            Saiba mais
          </Link>
        </section>

        <section className={`${styles.section} ${styles.contact}`} aria-labelledby="contact-title">
          <h2 className={styles.heading} id="contact-title">
            Contato
          </h2>
          <ul className={styles.contactLinks} aria-label="Links de contato">
            <li>
              <a className={styles.contactLink} href={`mailto:${contactEmail}`}>
                E-mail
              </a>
            </li>
            {socialProfiles.map(({ href, label }) => (
              <li key={href}>
                <a
                  className={styles.contactLink}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <Link className={styles.action} href="/contato">
            Entre em contato
          </Link>
        </section>
      </div>
    </main>
  );
}
