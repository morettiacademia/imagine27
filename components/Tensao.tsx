import styles from "./Tensao.module.css";
import { TENSION_TAGS } from "@/lib/data";

export default function Tensao() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>NUNCA TIVEMOS TANTAS POSSIBILIDADES.</h2>
        <div className={styles.tags}>
          {TENSION_TAGS.map((tag) => (
            <span key={tag.label} className={styles.tag} data-color={tag.color}>
              {tag.label}
            </span>
          ))}
        </div>
        <p className={styles.p1}>
          E ainda assim parece que nunca tivemos tão pouco tempo.
        </p>
        <p className={styles.p2}>Talvez a resposta não seja fazer mais.</p>
        <p className={`${styles.p3} gradient-text`}>Talvez seja imaginar melhor.</p>
      </div>
    </section>
  );
}
