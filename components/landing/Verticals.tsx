import { Icon } from "@/components/ds/Icon";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { VERTICALS } from "@/content/site";

export function Verticals() {
  return (
    <section id="verticales" className="ds-section" style={{ background: "#fff" }}>
      <div className="ds-container">
        <SectionHeading
          eyebrow="Verticales"
          title="Tres formas de invertir en tierra"
          description="Cada proyecto nace de un estudio de vocación del suelo: qué debe construirse ahí y para quién."
        />

        <div className="mt-13 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((vertical) => (
            <article
              key={vertical.number}
              style={{
                border: "var(--border-width) solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="ds-hatch"
                style={{ height: 150, position: "relative" }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, rgb(0 38 57 / 0), rgb(0 38 57 / 0.92))",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    left: 24,
                    bottom: 18,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Icon
                    name={vertical.icon}
                    size={22}
                    color="var(--interra-orange)"
                  />
                  <span
                    className="ds-eyebrow"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.16em",
                      color: "#fff",
                    }}
                  >
                    {vertical.number} · {vertical.kicker}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col px-6 pt-7 pb-[30px]">
                <h3 style={{ fontSize: "var(--fs-heading-md)" }}>
                  {vertical.title}
                </h3>
                <p
                  style={{
                    margin: "12px 0 0",
                    flex: 1,
                    fontSize: "var(--fs-body-sm)",
                    lineHeight: "var(--lh-body)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {vertical.description}
                </p>
                <div
                  style={{
                    marginTop: 22,
                    paddingTop: 18,
                    borderTop: "var(--border-width) solid var(--border-subtle)",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: 12,
                    fontSize: 14,
                    color: "var(--text-muted)",
                  }}
                >
                  <span>{vertical.minimum}</span>
                  <span
                    className="ds-eyebrow"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      color: "var(--interra-orange)",
                    }}
                  >
                    {vertical.cta}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
