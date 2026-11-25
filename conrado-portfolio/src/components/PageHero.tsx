import Image from "next/image";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
};

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className={styles.hero} aria-labelledby="page-hero-title">
      <picture className={styles.visual}>
        <source
          media="(max-width: 640px)"
          srcSet="/hero-mobile.avif"
          type="image/avif"
        />
        <source srcSet="/hero-desktop.avif" type="image/avif" />
        <Image
          className={styles.image}
          src="/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
        />
      </picture>
      <div className={styles.overlay}>
        <h1 className={styles.title} id="page-hero-title">
          {title}
        </h1>
      </div>
    </section>
  );
}
