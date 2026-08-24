import styles from "./SecaoIA.module.css";
import { HUMAN_SKILLS } from "@/lib/data";

export default function SecaoIA() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <h2 className={styles.title}>A IA ESTÁ MUDANDO O JOGO.</h2>
        <h3 className={styles.subtitle}>Mas ela não precisa tirar você dele.</h3>
        <p className={styles.lead}>
          A tecnologia assumirá cada vez mais tarefas. Ótimo — porque isso
          pode nos permitir dedicar mais energia ao que realmente importa.
        </p>
        <div className={styles.quoteCard}>
          <p className={styles.quote1}>
            Deixe para a máquina aquilo que a máquina pode fazer.
          </p>
          <p className={`${styles.quote2} gradient-text`}>
            Torne-se extraordinário naquilo que só um ser humano pode fazer.
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
