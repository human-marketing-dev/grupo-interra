import type { ComponentPropsWithoutRef, ReactNode } from "react";

export type CheckboxProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "type" | "children"
> & {
  label: ReactNode;
};

/** Borde 2px — junto al borde superior de las estadísticas, el único 2px del sistema. */
export function Checkbox({ label, className, ...rest }: CheckboxProps) {
  return (
    <label className={["ds-checkbox", className].filter(Boolean).join(" ")}>
      <input type="checkbox" {...rest} />
      <span className="ds-checkbox__box" aria-hidden />
      <span>{label}</span>
    </label>
  );
}
