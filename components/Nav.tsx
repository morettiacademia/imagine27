import Logo from "./Logo";
import styles from "./Nav.module.css";
import { CTA_LABEL, NAV_LINKS } from "@/lib/data";

export default function Nav() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Logo variant="nav" />
        <span className={styles.tagline}>MAGIC MAKERS AO VIVO 2027</span>
      </div>
      <nav className={styles.links}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label.toUpperCase()}
          </a>
        ))}
      </nav>
      <a href="#ingressos" className="btn btn-primary btn-sm">
        {CTA_LABEL}
      </a>
    </header>
  );
}
