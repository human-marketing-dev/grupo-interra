/** Bloque de máximo contraste: negro puro, reservado para este uso. */
export function StatementBand() {
  return (
    <section style={{ background: "var(--interra-black)" }}>
      <div className="ds-container flex flex-wrap items-center gap-7 py-[22px]">
        <span
          className="ds-eyebrow"
          style={{ fontSize: 11, color: "var(--interra-orange)" }}
        >
          Vendemos tierra, no promesas
        </span>
        <span
          className="hidden h-px flex-1 md:block"
          style={{ background: "rgb(255 255 255 / 0.16)" }}
        />
        <span style={{ fontSize: 15, color: "rgb(255 255 255 / 0.7)" }}>
          Uso de suelo, licencias y título limpio antes del primer anuncio.
        </span>
      </div>
    </section>
  );
}
