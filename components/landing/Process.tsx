import { SectionHeading } from "@/components/ds/SectionHeading";
import { PROCESS } from "@/content/site";

export function Process() {
  return (
    <section className="ds-section" style={{ background: "var(--interra-navy)" }}>
      <div className="ds-container">
        <SectionHeading
          inverse
          eyebrow="Cómo trabajamos"
          title="Del terreno en bruto a la escritura"
        />

        <div className="mt-13 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((phase) => (
            <div
              key={phase.step}
              style={{
                borderTop: "var(--border-width-strong) solid var(--interra-orange)",
                paddingTop: 18,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 13,
                  fontWeight: "var(--fw-bold)",
                  letterSpacing: "0.14em",
                  color: "var(--interra-orange)",
                }}
              >
                {phase.step}
              </div>
              <h4
                style={{
                  color: "#fff",
                  fontSize: "var(--fs-heading-sm)",
                  marginTop: 12,
                }}
              >
                {phase.title}
              </h4>
              <p
                style={{
                  margin: "10px 0 0",
                  fontSize: "var(--fs-body-sm)",
                  lineHeight: "var(--lh-body)",
                  color: "rgb(255 255 255 / 0.68)",
                }}
              >
                {phase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
