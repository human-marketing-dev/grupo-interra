import type { ComponentPropsWithoutRef } from "react";

export type StatBlockProps = ComponentPropsWithoutRef<"div"> & {
  value: string;
  label: string;
  inverse?: boolean;
};

/** Cifras siempre con unidad y contexto: "+1,200 ha", no "1200". */
export function StatBlock({
  value,
  label,
  inverse = false,
  style,
  ...rest
}: StatBlockProps) {
  return (
    <div
      style={{
        borderTop: "var(--border-width-strong) solid var(--interra-orange)",
        paddingTop: 16,
        ...style,
      }}
      {...rest}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)",
          fontSize: "clamp(32px, 3.4vw, 44px)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: inverse ? "#fff" : "var(--text-primary)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 14,
          color: inverse ? "rgb(255 255 255 / 0.7)" : "var(--text-secondary)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
