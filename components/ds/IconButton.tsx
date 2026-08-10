import type { ComponentPropsWithoutRef } from "react";

export type IconButtonVariant = "outline" | "solid" | "accent" | "inverse";

export type IconButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "aria-label"
> & {
  variant?: IconButtonVariant;
  size?: number;
  label: string;
};

export function IconButton({
  variant = "outline",
  size = 44,
  label,
  children,
  className,
  style,
  type = "button",
  ...rest
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={["ds-iconbtn", `ds-iconbtn--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      style={{ width: size, height: size, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
