import Image from "next/image";
import Link from "next/link";
import { Badge, type BadgeTone } from "./Badge";

export type PropertyStatus = Extract<
  BadgeTone,
  "available" | "reserved" | "sold"
>;

export type PropertyCardProps = {
  name: string;
  location: string;
  category?: string;
  status?: PropertyStatus;
  statusLabel?: string;
  area: string;
  price: string;
  /** Ruta en /public. Sin imagen cae al placeholder de trama navy. */
  image?: string;
  href?: string;
  className?: string;
};

/**
 * Invierte el orden de una tarjeta normal: imagen con scrim y datos encima,
 * luego un pie con ubicación, superficie y precio separados por hairline.
 */
export function PropertyCard({
  name,
  location,
  category = "Residencial",
  status = "available",
  statusLabel = "Disponible",
  area,
  price,
  image,
  href = "#proyectos",
  className,
}: PropertyCardProps) {
  return (
    <Link
      href={href}
      className={["ds-property", className].filter(Boolean).join(" ")}
    >
      <div
        className={image ? undefined : "ds-hatch--tight"}
        style={{ position: "relative", aspectRatio: "4 / 3", overflow: "hidden" }}
      >
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 400px"
            style={{ objectFit: "cover" }}
          />
        ) : null}

        <div className="ds-property__scrim" />

        <div style={{ position: "absolute", top: 16, left: 16 }}>
          <Badge tone={status} dot>
            {statusLabel}
          </Badge>
        </div>

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
            {category}
          </div>
          <h3 style={{ fontSize: 24, color: "#fff", letterSpacing: "-0.01em" }}>
            {name}
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
          {location}
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
          <span style={{ fontSize: 14, color: "var(--text-muted)" }}>{area}</span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--fw-bold)",
              fontSize: 17,
            }}
          >
            {price}
          </span>
        </div>
      </div>
    </Link>
  );
}
