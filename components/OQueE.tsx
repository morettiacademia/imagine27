import styles from "./OQueE.module.css";
import { O_QUE_E_STATS } from "@/lib/data";

export default function OQueE() {
  return (
    <section id="tese" className={styles.section}>
      <div className={styles.grid}>
        <div>
          <div className={styles.eyebrow}>O QUE É O IMAGINE</div>
          <h2 className={styles.title}>O que é o IMAGINE?</h2>
          <p className={styles.text}>
            O Magic Makers Ao Vivo ·{" "}
            <strong style={{ color: "var(--magenta)" }}>IMAGINE</strong> é
            uma experiência criada para profissionais do turismo que
            acreditam que sempre existe uma nova possibilidade esperando
            para ser descoberta. São dois dias de{" "}
            <strong style={{ color: "var(--white)" }}>conteúdo</strong>,{" "}
            <strong style={{ color: "var(--white)" }}>relacionamento</strong>
            , <strong style={{ color: "var(--white)" }}>experiências</strong>{" "}
            e <strong style={{ color: "var(--white)" }}>comunidade</strong>{" "}
            para ampliar perspectivas, provocar novas ideias e abrir{" "}
            <strong style={{ color: "var(--white)" }}>
              novos caminhos
            </strong>{" "}
            para o seu negócio. Não se trata apenas de aprender mais. Trata-se
            de enxergar diferente.
          </p>
        </div>
        <div className={styles.statGrid}>
          {O_QUE_E_STATS.map((stat, i) =>
            "big" in stat ? (
              <div key={i} className={styles.stat} data-color={stat.color}>
                <div className={styles.statBig}>{stat.big}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ) : (
              <div key={i} className={styles.stat} data-color={stat.color}>
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
