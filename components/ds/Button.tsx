import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "inverse"
  | "inverse-outline";

export type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof CommonProps> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof CommonProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function classes({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
}: CommonProps) {
  return [
    "ds-btn",
    `ds-btn--${variant}`,
    `ds-btn--${size}`,
    fullWidth ? "ds-btn--block" : null,
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

/**
 * Un solo primario por vista — el naranja es acento, no color de relleno.
 * Los CTA se escriben verbo + objeto, sin signos de admiración.
 */
export function Button(props: ButtonProps) {
  const {
    variant,
    size,
    fullWidth,
    iconLeft,
    iconRight,
    children,
    className,
    ...rest
  } = props;

  const content = (
    <>
      {iconLeft}
      {children}
      {iconRight}
    </>
  );
  const cls = classes({ variant, size, fullWidth, className });

  if (typeof rest.href === "string") {
    const { href, ...linkProps } = rest as ButtonAsLink;
    return (
      <Link href={href} className={cls} {...linkProps}>
        {content}
      </Link>
    );
  }

  const buttonProps = rest as Omit<ButtonAsButton, keyof CommonProps>;
  return (
    <button className={cls} {...buttonProps}>
      {content}
    </button>
  );
}
