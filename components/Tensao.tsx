import styles from "./Tensao.module.css";
import { EDITION_HIGHLIGHTS } from "@/lib/data";

export default function Tensao() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>5ª EDIÇÃO</div>
        <h2 className={styles.title}>
          Mais experiências. Mais conexões.
          <br />
          <span className={`${styles.emphasis} gradient-text`}>
            Mais possibilidades.
          </span>
        </h2>
        <div className={styles.tags}>
          {EDITION_HIGHLIGHTS.map((tag) => (
            <span key={tag.label} className={styles.tag} data-color={tag.color}>
              {tag.label}
            </span>
          ))}
        </div>
        <p className={styles.p1}>O Magic Makers Ao Vivo chega à sua 5ª edição.</p>
        <p className={styles.p2}>
          Depois de quatro edições reunindo profissionais, ideias,
          experiências e histórias, chegou o momento de imaginar o que vem
          depois.
        </p>
        <p className={styles.p2}>
          Porque cada nova edição não é apenas uma continuação.
        </p>
        <p className={`${styles.p3} gradient-text`}>
          É uma oportunidade de abrir novos caminhos.
        </p>
      </div>
    </section>
  );
}
