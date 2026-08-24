import styles from "./Logo.module.css";

type Variant = "nav" | "hero" | "footer";

// Intrinsic size of /brand/imagine-wordmark-light.png
const WORDMARK_RATIO = 1200 / 231;

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
      style={{
        height: HEIGHT[variant],
        width: `calc(${HEIGHT[variant]} * ${WORDMARK_RATIO})`,
      }}
    />
  );
}
