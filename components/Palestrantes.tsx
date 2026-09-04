import Image from "next/image";
import styles from "./Palestrantes.module.css";
import { SPEAKERS } from "@/lib/data";

export default function Palestrantes() {
  return (
    <section id="palestrantes" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>PALESTRANTES</div>
          <h2 className={styles.title}>
            QUEM VAI NOS AJUDAR A IMAGINAR O QUE VEM DEPOIS?
          </h2>
        </div>
        <div className={styles.grid}>
          {SPEAKERS.map((speaker) => (
            <div key={speaker.name} className={styles.card}>
              <div className={styles.avatarWrap}>
                <Image
                  src={speaker.photo}
                  alt={speaker.name}
                  fill
                  sizes="64px"
                  className={styles.avatar}
                />
              </div>
              <div className={styles.name}>{speaker.name}</div>
              <div
                className={styles.specialty}
                style={{ color: `var(--${speaker.color})` }}
              >
                {speaker.specialty}
              </div>
              <p className={styles.bio}>{speaker.bio}</p>
            </div>
          ))}
        </div>
        <div className={styles.together}>
          <div className={styles.togetherTitle}>JUNTOS</div>
          <p className={styles.togetherText}>
            Três trajetórias diferentes, uma mesma visão. Camila traz a
            execução, Joice a essência do turismo, Paulo a estratégia.
            Juntos constroem a Academia da Magia com um propósito: ajudar
            profissionais do turismo a construírem negócios melhores sem
            perder o que torna essa profissão extraordinária, as pessoas,
            as experiências e as conexões humanas.
          </p>
        </div>
        <div className={styles.note}>
          <span className={styles.noteIcon}>✨</span>
          <div>
            <div className={styles.noteTitle}>Muito mais gente por vir</div>
            <p className={styles.noteText}>
              Estes são os fundadores da Academia da Magia. Novos nomes e
              muito mais conteúdo serão revelados em breve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
