import styles from "./Logo.module.css";

type Variant = "nav" | "hero" | "footer";

const VARIANTS: Record<
  Variant,
  {
    fontSize: string;
    barGap: string;
    barWidth: string;
    barHeight: string;
    marginLeft: string;
    marginBottom: string;
    gradient: boolean;
  }
> = {
  nav: {
    fontSize: "20px",
    barGap: "2px",
    barWidth: "14px",
    barHeight: "3px",
    marginLeft: "2px",
    marginBottom: "0",
    gradient: false,
  },
  hero: {
    fontSize: "clamp(52px, 10vw, 120px)",
    barGap: "clamp(4px, 1vw, 9px)",
    barWidth: "clamp(34px, 7vw, 80px)",
    barHeight: "clamp(7px, 1.4vw, 16px)",
    marginLeft: "clamp(4px, 1vw, 10px)",
    marginBottom: "clamp(6px, 1.4vw, 16px)",
    gradient: true,
  },
  footer: {
    fontSize: "18px",
    barGap: "2px",
    barWidth: "12px",
    barHeight: "3px",
    marginLeft: "2px",
    marginBottom: "0",
    gradient: false,
  },
};

export default function Logo({ variant = "nav" }: { variant?: Variant }) {
  const v = VARIANTS[variant];
  const bars = v.gradient
    ? [
        "linear-gradient(90deg, var(--magenta), var(--purple))",
        "linear-gradient(90deg, var(--purple), var(--blue))",
        "linear-gradient(90deg, var(--blue), var(--cyan))",
      ]
    : ["var(--magenta)", "var(--purple)", "var(--cyan)"];

  return (
    <div className={styles.logo} style={{ fontSize: v.fontSize }}>
      <span style={{ color: "var(--white)" }}>IMAGIN</span>
      <span
        className={styles.bars}
        style={{
          gap: v.barGap,
          marginLeft: v.marginLeft,
          marginBottom: v.marginBottom,
        }}
      >
        {bars.map((bg, i) => (
          <span
            key={i}
            className={styles.bar}
            style={{ width: v.barWidth, height: v.barHeight, background: bg }}
          />
        ))}
      </span>
    </div>
  );
}
