import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Habilidades",
};

const categories = [
  {
    title: "Desenvolvimento",
    technologies: [
      { name: "HTML", icon: "5", description: "Estrutura páginas com elementos semânticos." },
      { name: "JavaScript", icon: "JS", description: "Adiciona lógica e interatividade às aplicações." },
      { name: "TypeScript", icon: "TS", description: "Acrescenta tipagem estática ao JavaScript." },
      { name: "React", icon: "R", description: "Constrói interfaces a partir de componentes." },
    ],
  },
  {
    title: "Estilização",
    technologies: [
      { name: "CSS", icon: "3", description: "Define a apresentação e o layout das páginas." },
      { name: "Tailwind CSS", icon: "TW", description: "Estiliza interfaces usando classes utilitárias." },
    ],
  },
  {
    title: "Frameworks e ferramentas",
    technologies: [
      { name: "Next.js", icon: "N", description: "Framework React para criar aplicações web." },
      { name: "Vite", icon: "V", description: "Ferramenta de desenvolvimento e build para front-end." },
      { name: "Git", icon: "G", description: "Controla versões e histórico do código." },
      { name: "GitHub", icon: "GH", description: "Hospeda repositórios e facilita colaboração." },
      { name: "Vercel", icon: "▲", description: "Plataforma para publicar aplicações web." },
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className={styles.page}>
      <PageHero title="Habilidades" />

      <div className={styles.content}>
        {categories.map(({ title, technologies }, index) => {
          const splitIndex = Math.ceil(technologies.length / 2);
          const columns = [
            technologies.slice(0, splitIndex),
            technologies.slice(splitIndex),
          ];

          return (
            <section
              className={`${styles.categoryCard} ${index === 2 ? styles.wide : ""}`}
              key={title}
              aria-labelledby={`category-${index}`}
            >
              <h2 className={styles.categoryTitle} id={`category-${index}`}>
                {title}
              </h2>
              <div className={styles.columns}>
                {columns.map((column, columnIndex) => (
                  <ul className={styles.technologyList} key={columnIndex}>
                    {column.map(({ name, icon, description }) => (
                      <li className={styles.technology} key={name}>
                        <span className={styles.icon} aria-hidden="true">
                          {icon}
                        </span>
                        <div>
                          <h3>{name}</h3>
                          <p>{description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
