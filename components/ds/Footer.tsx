import Image from "next/image";
import Link from "next/link";

export type FooterColumn = {
  title: string;
  links: { label: string; href: string }[];
};

export type FooterProps = {
  /** "accent" = fondo naranja: el texto pasa a navy porque el blanco no contrasta. */
  tone?: "inverse" | "accent";
  logoSrc?: string;
  description?: string;
  columns?: FooterColumn[];
  legal?: string;
};

export function Footer({
  tone = "inverse",
  logoSrc,
  description = "Desarrollo y comercialización de tierra con vocación residencial, industrial y comercial.",
  columns = [],
  legal = `© ${new Date().getFullYear()} Grupo Interra. Todos los derechos reservados.`,
}: FooterProps) {
  const accent = tone === "accent";
  // Sobre naranja el blanco solo alcanza 2.51:1: todo el texto va en navy.
  const c = {
    bg: accent ? "var(--surface-accent)" : "var(--interra-navy)",
    text: accent ? "var(--interra-navy)" : "#fff",
    muted: accent ? "var(--navy-700)" : "rgb(255 255 255 / 0.62)",
    title: accent ? "var(--interra-navy)" : "var(--interra-orange)",
    rule: accent ? "rgb(0 38 57 / 0.22)" : "var(--border-inverse)",
    legal: accent ? "var(--navy-700)" : "rgb(255 255 255 / 0.5)",
  };

  return (
    <footer
      className={accent ? "ds-footer ds-footer--accent" : "ds-footer"}
      style={{ background: c.bg, color: c.text }}
    >
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
                color: c.text,
              }}
            >
              INTERRA
            </span>
          )}
          <p
            style={{
              marginTop: 18,
              maxWidth: 300,
              fontSize: 15,
              color: c.muted,
            }}
          >
            {description}
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <div
              className="ds-eyebrow"
              style={{
                letterSpacing: "0.14em",
                color: c.title,
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
                  <Link href={link.href} className="ds-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: `var(--border-width) solid ${c.rule}` }}>
        <div
          className="ds-container"
          style={{
            paddingBlock: 20,
            fontSize: 13,
            color: c.legal,
          }}
        >
          {legal}
        </div>
      </div>
    </footer>
  );
}
