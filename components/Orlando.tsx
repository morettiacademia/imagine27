import styles from "./Orlando.module.css";

export default function Orlando() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPhoto} />
      <div className={styles.bgFade} />
      <div className={styles.ray} />
      <div className={styles.inner}>
        <h2 className={styles.title}>Antes de existir, alguém imaginou.</h2>
        <p className={styles.lead}>
          Toda grande transformação começou como uma possibilidade.
          <br />
          Uma ideia. Uma escolha. Um caminho que ainda não existia.
        </p>
        <p className={styles.lead}>
          IMAGINE é um convite para olhar além do que já está pronto e
          enxergar aquilo que você ainda pode construir.
        </p>
        <p className={`${styles.closing} gradient-text`}>Agora é a sua vez.</p>
      </div>
    </section>
  );
}
