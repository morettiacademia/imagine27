import styles from "./Logo.module.css";

type Variant = "nav" | "hero" | "footer";

const HEIGHT: Record<Variant, string> = {
  nav: "24px",
  hero: "clamp(44px, 9vw, 104px)",
  footer: "22px",
};

export default function Logo({ variant = "nav" }: { variant?: Variant }) {
  return (
    <img
      src="/brand/imagine-wordmark-light.png"
      alt="IMAGINE"
      className={styles.logo}
      style={{ height: HEIGHT[variant] }}
    />
  );
}
