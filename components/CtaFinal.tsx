import styles from "./CtaFinal.module.css";
import { CTA_LABEL } from "@/lib/data";

export default function CtaFinal() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O futuro não é algo que acontece. É algo que imaginamos e criamos.
      </h2>
      <a href="#ingressos" className={styles.cta}>
        {CTA_LABEL} →
      </a>
    </section>
  );
}
