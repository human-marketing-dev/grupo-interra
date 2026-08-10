import type { ComponentPropsWithoutRef, ReactNode } from "react";

type FieldChrome = {
  label?: string;
  hint?: string;
  error?: string;
};

export type InputProps = ComponentPropsWithoutRef<"input"> &
  FieldChrome & {
    textarea?: false;
  };

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> &
  FieldChrome & {
    textarea: true;
  };

function Chrome({
  label,
  hint,
  error,
  children,
}: FieldChrome & { children: ReactNode }) {
  return (
    <label style={{ display: "block" }}>
      {label ? <span className="ds-field-label">{label}</span> : null}
      {children}
      {error || hint ? (
        <span
          className={["ds-field-hint", error ? "ds-field-hint--error" : null]
            .filter(Boolean)
            .join(" ")}
        >
          {error || hint}
        </span>
      ) : null}
    </label>
  );
}

/** Micro-labels en MAYÚSCULAS; anillo de foco naranja al 38%. */
export function Input(props: InputProps | TextareaProps) {
  const { textarea = false, label, hint, error, className, ...rest } = props;
  const fieldClass = ["ds-field", className].filter(Boolean).join(" ");
  const invalid = error ? true : undefined;

  if (textarea) {
    const { rows = 4, ...textareaProps } = rest as ComponentPropsWithoutRef<"textarea">;
    return (
      <Chrome label={label} hint={hint} error={error}>
        <textarea
          rows={rows}
          aria-invalid={invalid}
          className={fieldClass}
          {...textareaProps}
        />
      </Chrome>
    );
  }

  const { type = "text", ...inputProps } = rest as ComponentPropsWithoutRef<"input">;
  return (
    <Chrome label={label} hint={hint} error={error}>
      <input
        type={type}
        aria-invalid={invalid}
        className={fieldClass}
        {...inputProps}
      />
    </Chrome>
  );
}
