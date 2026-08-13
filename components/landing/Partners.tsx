import { Button } from "@/components/ds/Button";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { PARTNERS } from "@/content/site";

/**
 * NO ESTÁ MONTADA. La sección "IBP + Partners" salió de la página en el
 * rediseño de estructura. Se conserva —con su copy en PARTNERS— porque es
 * contenido real del cliente (la oferta de aportar terreno a cambio de lotes
 * urbanizados y las amenidades del Business Center). Para reactivarla, súmala
 * a `app/page.tsx`; si se descarta de plano, borra también PARTNERS.
 */

export function Partners() {
  return (
    <section className="ds-section" style={{ background: "var(--interra-navy)" }}>
      <div className="ds-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            tone="inverse"
            eyebrow={PARTNERS.eyebrow}
            title={PARTNERS.title}
            description={PARTNERS.lead}
            style={{ maxWidth: "none" }}
          />
          <div className="mt-8">
            <Button href="#contacto" size="lg" variant="inverse">
              {PARTNERS.ctaLabel}
            </Button>
          </div>
        </div>

        <div>
          <div
            className="ds-eyebrow"
            style={{
              letterSpacing: "0.14em",
              color: "var(--interra-orange)",
              marginBottom: 18,
            }}
          >
            {PARTNERS.businessCenterTitle}
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {PARTNERS.businessCenter.map((item) => (
              <div
                key={item}
                style={{
                  borderTop: "var(--border-width-strong) solid rgb(255 255 255 / 0.2)",
                  paddingTop: 14,
                  color: "rgb(255 255 255 / 0.78)",
                  fontSize: "var(--fs-body-sm)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
