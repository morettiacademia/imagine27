import styles from "./Programacao.module.css";

export default function Programacao() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.icon}>🗓️</div>
          <div className={styles.eyebrow}>PROGRAMAÇÃO</div>
          <h2 className={styles.title}>
            Dois dias de inteligência, estratégia, propósito, possibilidades
            e conexões reais.
          </h2>
          <p className={styles.text}>
            A grade completa de programação será divulgada em breve.
          </p>
          <span className={styles.badge}>EM BREVE</span>
        </div>
      </div>
    </section>
  );
}
