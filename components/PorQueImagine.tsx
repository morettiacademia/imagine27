"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import styles from "./PorQueImagine.module.css";
import { HERO_CTA_LABEL } from "@/lib/data";

function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ""}`}
    >
      {children}
    </div>
  );
}

export default function PorQueImagine() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPhoto} />
      <div className={styles.bgFade} />
      <div className={styles.rayLeft} />
      <div className={styles.rayRight} />
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>
            Por que você não pode perder o Magic Makers Ao Vivo · IMAGINE?
          </h2>
        </Reveal>

        <Reveal>
          <p className={styles.lead}>
            Talvez o que esteja faltando para o próximo passo da sua
            agência não seja mais informação.
          </p>
        </Reveal>
        <Reveal>
          <p className={`${styles.emphasis} gradient-text`}>Seja clareza.</p>
        </Reveal>
        <Reveal>
          <p className={styles.lead}>
            Durante dois dias, você sai da rotina para olhar o seu negócio
            de outro lugar — e volta com mais clareza sobre para onde quer
            ir.
          </p>
        </Reveal>

        <Reveal>
          <p className={styles.lead}>
            Mas existe algo que nenhuma aula gravada consegue reproduzir:
          </p>
        </Reveal>
        <Reveal>
          <p className={`${styles.big} gradient-text`}>AS PESSOAS.</p>
        </Reveal>
        <Reveal>
          <p className={styles.lead}>
            Você vai estar entre profissionais que entendem, na prática, o
            que é transformar a paixão por Orlando em negócio — e que
            também estão em busca do próximo passo.
          </p>
        </Reveal>

        <Reveal>
          <p className={styles.statement}>
            Não queremos que você volte para casa apenas inspirado.
          </p>
        </Reveal>
        <Reveal>
          <p className={`${styles.statement} gradient-text`}>
            Queremos que você volte enxergando o seu próximo passo de
            outra maneira.
          </p>
        </Reveal>

        <Reveal>
          <div className={styles.ctaWrap}>
            <a href="#ingressos" className="btn btn-primary">
              {HERO_CTA_LABEL} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
