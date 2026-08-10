import { Button } from "@/components/ds/Button";

export function CtaBand() {
  return (
    <section style={{ background: "var(--surface-accent)" }}>
      <div className="ds-container flex flex-wrap items-center justify-between gap-10 py-18">
        <div>
          <h2
            style={{
              fontSize: "clamp(30px, 3.4vw, 44px)",
              color: "#fff",
              letterSpacing: "var(--ls-display)",
              fontWeight: "var(--fw-bold)",
              textWrap: "balance",
            }}
          >
            ¿Buscas tierra para tu próximo proyecto?
          </h2>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: 18,
              color: "rgb(255 255 255 / 0.9)",
            }}
          >
            Un asesor te responde el mismo día hábil.
          </p>
        </div>

        <Button href="#contacto" size="lg" variant="inverse">
          Agendar recorrido
        </Button>
      </div>
    </section>
  );
}
