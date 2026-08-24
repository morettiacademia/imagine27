import styles from "./Ingressos.module.css";
import { CTA_LABEL, LOTE_LABEL, TICKETS } from "@/lib/data";

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
              <a href="#" className={styles.cta} data-style={ticket.ctaStyle}>
                GARANTIR INGRESSO
              </a>
            </div>
          ))}
        </div>

        <div className={styles.trustBar}>
          <div className={styles.trustItems}>
            <span className={styles.trustItem}>
              <span style={{ color: "var(--cyan)" }}>✓</span>Vagas limitadas
            </span>
            <span className={styles.trustItem}>
              <span style={{ color: "var(--cyan)" }}>✓</span>
              {LOTE_LABEL} vigente até a próxima virada
            </span>
            <span className={styles.trustItem}>
              <span style={{ color: "var(--cyan)" }}>✓</span>Compra 100%
              segura
            </span>
          </div>
          <a href="#" className="btn btn-primary btn-sm">
            {CTA_LABEL} →
          </a>
        </div>
      </div>
    </section>
  );
}
