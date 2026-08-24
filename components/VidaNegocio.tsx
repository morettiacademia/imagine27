import styles from "./VidaNegocio.module.css";

export default function VidaNegocio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Que negócio você está construindo?</h2>
        <h3 className={styles.subtitle}>
          E que vida esse negócio está construindo para você?
        </h3>
        <p className={styles.lead}>
          Faturar mais, crescer a equipe, vender mais — tudo isso é legítimo.
          Mas talvez você também queira estar presente, ter tempo para seus
          filhos, cuidar do casamento, viajar, ter saúde, realizar sonhos,
          viver.
        </p>
        <p className={styles.statement}>
          Sucesso não deveria exigir o fracasso das outras áreas da sua vida.
        </p>
        <a href="#ingressos" className={styles.cta}>
          EU QUERO IMAGINAR UM CAMINHO DIFERENTE
        </a>
      </div>
    </section>
  );
}
