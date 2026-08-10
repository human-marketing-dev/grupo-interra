import type { ComponentPropsWithoutRef } from "react";

export type CardVariant = "default" | "subtle" | "inverse" | "accent";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  variant?: CardVariant;
  interactive?: boolean;
  padding?: number;
};

/** Tarjetas planas por defecto; solo las enlazadas se elevan. */
export function Card({
  variant = "default",
  interactive = false,
  padding = 32,
  children,
  className,
  style,
  ...rest
}: CardProps) {
  return (
    <div
      className={[
        "ds-card",
        `ds-card--${variant}`,
        interactive ? "ds-card--interactive" : null,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ padding, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
