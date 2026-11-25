"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SiteHeader.module.css";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre Mim" },
  { href: "/projetos", label: "Projetos" },
  { href: "/habilidades", label: "Habilidades" },
  { href: "/contato", label: "Contato" },
];

export default function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <span className={styles.name}>Conrado Schorn</span>
          <span className={styles.role}>
            Estudante de Desenvolvimento de Software Full Stack Java
          </span>
        </Link>

        <nav className={styles.navigation} aria-label="Navegação principal">
          {navigationLinks.map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                className={styles.navigationLink}
                href={href}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
