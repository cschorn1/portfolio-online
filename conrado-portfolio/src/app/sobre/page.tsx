import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { contactEmail, socialProfiles, softSkills } from "@/data/contact";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sobre Mim",
};

const professionalDetails = [
  "Estudante de Desenvolvimento de Software Full Stack Java na EBAC.",
  "Interesse em ingressar no mercado de tecnologia.",
  "Busca constante por aprendizado e desenvolvimento de novas habilidades.",
];

const personalDetails = [
  "Gosto de animais e tecnologia.",
  "Sou curioso e gosto de aprender coisas novas.",
  "Gosto de exercícios físicos e de me manter ativo.",
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <PageHero title="Sobre Mim" />

      <div className={styles.content}>
        <article className={styles.profileCard}>
          <p className={styles.introduction}>
            Sou estudante de Desenvolvimento de Software Full Stack Java na
            EBAC, com interesse em ingressar no mercado de tecnologia e
            continuar aprendendo.
          </p>

          <section className={styles.column} aria-labelledby="professional-title">
            <h2 id="professional-title">Aspectos profissionais</h2>
            <ul>
              {professionalDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>

          <section className={styles.column} aria-labelledby="personal-title">
            <h2 id="personal-title">Aspectos pessoais</h2>
            <ul>
              {personalDetails.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>

          <section className={styles.column} aria-labelledby="soft-skills-title">
            <h2 id="soft-skills-title">Soft skills</h2>
            <ul>
              {softSkills.map(({ name, description }) => (
                <li key={name}>
                  <strong>{name}:</strong> {description}
                </li>
              ))}
            </ul>
          </section>

          <figure className={styles.photo}>
            <Image
              className={styles.photoImage}
              src="/foto-pessoal.avif"
              alt="Foto pessoal de Conrado Schorn"
              width={1085}
              height={1449}
              sizes="(max-width: 640px) calc(100vw - 4.5rem), 320px"
            />
          </figure>

          <section className={styles.contact} aria-labelledby="about-contact-title">
            <h2 id="about-contact-title">Contato</h2>
            <ul className={styles.contactLinks}>
              <li>
                <a className={styles.contactLink} href={`mailto:${contactEmail}`}>
                  {contactEmail}
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
          </section>
        </article>
      </div>
    </main>
  );
}
