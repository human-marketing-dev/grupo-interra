import type { ComponentPropsWithoutRef } from "react";
import { Icon, type IconName } from "./Icon";

export type FeatureItemProps = ComponentPropsWithoutRef<"div"> & {
  icon?: IconName;
  title: string;
  description?: string;
  inverse?: boolean;
};

export function FeatureItem({
  icon = "check",
  title,
  description,
  inverse = false,
  style,
  ...rest
}: FeatureItemProps) {
  return (
    <div style={{ display: "flex", gap: 16, ...style }} {...rest}>
      <div
        style={{
          width: 44,
          height: 44,
          flex: "0 0 44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "var(--radius-md)",
          background: inverse
            ? "rgb(255 255 255 / 0.08)"
            : "var(--surface-accent-soft)",
          color: "var(--interra-orange)",
        }}
      >
        <Icon name={icon} size={20} />
      </div>
      <div>
        <h4
          style={{ fontSize: 17, color: inverse ? "#fff" : "var(--text-primary)" }}
        >
          {title}
        </h4>
        {description ? (
          <p
            style={{
              marginTop: 6,
              fontSize: 15,
              lineHeight: 1.55,
              color: inverse
                ? "rgb(255 255 255 / 0.7)"
                : "var(--text-secondary)",
            }}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
