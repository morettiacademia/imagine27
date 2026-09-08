import styles from "./CtaFinal.module.css";
import {
  CTA_LABEL,
  EXHIBITOR_CTA_LABEL,
  EXHIBITOR_WHATSAPP_MESSAGE,
  SPONSOR_CTA_LABEL,
  SPONSOR_WHATSAPP_MESSAGE,
  SPONSOR_WHATSAPP_NUMBER,
} from "@/lib/data";

export default function CtaFinal() {
  const sponsorHref = `https://wa.me/${SPONSOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(SPONSOR_WHATSAPP_MESSAGE)}`;
  const exhibitorHref = `https://wa.me/${SPONSOR_WHATSAPP_NUMBER}?text=${encodeURIComponent(EXHIBITOR_WHATSAPP_MESSAGE)}`;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        O futuro não é algo que acontece. É algo que imaginamos e criamos.
      </h2>
      <a href="#ingressos" className={styles.cta}>
        {CTA_LABEL} →
      </a>
      <div className={styles.secondaryCtas}>
        <a
          href={sponsorHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryCta}
        >
          {SPONSOR_CTA_LABEL}
        </a>
        <a
          href={exhibitorHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.secondaryCta}
        >
          {EXHIBITOR_CTA_LABEL}
        </a>
      </div>
    </section>
  );
}
