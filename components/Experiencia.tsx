import Image from "next/image";
import styles from "./Experiencia.module.css";
import {
  EXPERIENCE_FORCES,
  GALLERY,
  PREVIOUS_EDITION_VIDEO_ID,
  PREVIOUS_EDITION_VIDEO_START,
} from "@/lib/data";

export default function Experiencia() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>A EXPERIÊNCIA MAGIC MAKERS</div>
          <h2 className={styles.title}>
            Mais do que conteúdo. Uma experiência para viver.
          </h2>
          <p className={styles.lead}>
            Algumas ideias surgem no palco. Outras aparecem durante uma
            conversa no almoço. Em uma conexão inesperada. Em uma experiência.
            Em uma pergunta. Em alguém que você ainda não conhecia.
          </p>
          <p className={styles.lead}>
            Por isso, o IMAGINE foi pensado para criar encontros que
            continuem fazendo sentido depois que o evento terminar.
          </p>
          <div className={styles.forces}>
            {EXPERIENCE_FORCES.map((f) => (
              <span key={f.label} className={styles.force} data-color={f.color}>
                {f.label}
              </span>
            ))}
          </div>
          <p className={`${styles.closing} gradient-text`}>
            Quatro forças capazes de abrir novos caminhos e novas
            possibilidades.
          </p>
        </div>
        <div className={styles.videoCaption}>REVEJA A EDIÇÃO ANTERIOR</div>
        <div className={styles.videoWrap}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${PREVIOUS_EDITION_VIDEO_ID}?start=${PREVIOUS_EDITION_VIDEO_START}`}
            title="Vídeo da edição anterior do Magic Makers Ao Vivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
        <div className={styles.gallery}>
          {GALLERY.map((photo) => (
            <div key={photo.src} className={styles.photoWrap}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="eager"
                sizes="(max-width: 700px) 100vw, 25vw"
                className={styles.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
