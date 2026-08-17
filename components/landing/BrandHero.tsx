import Image from "next/image";
import { BRAND_HERO } from "@/content/site";

/**
 * Portada de marca: foto de fondo, velo naranja y el logotipo encima.
 *
 * El <h1> de la página es este logotipo: su `alt` hace de titular. Es un patrón
 * legítimo (Google lee el alt dentro de encabezados y los lectores de pantalla
 * lo anuncian como nivel 1) y evita quedarse sin h1 al no haber texto visible.
 * Por eso los slides de abajo usan <p>, no <h1>.
 *
 * Va clavada (sticky) a 100vh y el slider de arriba le pasa por encima como
 * una cortina. Por eso vive dentro de .ds-cover-scene junto al slider: el
 * sticky necesita que la escena le dé recorrido.
 *
 * TODO video: sustituir el <Image> por un <video muted loop playsinline> con
 * `poster={BRAND_HERO.photo}`. Conviene no cargarlo en móvil ni con
 * prefers-reduced-motion, y precargar el poster en vez del video.
 */
export function BrandHero() {
  return (
    <section
      aria-label="Grupo Interra"
      className="ds-brand-hero flex min-h-[480px] items-center justify-center overflow-hidden"
      style={{ background: "var(--interra-black)" }}
    >
      {/* La sección es `sticky` y `fill` sólo acepta relative/absolute/fixed
          como padre, así que la foto va en su propia capa absoluta. */}
      <div style={{ position: "absolute", inset: 0 }}>
        <Image
          src={BRAND_HERO.photo}
          alt=""
          fill
          sizes="100vw"
          preload
          loading="eager"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Velo naranja de marca. Una sola capa: apilar multiply + sólido
          apagaba la foto por completo y ensuciaba el color. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "var(--surface-accent)",
          opacity: 0.86,
        }}
      />

      {/* Sobre naranja el texto blanco de la barra cae a 2.51:1. Este degradado
          oscurece solo la franja del header y lo devuelve a ~5.9:1. */}
      <div
        style={{
          position: "absolute",
          insetInline: 0,
          top: 0,
          height: 200,
          background:
            "linear-gradient(180deg, rgb(0 24 36 / 0.48) 0%, rgb(0 24 36 / 0) 100%)",
        }}
      />

      <h1 className="relative px-6">
        <Image
          src="/brand/logo-stacked-white.png"
          alt={BRAND_HERO.logoAlt}
          width={993}
          height={619}
          preload
          loading="eager"
          className="w-[220px] md:w-[300px] lg:w-[340px]"
          style={{ height: "auto", display: "block" }}
        />
      </h1>
    </section>
  );
}
