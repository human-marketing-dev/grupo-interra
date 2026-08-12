"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { IconButton } from "./IconButton";
import type { Property } from "./PropertyCard";

export type PropertyModalProps = {
  property: Property | null;
  onClose: () => void;
};

/**
 * Usa <dialog> nativo: el foco queda atrapado, Esc cierra y el resto de la
 * página queda inerte sin que tengamos que reimplementarlo.
 */
export function PropertyModal({ property, onClose }: PropertyModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  const slides = property?.images ?? [];
  const total = slides.length;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (property && !dialog.open) {
      setIndex(0);
      dialog.showModal();
      // <dialog> no bloquea el scroll de fondo por sí solo.
      document.body.style.overflow = "hidden";
    } else if (!property && dialog.open) {
      dialog.close();
    }
  }, [property]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const go = useCallback(
    (step: number) => {
      if (total < 2) return;
      setIndex((current) => (current + step + total) % total);
    },
    [total],
  );

  function handleClose() {
    document.body.style.overflow = "";
    onClose();
  }

  if (!property) {
    return <dialog ref={ref} className="ds-modal" aria-hidden />;
  }

  return (
    <dialog
      ref={ref}
      className="ds-modal"
      aria-labelledby="ds-modal-title"
      onClose={handleClose}
      onCancel={handleClose}
      onClick={(event) => {
        // Clic en el backdrop: el target es el propio <dialog>.
        if (event.target === ref.current) handleClose();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
      }}
    >
      <div className="grid max-h-[inherit] grid-cols-1 overflow-y-auto lg:grid-cols-[1.35fr_1fr] lg:overflow-hidden">
        <div className="ds-carousel">
          <div className="ds-carousel__viewport">
            {total > 0 ? (
              <div
                className="ds-carousel__track"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div className="ds-carousel__slide" key={slide.src}>
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      loading={slideIndex === 0 ? "eager" : "lazy"}
                      style={{ objectFit: slide.fit ?? "cover" }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="ds-hatch flex h-full items-end p-6">
                <span style={{ color: "rgb(255 255 255 / 0.66)", fontSize: 13 }}>
                  Fotografía pendiente de este desarrollo
                </span>
              </div>
            )}

            {total > 1 ? (
              <>
                <IconButton
                  variant="inverse"
                  size={40}
                  label="Imagen anterior"
                  className="ds-carousel__nav ds-carousel__nav--prev"
                  onClick={() => go(-1)}
                >
                  <Icon name="arrow-left" size={18} />
                </IconButton>
                <IconButton
                  variant="inverse"
                  size={40}
                  label="Imagen siguiente"
                  className="ds-carousel__nav ds-carousel__nav--next"
                  onClick={() => go(1)}
                >
                  <Icon name="arrow-right" size={18} />
                </IconButton>
                <span className="ds-carousel__counter">
                  {index + 1} / {total}
                </span>
              </>
            ) : null}
          </div>

          {total > 1 ? (
            <div className="ds-carousel__dots">
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.src}
                  type="button"
                  className="ds-carousel__dot"
                  aria-current={slideIndex === index}
                  aria-label={`Ir a la imagen ${slideIndex + 1}`}
                  onClick={() => setIndex(slideIndex)}
                />
              ))}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-5 p-7 md:p-9">
          <div className="flex items-center gap-3">
            <Badge tone={property.status} dot>
              {property.statusLabel}
            </Badge>
            <span
              className="ds-eyebrow"
              style={{
                fontSize: 11,
                letterSpacing: "0.16em",
                color: "var(--interra-orange)",
              }}
            >
              {property.category}
            </span>
          </div>

          <div>
            <h2
              id="ds-modal-title"
              style={{
                fontSize: "clamp(26px, 2.6vw, 34px)",
                letterSpacing: "var(--ls-display)",
                textWrap: "balance",
              }}
            >
              {property.name}
            </h2>
            <div
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 15,
                color: "var(--text-secondary)",
              }}
            >
              <Icon name="map-pin" size={16} color="var(--interra-orange)" />
              {property.location}
            </div>
          </div>

          {property.description ? (
            <p
              style={{
                fontSize: "var(--fs-body-sm)",
                lineHeight: "var(--lh-body)",
                color: "var(--text-secondary)",
                textWrap: "pretty",
              }}
            >
              {property.description}
            </p>
          ) : null}

          <dl className="m-0 grid grid-cols-2 gap-x-6 gap-y-4">
            <Fact label="Superficie" value={property.meta} />
            <Fact label="Precio" value={property.price} />
          </dl>

          <div className="mt-auto flex flex-col gap-3 pt-2">
            <Button href="#contacto" fullWidth onClick={handleClose}>
              Hablar con un asesor
            </Button>
            <Button variant="ghost" onClick={handleClose}>
              Cerrar
            </Button>
          </div>
        </div>
      </div>

      <IconButton
        variant="outline"
        size={40}
        label="Cerrar"
        className="ds-modal__close"
        onClick={handleClose}
      >
        <span aria-hidden style={{ fontSize: 20, lineHeight: 1 }}>
          ×
        </span>
      </IconButton>
    </dialog>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        borderTop: "var(--border-width-strong) solid var(--interra-orange)",
        paddingTop: 12,
      }}
    >
      <dt
        className="ds-eyebrow"
        style={{ color: "var(--text-muted)", marginBottom: 6 }}
      >
        {label}
      </dt>
      <dd
        style={{
          margin: 0,
          fontFamily: "var(--font-display)",
          fontWeight: "var(--fw-bold)",
          fontSize: 18,
        }}
      >
        {value}
      </dd>
    </div>
  );
}
