import styles from "./Timeline.module.css";
import { TIMELINE } from "@/lib/data";

const DOT_COLOR: Record<string, string> = {
  blue: "var(--blue)",
  cyan: "var(--cyan)",
  purple: "var(--purple)",
  coral: "var(--coral)",
};

export default function Timeline() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>UMA HISTÓRIA DE TRANSFORMAÇÃO</div>
        <h2 className={styles.title}>Quatro edições nos trouxeram até aqui.</h2>
        <p className={styles.subtitle}>
          Cada edição representou um momento. Uma energia. Uma transformação.
        </p>
        <div className={styles.track}>
          <div className={styles.line} />
          {TIMELINE.map((edition) => (
            <div key={edition.name} className={styles.item}>
              {edition.current ? (
                <div className={styles.dotCurrent} />
              ) : (
                <div
                  className={styles.dot}
                  style={{ background: DOT_COLOR[edition.color] }}
                />
              )}
              <div className={edition.current ? `${styles.nameCurrent} gradient-text` : styles.name}>
                {edition.name}
              </div>
              <div className={edition.current ? styles.noteCurrent : styles.note}>
                {edition.note}
              </div>
            </div>
          ))}
        </div>
        <p className={styles.footer}>
          Agora chegamos à quinta. E talvez a pergunta mais importante não
          seja apenas o que já construímos.
          <br />
          Mas: <span className="gradient-text">o que ainda podemos imaginar?</span>
        </p>
      </div>
    </section>
  );
}
