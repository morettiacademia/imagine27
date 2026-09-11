"use client";

import { useState } from "react";
import styles from "./Faq.module.css";
import { FAQ_ITEMS, WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from "@/lib/data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.eyebrow}>PERGUNTAS FREQUENTES</div>
          <h2 className={styles.title}>FAQ</h2>
        </div>
        <div className={styles.list}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={styles.icon}>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className={styles.answer}>{item.a}</p>}
              </div>
            );
          })}
        </div>
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Ainda tem dúvidas? Nossa equipe pode ajudar.
          </p>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            FALAR COM A EQUIPE DO MAGIC MAKERS
          </a>
        </div>
      </div>
    </section>
  );
}
