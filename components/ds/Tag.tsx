import type { ComponentPropsWithoutRef } from "react";

export type TagProps = ComponentPropsWithoutRef<"button"> & {
  active?: boolean;
};

/** Píldora (999px) — el único lugar del sistema donde se permite ese radio. */
export function Tag({
  active = false,
  children,
  className,
  type = "button",
  ...rest
}: TagProps) {
  return (
    <button
      type={type}
      data-active={active}
      aria-pressed={active}
      className={["ds-tag", className].filter(Boolean).join(" ")}
      {...rest}
    >
      {children}
    </button>
  );
}
