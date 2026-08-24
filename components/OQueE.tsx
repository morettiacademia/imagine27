import styles from "./OQueE.module.css";
import { O_QUE_E_STATS } from "@/lib/data";

export default function OQueE() {
  return (
    <section id="tese" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>O QUE É O IMAGINE</div>
          <h2 className={styles.title}>
            Não é um evento sobre turismo. Não é um evento sobre IA.
          </h2>
          <p className={styles.text}>
            Magic Makers Ao Vivo · IMAGINE é uma experiência presencial de
            dois dias criada para profissionais de turismo que querem
            compreender as transformações em curso e construir os próximos
            passos de seus negócios com inteligência, estratégia e
            propósito.
          </p>
        </div>
        <div className={styles.statGrid}>
          {O_QUE_E_STATS.map((stat, i) =>
            "big" in stat ? (
              <div key={i} className={styles.stat}>
                <div className={styles.statBig}>{stat.big}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ) : (
              <div key={i} className={styles.stat}>
                <div className={styles.statTitle}>{stat.title}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
