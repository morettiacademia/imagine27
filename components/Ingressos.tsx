import styles from "./Ingressos.module.css";
import { LOTE_LABEL, TICKETS } from "@/lib/data";

export default function Ingressos() {
  return (
    <section id="ingressos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>INGRESSOS · {LOTE_LABEL}</div>
          <h2 className={styles.title}>ESCOLHA SUA EXPERIÊNCIA</h2>
          <p className={styles.lead}>
            Valores conforme planilha oficial do evento · sujeitos a
            alteração na virada de lote
          </p>
        </div>

        <div className={styles.grid}>
          {TICKETS.map((ticket) => (
            <div key={ticket.key} className={styles.card} data-color={ticket.color}>
              {ticket.badge && (
                <div className={styles.badge} data-color={ticket.color}>
                  {ticket.badge}
                </div>
              )}
              <div
                className={
                  ticket.key === "imagine"
                    ? `${styles.ticketName} gradient-text`
                    : styles.ticketName
                }
                style={
                  ticket.key !== "imagine"
                    ? { color: `var(--${ticket.color})` }
                    : undefined
                }
              >
                {ticket.name}
              </div>
              <div className={styles.tagline}>{ticket.tagline}</div>
              <div className={styles.priceLabel}>A partir de</div>
              <div className={styles.price}>{ticket.price}</div>
              <ul className={styles.benefits}>
                {ticket.benefits.map((benefit) => (
                  <li key={benefit} className={styles.benefit}>
                    <span style={{ color: `var(--${ticket.color})` }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <a
                href={ticket.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cta}
                data-style={ticket.ctaStyle}
              >
                GARANTIR INGRESSO
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
