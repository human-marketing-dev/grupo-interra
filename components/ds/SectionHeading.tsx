import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type SectionHeadingProps = ComponentPropsWithoutRef<"div"> & {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
};

/** Regla de 28×2px naranja + eyebrow: la firma de sección del sistema. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  inverse = false,
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
          <span className="ds-rule" />
          <span
            className="ds-eyebrow"
            style={{
              color: inverse ? "rgb(255 255 255 / 0.72)" : "var(--text-secondary)",
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
          color: inverse ? "#fff" : "var(--text-primary)",
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
            color: inverse ? "rgb(255 255 255 / 0.76)" : "var(--text-secondary)",
            textWrap: "pretty",
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
