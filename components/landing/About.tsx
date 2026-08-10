import Image from "next/image";
import { Button } from "@/components/ds/Button";
import { FeatureItem } from "@/components/ds/FeatureItem";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { DIFFERENTIATORS } from "@/content/site";

export function About() {
  return (
    <section
      id="nosotros"
      className="ds-section"
      style={{ background: "var(--surface-subtle)" }}
    >
      <div className="ds-container grid items-center gap-12 lg:grid-cols-2 lg:gap-18">
        <div
          className="ds-hatch"
          style={{
            aspectRatio: "4 / 5",
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
                "linear-gradient(180deg, rgb(0 38 57 / 0) 40%, rgb(0 38 57 / 0.9))",
            }}
          />
          <Image
            src="/brand/logo-mark-white.png"
            alt=""
            width={595}
            height={450}
            aria-hidden
            style={{
              position: "absolute",
              left: "50%",
              top: "46%",
              transform: "translate(-50%, -50%)",
              width: "52%",
              height: "auto",
              opacity: 0.12,
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
            Fotografía pendiente · sustituir por aérea de dron
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Nosotros"
            title="Compramos tierra que otros no saben leer"
            description="Grupo Interra nació en 2008 comprando reservas en el Bajío. Hoy urbanizamos, escrituramos y comercializamos con equipo propio."
            style={{ maxWidth: "none" }}
          />

          <div className="mt-9 flex flex-col gap-[26px]">
            {DIFFERENTIATORS.map((item) => (
              <FeatureItem key={item.title} {...item} />
            ))}
          </div>

          <div className="mt-9">
            <Button href="#contacto" variant="outline">
              Conocer la empresa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
