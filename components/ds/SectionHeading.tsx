import type { ComponentPropsWithoutRef, ReactNode } from "react";
import type { SurfaceTone } from "./StatBlock";

export type SectionHeadingProps = ComponentPropsWithoutRef<"div"> & {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: SurfaceTone;
};

/** Sobre naranja la regla naranja desaparece: pasa a negro. */
const RULE: Record<SurfaceTone, string> = {
  default: "var(--interra-orange)",
  inverse: "var(--interra-orange)",
  accent: "var(--interra-black)",
};

const EYEBROW: Record<SurfaceTone, string> = {
  default: "var(--text-secondary)",
  inverse: "rgb(255 255 255 / 0.72)",
  accent: "var(--interra-black)",
};

const TITLE: Record<SurfaceTone, string> = {
  default: "var(--text-primary)",
  inverse: "#fff",
  accent: "var(--interra-black)",
};

const BODY: Record<SurfaceTone, string> = {
  default: "var(--text-secondary)",
  inverse: "rgb(255 255 255 / 0.76)",
  accent: "var(--interra-black)",
};

/** Regla de 28×2px naranja + eyebrow: la firma de sección del sistema. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  style,
  ...rest
}: SectionHeadingProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth: align === "center" ? 720 : 620,
        textAlign: align,
        marginInline: align === "center" ? "auto" : undefined,
        ...style,
      }}
      {...rest}
    >
      {eyebrow ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: align === "center" ? "center" : "flex-start",
            marginBottom: 16,
          }}
        >
          <span className="ds-rule" style={{ background: RULE[tone] }} />
          <span
            className="ds-eyebrow"
            style={{
              color: EYEBROW[tone],
            }}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2
        style={{
          fontSize: "var(--fs-display-md)",
          lineHeight: "var(--lh-snug)",
          letterSpacing: "var(--ls-display)",
          color: TITLE[tone],
          textWrap: "balance",
        }}
      >
        {title}
      </h2>

      {description ? (
        <p
          style={{
            marginTop: 16,
            fontSize: "var(--fs-body-lg)",
            lineHeight: "var(--lh-body)",
            color: BODY[tone],
            textWrap: "pretty",
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
