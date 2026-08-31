import styles from "./SecaoIA.module.css";
import { HUMAN_SKILLS } from "@/lib/data";

export default function SecaoIA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Use a tecnologia para ampliar o que só você pode criar.
        </h2>
        <h3 className={styles.subtitle}>
          Tecnologia não substitui visão. Ela amplia possibilidades.
        </h3>
        <p className={styles.lead}>
          A inteligência artificial está transformando a forma como
          trabalhamos, criamos e tomamos decisões.
        </p>
        <div className={styles.quoteCard}>
          <p className={styles.quote1}>
            Use a tecnologia para ganhar tempo, ampliar sua capacidade,
            organizar processos e transformar ideias em ação.
          </p>
          <p className={`${styles.quote2} gradient-text`}>
            E preserve para você aquilo que nenhuma ferramenta pode decidir:
            o que vale a pena construir.
          </p>
        </div>
        <div className={styles.skills}>
          {HUMAN_SKILLS.map((skill, i) => (
            <span key={skill} style={{ display: "contents" }}>
              <span className={styles.skill}>{skill}</span>
              {i < HUMAN_SKILLS.length - 1 && <span className={styles.dot}>·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
