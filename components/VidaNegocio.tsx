import styles from "./VidaNegocio.module.css";

export default function VidaNegocio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Crescer pode significar mais.</h2>
        <h3 className={styles.subtitle}>
          Crescimento não precisa ter uma única definição.
        </h3>
        <p className={styles.lead}>
          Faturar mais. Construir uma equipe melhor. Ter tempo. Criar algo
          relevante. Escolher melhor. Viver experiências. Ter liberdade para
          decidir o próximo passo.
        </p>
        <p className={styles.statement}>
          Talvez o próximo nível seja descobrir qual é a sua.
        </p>
        <a href="#ingressos" className={styles.cta}>
          EU QUERO IMAGINAR UM CAMINHO DIFERENTE
        </a>
      </div>
    </section>
  );
}
