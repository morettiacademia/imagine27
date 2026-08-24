import Logo from "./Logo";
import styles from "./Hero.module.css";
import { CTA_LABEL, INFO_STRIP, LOTE_LABEL } from "@/lib/data";

export default function Hero() {
  return (
    <section id="evento" className={styles.hero}>
      <div className={styles.bgPhoto} />
      <div className={styles.bgFade} />
      <div className={styles.rayLeft} />
      <div className={styles.rayRight} />

      <div className={styles.content}>
        <div className={styles.dateLine}>15 E 16 DE MAIO DE 2027 · BARUERI, SP</div>
        <div className={styles.logoWrap}>
          <Logo variant="hero" />
        </div>
        <div className={styles.subLabel}>MAGIC MAKERS AO VIVO 2027</div>

        <h1 className={styles.h1}>O mundo está acelerando.</h1>
        <h2 className={`${styles.h2} gradient-text`}>
          Você não precisa correr sem saber para onde está indo.
        </h2>
        <p className={styles.lead}>
          Dois dias para entender o que está mudando, escolher o que
          realmente importa e imaginar o negócio e a vida que você quer
          construir.
        </p>

        <div className={styles.ctas}>
          <a href="#ingressos" className="btn btn-primary">
            {CTA_LABEL} →
          </a>
          <a href="#tese" className={styles.secondaryLink}>
            Descobrir o IMAGINE ↓
          </a>
        </div>
        <div className={styles.scarcity}>
          {LOTE_LABEL} disponível · valores sujeitos a reajuste na virada de
          lote
        </div>
      </div>

      <div className={styles.infoStrip}>
        {INFO_STRIP.map((item) => (
          <div key={item.label} className={styles.infoItem}>
            <div className={styles.infoLabel}>{item.label}</div>
            <div className={styles.infoValue}>{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
