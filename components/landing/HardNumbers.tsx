import { Icon } from "@/components/ds/Icon";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { HARD_NUMBERS } from "@/content/site";

/**
 * Banda de cifras del portafolio histórico, entre Desarrollos y Comercial.
 * Va sobre naranja: el texto, los iconos y las reglas van en negro porque el
 * blanco solo alcanza 2.51:1 sobre #F18A00.
 */
export function HardNumbers() {
  return (
    <section className="ds-section" style={{ background: "var(--surface-accent)" }}>
      <div className="ds-container">
        <SectionHeading
          tone="accent"
          eyebrow={HARD_NUMBERS.eyebrow}
          title={HARD_NUMBERS.title}
        />

        <div className="mt-13 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 xl:grid-cols-5">
          {HARD_NUMBERS.columns.map((column) => (
            <div
              key={column.category}
              style={{
                borderTop: "var(--border-width-strong) solid var(--interra-black)",
                paddingTop: 22,
              }}
            >
              <Icon name={column.icon} size={38} color="var(--interra-black)" />

              <div className="mt-4.5">
                <div
                  className="ds-eyebrow"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    color: "var(--interra-black)",
                  }}
                >
                  Proyectos
                </div>
                <div
                  className="ds-eyebrow"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    color: "var(--interra-black)",
                    marginTop: 3,
                  }}
                >
                  {column.category}
                </div>
              </div>

              <dl className="m-0 mt-6">
                <dt
                  style={{
                    fontSize: 13,
                    color: "var(--interra-black)",
                    marginBottom: 4,
                  }}
                >
                  {column.primary.label}
                </dt>
                <dd
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-display)",
                    fontWeight: "var(--fw-bold)",
                    fontSize: "clamp(30px, 2.6vw, 40px)",
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    color: "var(--interra-black)",
                  }}
                >
                  {column.primary.value}
                </dd>

                {/* Etiqueta y cifra en el mismo renglón: con dos renglones por
                    dato, la columna de Comerciales (4 datos) doblaba la altura
                    de Residenciales (2) y dejaba el bloque muy disparejo. */}
                <div className="mt-6">
                  {column.secondary.map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: 12,
                        paddingBlock: 9,
                        borderTop: "var(--border-width) solid rgb(0 0 0 / 0.24)",
                      }}
                    >
                      <dt style={{ fontSize: 13, color: "var(--interra-black)" }}>
                        {stat.label}
                      </dt>
                      <dd
                        style={{
                          margin: 0,
                          fontFamily: "var(--font-display)",
                          fontWeight: "var(--fw-semibold)",
                          fontSize: 15,
                          color: "var(--interra-black)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
