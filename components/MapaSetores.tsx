import styles from "./MapaSetores.module.css";

export default function MapaSetores() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>MAPA DO EVENTO</div>
          <h2>Veja onde cada experiência acontece.</h2>
          <p>
            Setores organizados por categoria de ingresso, com área VIP
            reservada para quem vive a experiência IMAGINE e INSPIRE.
          </p>
        </div>

        <div className={styles.stage}>PALCO</div>

        <div className={styles.grid}>
          <div className={styles.vip}>
            <span className={styles.vipLabel}>ÁREA VIP IMAGINE</span>
          </div>
          <div className={`${styles.tier} ${styles.imagine}`}>IMAGINE</div>
          <div className={`${styles.tier} ${styles.inspire}`}>INSPIRE</div>
          <div className={`${styles.tier} ${styles.spark}`}>SPARK</div>
        </div>

        <div className={styles.footer}>
          <div className={styles.arrow}>↓</div>
          <p className={styles.caption}>
            Mapa ilustrativo — a disposição final dos setores será confirmada
            antes do evento.
          </p>
        </div>
      </div>
    </section>
  );
}
