export function Testimonial() {
  return (
    <section
      style={{ background: "var(--interra-black)" }}
      className="py-20 md:py-24"
    >
      <div
        className="ds-container text-center"
        style={{ maxWidth: 900 }}
      >
        <span className="ds-rule mb-7" />
        <blockquote
          style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 3vw, 34px)",
            fontWeight: "var(--fw-bold)",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "#fff",
            textWrap: "balance",
          }}
        >
          Compramos el macrolote en marzo y en agosto ya estábamos operando. Los
          permisos ya estaban resueltos.
        </blockquote>
        <div
          style={{
            marginTop: 28,
            fontSize: 15,
            color: "rgb(255 255 255 / 0.6)",
          }}
        >
          Director de Operaciones · Operador logístico, Silao
        </div>
      </div>
    </section>
  );
}
