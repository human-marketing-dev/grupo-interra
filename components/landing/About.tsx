import Image from "next/image";
import { Button } from "@/components/ds/Button";
import { ABOUT } from "@/content/site";

export function About() {
  return (
    <section
      id="nosotros"
      className="ds-section"
      style={{ background: "var(--surface-subtle)" }}
    >
      <div className="ds-container grid items-center gap-12 lg:grid-cols-2 lg:gap-18">
        <div>
          <div className="flex items-center gap-3">
            <span className="ds-rule" />
            <span className="ds-eyebrow" style={{ color: "var(--text-secondary)" }}>
              {ABOUT.eyebrow}
            </span>
          </div>

          <h2
            style={{
              marginTop: 16,
              fontSize: "var(--fs-display-md)",
              lineHeight: "var(--lh-snug)",
              letterSpacing: "var(--ls-display)",
              textWrap: "balance",
            }}
          >
            {ABOUT.title}
          </h2>

          {ABOUT.paragraphs.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 32)}
              style={{
                marginTop: index === 0 ? 16 : 18,
                fontSize: "var(--fs-body-lg)",
                lineHeight: "var(--lh-body)",
                color: "var(--text-secondary)",
                textWrap: "pretty",
              }}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-9">
            <Button href="#desarrollos">Ver desarrollos</Button>
          </div>
        </div>

        <div
          className="relative overflow-hidden max-lg:aspect-[16/10] lg:aspect-4/5"
          style={{ borderRadius: "var(--radius-lg)" }}
        >
          <Image
            src={ABOUT.photo}
            alt={ABOUT.photoAlt}
            fill
            // OJO: `sizes` describe el ancho al que se RENDERIZA la imagen, no
            // el de la caja. Con `cover` sobre una caja 4:5 y una foto 3:2, la
            // imagen se ajusta al alto y se recorta a los lados: ocupa ~1250px
            // aunque la columna mida 665. Declarar 665 la deja borrosa igual.
            sizes="(max-width: 1024px) 100vw, 1250px"
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgb(0 38 57 / 0) 45%, rgb(0 38 57 / 0.85))",
            }}
          />
          <div
            style={{ position: "absolute", left: 28, bottom: 26, color: "#fff" }}
          >
            <div
              className="ds-eyebrow"
              style={{ fontSize: 11, letterSpacing: "0.16em", color: "var(--interra-orange)" }}
            >
              {ABOUT.photoCaption.eyebrow}
            </div>
            <div style={{ marginTop: 6, fontSize: 16 }}>
              {ABOUT.photoCaption.text}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
