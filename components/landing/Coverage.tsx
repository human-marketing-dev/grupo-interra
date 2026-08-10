import { Icon } from "@/components/ds/Icon";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { COVERAGE } from "@/content/site";

export function Coverage() {
  return (
    <section id="cobertura" className="ds-section" style={{ background: "#fff" }}>
      <div className="ds-container grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Cobertura"
            title="Dónde tenemos reserva"
            description="Concentramos operación en el corredor Querétaro–Bajío, donde la demanda industrial y habitacional crece al mismo tiempo."
            style={{ maxWidth: "none" }}
          />

          <div className="mt-8 flex flex-col">
            {COVERAGE.map((region) => (
              <div
                key={region.state}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "16px 0",
                  borderBottom: "var(--border-width) solid var(--border-subtle)",
                }}
              >
                <Icon name="map-pin" size={18} color="var(--interra-orange)" />
                <span
                  style={{ flex: 1, fontSize: 16, fontWeight: "var(--fw-medium)" }}
                >
                  {region.state}
                </span>
                <span style={{ fontSize: 14, color: "var(--text-muted)" }}>
                  {region.projects}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div
          className="ds-hatch"
          style={{
            aspectRatio: "16 / 11",
            borderRadius: "var(--radius-lg)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgb(0 38 57 / 0.2), rgb(0 38 57 / 0.85))",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 28,
              bottom: 26,
              color: "rgb(255 255 255 / 0.66)",
              fontSize: 13,
            }}
          >
            Mapa pendiente · sustituir por plano de cobertura
          </div>
        </div>
      </div>
    </section>
  );
}
