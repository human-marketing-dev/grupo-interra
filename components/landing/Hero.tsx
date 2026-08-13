"use client";

import Image from "next/image";
import { useState, type KeyboardEvent } from "react";
import { Button } from "@/components/ds/Button";
import { Icon } from "@/components/ds/Icon";
import { IconButton } from "@/components/ds/IconButton";
import { StatBlock } from "@/components/ds/StatBlock";
import { HERO_SLIDES, HERO_STATS } from "@/content/site";

/**
 * Héroe en carrusel. Sin autoplay: el sistema de diseño lo prohíbe
 * explícitamente ("sin autoplay de carruseles"). Se avanza con los puntos, las
 * flechas o ← → cuando el carrusel tiene el foco.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;

  function go(step: number) {
    setIndex((current) => (current + step + total) % total);
  }

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      go(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      go(-1);
    }
  }

  return (
    <section
      role="region"
      aria-label="Destacados"
      onKeyDown={onKeyDown}
      style={{
        position: "relative",
        background: "var(--interra-black)",
        overflow: "hidden",
      }}
    >
      {/* Todas las fotos montadas y cruzadas por opacidad: cambiar el `src`
          provoca una descarga tardía y un parpadeo al saltar de slide. */}
      {HERO_SLIDES.map((item, itemIndex) => (
        <div
          key={item.id}
          className="ds-hero__photo"
          data-active={itemIndex === index}
          aria-hidden={itemIndex !== index}
        >
          <Image
            src={item.photo}
            alt={itemIndex === index ? item.photoAlt : ""}
            fill
            sizes="100vw"
            preload={itemIndex === 0}
            loading={itemIndex === 0 ? "eager" : "lazy"}
            style={{
              objectFit: "cover",
              filter: "brightness(1.25) saturate(1.05)",
            }}
          />
        </div>
      ))}

      {/* Gradiente de protección: nada de cápsulas sobre fotografía.
          Al vertical se le suma un scrim lateral porque el texto va alineado a
          la izquierda y las fotos tienen zonas claras justo detrás. */}
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
        {/* Los tres bloques se renderizan siempre y los inactivos van con
            `hidden`: así el copy de Santte e IBP queda en el HTML para los
            buscadores, y `hidden` lo saca del tab order y del árbol de
            accesibilidad — mismo patrón que los paneles de Desarrollos. */}
        <div className="ds-hero__copy" aria-live="polite">
          {HERO_SLIDES.map((item, itemIndex) => (
            <div key={item.id} hidden={itemIndex !== index}>
              <div className="flex items-center gap-3">
                <span className="ds-rule" />
                <span
                  className="ds-eyebrow"
                  style={{ color: "rgb(255 255 255 / 0.72)" }}
                >
                  {item.eyebrow}
                </span>
              </div>

              {itemIndex === 0 ? (
                <h1 className="ds-hero__title">{item.title}</h1>
              ) : (
                <p className="ds-hero__title">{item.title}</p>
              )}

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
                {item.lead}
              </p>

              <div className="mt-[38px] flex flex-col flex-wrap gap-3.5 sm:flex-row sm:items-center">
                <Button href={item.ctaHref} size="lg" className="w-full sm:w-auto">
                  {item.ctaLabel}
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
          ))}
        </div>

        <div className="mt-11 flex items-center gap-4">
          <div className="flex gap-2.5">
            {HERO_SLIDES.map((item, itemIndex) => (
              <button
                key={item.id}
                type="button"
                className="ds-hero__dot"
                aria-current={itemIndex === index}
                aria-label={`Ver ${item.name}`}
                onClick={() => setIndex(itemIndex)}
              />
            ))}
          </div>

          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 12,
              fontWeight: "var(--fw-semibold)",
              letterSpacing: "0.12em",
              color: "rgb(255 255 255 / 0.55)",
            }}
          >
            {index + 1} / {total}
          </span>

          <div className="ml-auto flex gap-2.5">
            <IconButton
              variant="inverse"
              size={42}
              label="Destacado anterior"
              onClick={() => go(-1)}
            >
              <Icon name="arrow-left" size={18} />
            </IconButton>
            <IconButton
              variant="inverse"
              size={42}
              label="Destacado siguiente"
              onClick={() => go(1)}
            >
              <Icon name="arrow-right" size={18} />
            </IconButton>
          </div>
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
