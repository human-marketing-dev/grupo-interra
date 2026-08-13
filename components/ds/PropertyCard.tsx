import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge, type BadgeTone } from "./Badge";

export type PropertyStatus = Extract<
  BadgeTone,
  "available" | "reserved" | "sold"
>;

export type PropertyImage = {
  src: string;
  alt: string;
  /** "contain" para planos y mapas, que no se pueden recortar. */
  fit?: "cover" | "contain";
};

/** Forma canónica de un desarrollo: la comparten tarjeta y modal. */
export type Property = {
  name: string;
  location: string;
  category: string;
  status: PropertyStatus;
  statusLabel: string;
  /** Superficie, número de lotes o etapa — lo que distingue al desarrollo. */
  meta: string;
  price: string;
  description?: string;
  images?: PropertyImage[];
};

export type PropertyCardProps = {
  property: Property;
  /** Con handler la tarjeta abre el modal; sin él navega a `href`. */
  onSelect?: () => void;
  href?: string;
  className?: string;
};

/**
 * Invierte el orden de una tarjeta normal: imagen con scrim y datos encima,
 * luego un pie con ubicación, superficie y precio separados por hairline.
 */
export function PropertyCard({
  property,
  onSelect,
  href = "#contacto",
  className,
}: PropertyCardProps) {
  const cover = property.images?.[0];
  const extra = (property.images?.length ?? 0) - 1;
  const classes = ["ds-property", className].filter(Boolean).join(" ");

  const body: ReactNode = (
    <>
      <div
        className={cover ? undefined : "ds-hatch--tight"}
        style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}
      >
        {cover ? (
          <Image
            src={cover.src}
            alt=""
            fill
            sizes="(max-width: 768px) 110vw, (max-width: 1100px) 55vw, 520px"
            style={{ objectFit: "cover" }}
          />
        ) : null}

        <div className="ds-property__scrim" />

        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <Badge tone={property.status} dot>
            {property.statusLabel}
          </Badge>
        </div>

        {extra > 0 ? (
          <span
            className="ds-eyebrow"
            style={{
              position: "absolute",
              top: 16,
              right: 16,
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "rgb(255 255 255 / 0.86)",
              background: "rgb(0 24 36 / 0.55)",
              padding: "5px 9px",
              borderRadius: "var(--radius-sm)",
            }}
          >
            +{extra} fotos
          </span>
        ) : null}

        <div
          style={{
            position: "absolute",
            left: 20,
            right: 20,
            bottom: 18,
            color: "#fff",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              fontWeight: "var(--fw-semibold)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--interra-orange)",
              marginBottom: 6,
            }}
          >
            {property.category}
          </div>
          <h3 style={{ fontSize: 24, color: "#fff", letterSpacing: "-0.01em" }}>
            {property.name}
          </h3>
        </div>
      </div>

      <div style={{ padding: "20px 20px 22px" }}>
        <div
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 14,
          }}
        >
          {property.location}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            gap: 12,
            borderTop: "var(--border-width) solid var(--border-subtle)",
            paddingTop: 14,
          }}
        >
          <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
            {property.meta}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-bold)",
              fontSize: 17,
            }}
          >
            {property.price}
          </span>
        </div>
      </div>
    </>
  );

  if (onSelect) {
    return (
      <button
        type="button"
        onClick={onSelect}
        className={classes}
        style={{ textAlign: "left", cursor: "pointer", padding: 0 }}
        aria-haspopup="dialog"
        aria-label={`Ver ${property.name} en ${property.location}`}
      >
        {body}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {body}
    </Link>
  );
}
