"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./Button";

export type NavLink = { label: string; href: string };

export type NavbarProps = {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
};

/**
 * Header de 76px. Sobre el héroe es transparente con blur; al salir del héroe
 * pasa a blanco sólido con hairline inferior — y el lockup cambia de blanco a
 * negro para no perder contraste.
 */
export function Navbar({
  links = [],
  ctaLabel = "Contacto",
  ctaHref = "#contacto",
}: NavbarProps) {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El menú móvil abierto siempre se pinta sobre superficie sólida.
  const isSolid = solid || open;

  return (
    <header className="ds-navbar" data-solid={isSolid}>
      <div
        className="ds-container"
        style={{
          height: 76,
          display: "flex",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* Los dos lockups se montan siempre y se cruzan por opacidad: cambiar
            el `src` en scroll provoca una descarga tardía y un parpadeo. */}
        <Link
          href="/"
          aria-label="Grupo Interra — inicio"
          style={{ position: "relative", display: "block", width: 158 }}
        >
          {(
            [
              ["/brand/logo-horizontal-white.png", !isSolid],
              ["/brand/logo-horizontal-dark.png", isSolid],
            ] as const
          ).map(([src, shown], index) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={158}
              height={30}
              // Eager, no `preload`: van sobre el pliegue pero pesan poco y no
              // deben competir en el <head> con la foto del héroe.
              loading="eager"
              style={{
                width: 158,
                height: "auto",
                display: "block",
                opacity: shown ? 1 : 0,
                transition: "opacity var(--dur-base) var(--ease-standard)",
                ...(index === 0
                  ? {}
                  : { position: "absolute", inset: 0 }),
              }}
            />
          ))}
        </Link>

        <nav className="ml-auto hidden items-center gap-[30px] lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="ds-navlink">
              {link.label}
            </Link>
          ))}
          <Button
            href={ctaHref}
            size="sm"
            variant={isSolid ? "primary" : "inverse-outline"}
          >
            {ctaLabel}
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="ml-auto flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
        >
          {[0, 1, 2].map((bar) => (
            <span
              key={bar}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: isSolid ? "var(--interra-navy)" : "#fff",
                transition: "background var(--dur-base) var(--ease-standard)",
              }}
            />
          ))}
        </button>
      </div>

      {open ? (
        <div
          className="lg:hidden"
          style={{
            borderTop: "var(--border-width) solid var(--border-subtle)",
            background: "#fff",
          }}
        >
          <nav
            className="ds-container"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              paddingBlock: 16,
            }}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: 17,
                  fontWeight: "var(--fw-medium)",
                  paddingBlock: 12,
                  borderBottom: "var(--border-width) solid var(--border-subtle)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={ctaHref}
              size="md"
              fullWidth
              onClick={() => setOpen(false)}
              style={{ marginTop: 16 }}
            >
              {ctaLabel}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
