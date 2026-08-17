"use client";

import Image from "next/image";
import {
  useEffect,
  useState,
  useSyncExternalStore,
  type KeyboardEvent,
} from "react";
import { Button } from "@/components/ds/Button";
import { Icon } from "@/components/ds/Icon";
import { IconButton } from "@/components/ds/IconButton";
import { StatBlock } from "@/components/ds/StatBlock";
import { HERO_SLIDES, HERO_STATS } from "@/content/site";

/** Tiempo por slide. Suficiente para leer el párrafo antes de que avance. */
const AUTOPLAY_MS = 7000;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED_MOTION);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}

/**
 * Héroe en carrusel con autoplay.
 *
 * OJO: el sistema de diseño pide "sin autoplay de carruseles"; se activó por
 * decisión explícita del cliente para que Santte e IBP no queden invisibles.
 * Para cumplir con WCAG 2.2.2 el avance automático se puede pausar, y además
 * se detiene solo al pasar el mouse, al enfocar el carrusel o si el sistema
 * pide movimiento reducido.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const total = HERO_SLIDES.length;

  // El sistema puede vetar el avance automático aunque el usuario no lo pause.
  const reduced = useReducedMotion();
  const running = playing && !reduced;

  useEffect(() => {
    if (!running || held) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % total),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(id);
  }, [running, held, total]);

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
      aria-roledescription="carrusel"
      className="ds-hero-slider"
      onKeyDown={onKeyDown}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={() => setHeld(false)}
      style={{ background: "var(--interra-black)", overflow: "hidden" }}
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
            /* Lazy incluso el primero: el slider empieza a 100vh, debajo de
               la portada. En eager Next lo precarga y le compite el LCP a la
               portada. El margen del lazy nativo lo trae igual antes de que la
               cortina lo descubra. */
            loading="lazy"
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
        {/* Los tres bloques se apilan en la misma celda de grid, así el alto
            del héroe es siempre el del slide más alto y no salta al cambiar.
            `visibility` (no `hidden`) porque display:none no aporta alto; aun
            así saca el contenido del tab order y del árbol de accesibilidad,
            y lo deja en el HTML para los buscadores. */}
        <div className="ds-hero__copy" aria-live="polite">
          {HERO_SLIDES.map((item, itemIndex) => (
            <div
              key={item.id}
              className="ds-hero__slide"
              data-active={itemIndex === index}
            >
              <div className="flex items-center gap-3">
                <span className="ds-rule" />
                <span
                  className="ds-eyebrow"
                  style={{ color: "rgb(255 255 255 / 0.72)" }}
                >
                  {item.eyebrow}
                </span>
              </div>

              {/* <p>, no <h1>: el encabezado de la página es el logotipo de
                  la portada de arriba. */}
              <p className="ds-hero__title">{item.title}</p>

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
              label={running ? "Pausar el carrusel" : "Reanudar el carrusel"}
              aria-pressed={!running}
              onClick={() => setPlaying((value) => !value)}
            >
              <Icon name={running ? "pause" : "play"} size={17} />
            </IconButton>
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

      {/* Tira de cifras sobre naranja: el texto va en navy porque el blanco
          solo alcanza 2.51:1 sobre #F18A00. */}
      <div style={{ position: "relative", background: "var(--surface-accent)" }}>
        <div className="ds-container grid grid-cols-2 gap-x-8 gap-y-10 py-10 md:grid-cols-3 xl:grid-cols-5">
          {HERO_STATS.map((stat) => (
            <StatBlock key={stat.label} tone="accent" {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
