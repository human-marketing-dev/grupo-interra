import Image from "next/image";
import Link from "next/link";

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type FooterProps = {
  logoSrc?: string;
  columns?: FooterColumn[];
  legal?: string;
};

export function Footer({
  logoSrc,
  columns = [],
  legal = `© ${new Date().getFullYear()} Grupo Interra. Todos los derechos reservados.`,
}: FooterProps) {
  return (
    <footer style={{ background: "var(--interra-navy)", color: "#fff" }}>
      <div
        className="ds-container"
        style={{
          paddingBlock: "64px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 40,
        }}
      >
        <div>
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt="Grupo Interra"
              width={150}
              height={94}
              style={{ width: 150, height: "auto", display: "block" }}
            />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--fw-black)",
                letterSpacing: "var(--ls-logotype)",
                fontSize: 22,
              }}
            >
              INTERRA
            </span>
          )}
          <p
            style={{
              marginTop: 18,
              maxWidth: 280,
              fontSize: 15,
              color: "rgb(255 255 255 / 0.62)",
            }}
          >
            Desarrollo y comercialización de tierra con vocación residencial,
            industrial y comercial.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <div
              className="ds-eyebrow"
              style={{
                letterSpacing: "0.14em",
                color: "var(--interra-orange)",
                marginBottom: 16,
              }}
            >
              {column.title}
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    style={{ fontSize: 15, color: "rgb(255 255 255 / 0.78)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "var(--border-width) solid var(--border-inverse)" }}>
        <div
          className="ds-container"
          style={{
            paddingBlock: 20,
            fontSize: 13,
            color: "rgb(255 255 255 / 0.5)",
          }}
        >
          {legal}
        </div>
      </div>
    </footer>
  );
}
