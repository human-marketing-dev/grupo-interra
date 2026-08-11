import Image from "next/image";
import { Button } from "@/components/ds/Button";
import { StatBlock } from "@/components/ds/StatBlock";
import { HERO, HERO_STATS } from "@/content/site";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--interra-black)",
        overflow: "hidden",
      }}
    >
      <Image
        src={HERO.photo}
        alt={HERO.photoAlt}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          // La foto es de noche: se levanta para que el texto respire sin
          // perder la temperatura fría que hace resaltar el naranja.
          filter: "brightness(1.25) saturate(1.05)",
        }}
      />

      {/* Gradiente de protección: nada de cápsulas sobre fotografía.
          Al vertical se le suma un scrim lateral porque el texto va alineado a
          la izquierda y la caseta iluminada cae justo detrás del párrafo. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgb(0 24 36 / 0.78) 0%, rgb(0 24 36 / 0.34) 45%, rgb(0 24 36 / 0.86) 100%)",
        }}
      />
      <div className="ds-hero-scrim" />

      <div className="ds-container relative pt-[150px] pb-[80px] md:pt-[190px] md:pb-[120px]">
        <div className="flex items-center gap-3">
          <span className="ds-rule" />
          <span
            className="ds-eyebrow"
            style={{ color: "rgb(255 255 255 / 0.72)" }}
          >
            {HERO.eyebrow}
          </span>
        </div>

        <h1
          style={{
            marginTop: 24,
            fontSize: "var(--fs-display-xl)",
            lineHeight: 1.03,
            letterSpacing: "var(--ls-display)",
            color: "#fff",
            maxWidth: 940,
            textWrap: "balance",
            fontWeight: 800,
          }}
        >
          {HERO.title}
        </h1>

        <p
          style={{
            margin: "26px 0 0",
            maxWidth: 620,
            fontSize: "var(--fs-body-lg)",
            lineHeight: "var(--lh-body)",
            color: "rgb(255 255 255 / 0.78)",
            textWrap: "pretty",
          }}
        >
          {HERO.lead}
        </p>

        <div className="mt-[38px] flex flex-col flex-wrap gap-3.5 sm:flex-row sm:items-center">
          <Button href="#desarrollos" size="lg" className="w-full sm:w-auto">
            Conoce nuestros desarrollos
          </Button>
          <Button
            href="#contacto"
            size="lg"
            variant="inverse-outline"
            className="w-full sm:w-auto"
          >
            Hablar con un asesor
          </Button>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          borderTop: "1px solid rgb(255 255 255 / 0.18)",
          background: "rgb(0 24 36 / 0.55)",
        }}
      >
        <div className="ds-container grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <StatBlock key={stat.label} inverse {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
