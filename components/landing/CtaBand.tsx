import { Button } from "@/components/ds/Button";
import { CTA_BAND } from "@/content/site";

export function CtaBand() {
  return (
    <section style={{ background: "var(--surface-accent)" }}>
      <div className="ds-container flex flex-wrap items-center justify-between gap-10 py-18">
        {/* Acotado para que el titular parta en dos líneas y el CTA se quede
            en la misma fila en vez de caer debajo. */}
        <div className="max-w-[760px] flex-1">
          <h2
            style={{
              fontSize: "clamp(30px, 3.4vw, 44px)",
              color: "#fff",
              letterSpacing: "var(--ls-display)",
              fontWeight: "var(--fw-bold)",
              textWrap: "balance",
            }}
          >
            {CTA_BAND.title}
          </h2>
          <p
            style={{
              margin: "12px 0 0",
              fontSize: 18,
              color: "rgb(255 255 255 / 0.9)",
            }}
          >
            {CTA_BAND.lead}
          </p>
        </div>

        <Button href="#contacto" size="lg" variant="inverse">
          {CTA_BAND.ctaLabel}
        </Button>
      </div>
    </section>
  );
}
