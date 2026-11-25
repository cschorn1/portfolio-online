import styles from "./SiteFooter.module.css";
import { contactEmail, socialProfiles } from "@/data/contact";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.message}>Obrigado por ver meu portfólio</p>
        <p className={styles.copyright}>
          @Conrado Schorn 2026. Todos os direitos reservados
        </p>
        <ul className={styles.profiles} aria-label="Perfis para contato">
          <li>
            <a className={styles.profileLink} href={`mailto:${contactEmail}`}>
              E-mail
            </a>
          </li>
          {socialProfiles.map(({ href, label }) => (
            <li key={href}>
              <a
                className={styles.profileLink}
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
