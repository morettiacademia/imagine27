import Logo from "./Logo";
import styles from "./Footer.module.css";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <Logo variant="footer" />
          <div className={styles.brandNote}>
            Magic Makers Ao Vivo 2027 · uma realização Academia da Magia
          </div>
        </div>
        <div className={styles.linkGroups}>
          <div>
            <div className={styles.groupTitle}>EVENTO</div>
            <div className={styles.linkList}>
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className={styles.groupTitle}>LOCAL</div>
            <div className={styles.address}>
              Apogeo Nobre Alphaville
              <br />
              Av. Tamboré, 1009, Alphaville, SP
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        © 2027 Academia da Magia · Magic Makers Ao Vivo · Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
