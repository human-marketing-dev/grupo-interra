import type { ComponentPropsWithoutRef } from "react";

export type SelectOption = string | { value: string; label: string };

export type SelectProps = ComponentPropsWithoutRef<"select"> & {
  label?: string;
  options?: readonly SelectOption[];
};

export function Select({
  label,
  options = [],
  className,
  ...rest
}: SelectProps) {
  return (
    <label style={{ display: "block" }}>
      {label ? <span className="ds-field-label">{label}</span> : null}
      <select
        className={["ds-field", className].filter(Boolean).join(" ")}
        {...rest}
      >
        {options.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const text = typeof option === "string" ? option : option.label;
          return (
            <option key={value} value={value}>
              {text}
            </option>
          );
        })}
      </select>
    </label>
  );
}
