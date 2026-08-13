import type { ComponentPropsWithoutRef } from "react";

/**
 * `accent` = sobre el naranja de marca. Ahí el blanco solo alcanza 2.51:1, así
 * que texto y regla van en navy (6.27:1) en vez de invertirse.
 */
export type SurfaceTone = "default" | "inverse" | "accent";

export type StatBlockProps = ComponentPropsWithoutRef<"div"> & {
  value: string;
  label: string;
  tone?: SurfaceTone;
};

const RULE: Record<SurfaceTone, string> = {
  default: "var(--interra-orange)",
  inverse: "var(--interra-orange)",
  accent: "var(--interra-navy)",
};

const VALUE: Record<SurfaceTone, string> = {
  default: "var(--text-primary)",
  inverse: "#fff",
  accent: "var(--interra-navy)",
};

const LABEL: Record<SurfaceTone, string> = {
  default: "var(--text-secondary)",
  inverse: "rgb(255 255 255 / 0.7)",
  accent: "var(--navy-700)",
};

/** Cifras siempre con unidad y contexto: "+1,200 ha", no "1200". */
export function StatBlock({
  value,
  label,
  tone = "default",
  style,
  ...rest
}: StatBlockProps) {
  return (
    <div
      style={{
        borderTop: `var(--border-width-strong) solid ${RULE[tone]}`,
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
          color: VALUE[tone],
        }}
      >
        {value}
      </div>
      <div style={{ marginTop: 8, fontSize: 14, color: LABEL[tone] }}>
        {label}
      </div>
    </div>
  );
}
