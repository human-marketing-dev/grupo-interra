"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ds/Button";
import { Checkbox } from "@/components/ds/Checkbox";
import { Input } from "@/components/ds/Input";
import { Select } from "@/components/ds/Select";
import { PROJECT_TYPES } from "@/content/site";

/**
 * Destino de las solicitudes. Mientras no exista, el formulario valida pero
 * avisa que no está conectado en vez de fingir un envío correcto.
 * Define NEXT_PUBLIC_CONTACT_ENDPOINT (CRM, Formspree, route handler propio…)
 * para activarlo.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; message: string };

export function ContactForm() {
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // El input del checkbox está oculto visualmente, así que el navegador no
    // puede anclarle su burbuja de validación: lo validamos aquí.
    if (!accepted) {
      setStatus({
        kind: "error",
        message: "Necesitamos que aceptes el aviso de privacidad para continuar.",
      });
      return;
    }

    if (!ENDPOINT) {
      setStatus({
        kind: "error",
        message:
          "El formulario aún no está conectado. Escríbenos a ventas@grupointerra.mx mientras tanto.",
      });
      return;
    }

    const form = event.currentTarget;
    setStatus({ kind: "sending" });

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setAccepted(false);
      setStatus({ kind: "sent" });
    } catch {
      setStatus({
        kind: "error",
        message:
          "No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a ventas@grupointerra.mx.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "var(--border-width) solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-md)",
      }}
      className="p-6 md:p-10"
    >
      <div className="grid gap-[18px] sm:grid-cols-2">
        <Input
          label="Nombre"
          name="nombre"
          autoComplete="name"
          placeholder="Tu nombre completo"
          required
        />
        <Input
          label="Teléfono"
          name="telefono"
          type="tel"
          autoComplete="tel"
          placeholder="55 0000 0000"
          required
        />
        <Input
          label="Correo"
          name="correo"
          type="email"
          autoComplete="email"
          placeholder="tu@empresa.com"
          required
        />
        <Select
          label="Tipo de proyecto"
          name="tipo"
          options={PROJECT_TYPES}
          defaultValue={PROJECT_TYPES[0]}
        />

        <div className="sm:col-span-2">
          <Input
            textarea
            label="Mensaje"
            name="mensaje"
            rows={4}
            placeholder="Superficie, ubicación y uso que buscas"
          />
        </div>

        <div className="mt-1 flex flex-wrap items-center justify-between gap-5 sm:col-span-2">
          <Checkbox
            name="privacidad"
            checked={accepted}
            onChange={(event) => {
              setAccepted(event.currentTarget.checked);
              setStatus({ kind: "idle" });
            }}
            label="Acepto el aviso de privacidad"
          />
          <Button type="submit" disabled={status.kind === "sending"}>
            {status.kind === "sending" ? "Enviando…" : "Enviar solicitud"}
          </Button>
        </div>
      </div>

      {status.kind === "sent" ? (
        <p
          role="status"
          style={{
            marginTop: 20,
            fontSize: 15,
            color: "var(--status-available)",
          }}
        >
          Recibimos tu solicitud. Un asesor te responde el mismo día hábil.
        </p>
      ) : null}

      {status.kind === "error" ? (
        <p role="alert" style={{ marginTop: 20, fontSize: 15, color: "#b3261e" }}>
          {status.message}
        </p>
      ) : null}
    </form>
  );
}
