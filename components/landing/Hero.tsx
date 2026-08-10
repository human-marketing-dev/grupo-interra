import Image from "next/image";
import { Button } from "@/components/ds/Button";
import { StatBlock } from "@/components/ds/StatBlock";
import { HERO_STATS } from "@/content/site";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background: "var(--interra-navy)",
        overflow: "hidden",
      }}
    >
      {/* Isotipo como marca de agua al 5%, sangrado por el borde. */}
      <Image
        src="/brand/logo-mark-white.png"
        alt=""
        width={595}
        height={450}
        aria-hidden
        style={{
          position: "absolute",
          right: "-6%",
          bottom: "-18%",
          height: "150%",
          width: "auto",
          opacity: 0.05,
          pointerEvents: "none",
        }}
      />

      <div
        className="ds-container relative pt-[136px] pb-[72px] md:pt-[170px] md:pb-[104px]"
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="ds-rule" />
          <span
            className="ds-eyebrow"
            style={{ color: "rgb(255 255 255 / 0.72)" }}
          >
            Grupo Interra · Desde 2008
          </span>
        </div>

        <h1
          style={{
            fontSize: "var(--fs-display-xl)",
            lineHeight: "var(--lh-tight)",
            letterSpacing: "var(--ls-display)",
            color: "#fff",
            maxWidth: 900,
            textWrap: "balance",
            fontWeight: 800,
          }}
        >
          Tierra con vocación, lista para construirse
        </h1>

        <p
          style={{
            margin: "26px 0 0",
            maxWidth: 560,
            fontSize: "var(--fs-body-lg)",
            lineHeight: "var(--lh-body)",
            color: "rgb(255 255 255 / 0.76)",
          }}
        >
          Adquirimos, urbanizamos y comercializamos reservas territoriales
          residenciales, industriales y comerciales en el Bajío mexicano.
        </p>

        <div className="mt-[38px] flex flex-wrap items-center gap-3.5">
          <Button href="#proyectos" size="lg">
            Ver portafolio
          </Button>
          <Button href="#contacto" size="lg" variant="inverse-outline">
            Hablar con un asesor
          </Button>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgb(255 255 255 / 0.18)" }}>
        <div className="ds-container grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
          {HERO_STATS.map((stat) => (
            <StatBlock key={stat.label} inverse {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
