import styles from "./Pilares.module.css";
import { PILARES } from "@/lib/data";

const COLOR_VAR: Record<string, string> = {
  cyan: "var(--cyan)",
  purple: "var(--purple)",
  magenta: "var(--magenta)",
  coral: "var(--coral)",
};

function PilarIcon({ shape }: { shape: (typeof PILARES)[number]["shape"] }) {
  switch (shape) {
    case "ring":
      return <div className={styles.iconRing} />;
    case "diamond":
      return <div className={styles.iconDiamond} />;
    case "dot":
      return <div className={styles.iconDot} />;
    case "sparkle":
      return (
        <div className={styles.iconSparkle}>
          <span />
          <span />
          <span />
          <span />
        </div>
      );
  }
}

export default function Pilares() {
  return (
    <section id="pilares" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>OS QUATRO PILARES</div>
          <h2 className={styles.title}>NÃO FAÇA APENAS MAIS. IMAGINE MELHOR.</h2>
        </div>
        <div className={styles.grid}>
          {PILARES.map((p) => (
            <div key={p.key} className={styles.card} data-color={p.color}>
              <PilarIcon shape={p.shape} />
              <div className={styles.cardEyebrow} style={{ color: COLOR_VAR[p.color] }}>
                {p.eyebrow}
              </div>
              <div className={styles.cardTitle}>{p.title}</div>
              <p className={styles.cardText}>{p.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.closing}>
          {PILARES.map((p) => (
            <span key={p.key} style={{ color: COLOR_VAR[p.color] }}>
              {p.word}{" "}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
