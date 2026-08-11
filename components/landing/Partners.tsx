import { Button } from "@/components/ds/Button";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { PARTNERS } from "@/content/site";

export function Partners() {
  return (
    <section className="ds-section" style={{ background: "var(--interra-navy)" }}>
      <div className="ds-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            inverse
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
