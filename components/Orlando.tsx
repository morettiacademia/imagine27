import styles from "./Orlando.module.css";

export default function Orlando() {
  return (
    <section className={styles.section}>
      <div className={styles.ray} />
      <div className={styles.inner}>
        <h2 className={styles.title}>Antes de existir, alguém imaginou.</h2>
        <p className={styles.lead}>
          Antes de uma grande atração existir. Antes de uma experiência
          inesquecível existir. Antes de milhões de pessoas viajarem para
          viver algo extraordinário — alguém precisou enxergar aquilo que
          ainda não existia.
        </p>
        <p className={`${styles.closing} gradient-text`}>Agora é a sua vez.</p>
      </div>
    </section>
  );
}
