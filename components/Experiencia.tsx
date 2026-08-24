import Image from "next/image";
import styles from "./Experiencia.module.css";
import { GALLERY } from "@/lib/data";

export default function Experiencia() {
  return (
    <section id="experiencia" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>A EXPERIÊNCIA MAGIC MAKERS</div>
          <h2 className={styles.title}>
            Muito mais que dois dias de palestras.
          </h2>
          <p className={styles.lead}>
            Conteúdo, relacionamento, experiência e comunidade — vivido nas
            edições anteriores.
          </p>
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
