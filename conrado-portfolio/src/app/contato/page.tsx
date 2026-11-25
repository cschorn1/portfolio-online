import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { contactEmail, socialProfiles } from "@/data/contact";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contato",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <PageHero title="Contato" />

      <div className={styles.contactGrid}>
        <ContactForm />

        <section className={styles.profilesCard} aria-labelledby="profiles-title">
          <h2 id="profiles-title">Perfis profissionais</h2>
          <p>Entre em contato por e-mail ou encontre meus perfis:</p>
          <ul className={styles.profilesList}>
            <li>
              <a className={styles.profileLink} href={`mailto:${contactEmail}`}>
                {contactEmail}
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
        </section>
      </div>
    </main>
  );
}
