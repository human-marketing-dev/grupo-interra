import type { ComponentPropsWithoutRef } from "react";

export type BadgeTone =
  | "available"
  | "reserved"
  | "sold"
  | "accent"
  | "navy"
  | "neutral";

export type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: BadgeTone;
  dot?: boolean;
};

export function Badge({
  tone = "neutral",
  dot = false,
  children,
  className,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={["ds-badge", `ds-badge--${tone}`, className]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {dot ? <span className="ds-badge__dot" /> : null}
      {children}
    </span>
  );
}
