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
        <h2 className={styles.title}>CINCO EDIÇÕES, UMA EVOLUÇÃO.</h2>
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
          Depois de acelerar, chegou a hora de escolher para onde queremos
          ir.
        </p>
      </div>
    </section>
  );
}
