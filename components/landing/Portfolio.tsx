"use client";

import { useState } from "react";
import { Button } from "@/components/ds/Button";
import { PropertyCard } from "@/components/ds/PropertyCard";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { Tag } from "@/components/ds/Tag";
import { PROJECTS, PROJECT_FILTERS } from "@/content/site";

export function Portfolio() {
  const [filter, setFilter] = useState(PROJECT_FILTERS[0]);

  const visible =
    filter === PROJECT_FILTERS[0]
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="proyectos" className="ds-section" style={{ background: "#fff" }}>
      <div className="ds-container">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <SectionHeading eyebrow="Portafolio" title="Proyectos en comercialización" />

          <div className="flex flex-wrap gap-2.5">
            {PROJECT_FILTERS.map((option) => (
              <Tag
                key={option}
                active={option === filter}
                onClick={() => setFilter(option)}
              >
                {option}
              </Tag>
            ))}
          </div>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <PropertyCard key={project.name} {...project} />
          ))}
        </div>

        {visible.length === 0 ? (
          <p style={{ marginTop: 32, color: "var(--text-secondary)" }}>
            No hay proyectos en comercialización en esta vertical. Escríbenos y
            te avisamos en cuanto liberemos reserva.
          </p>
        ) : null}

        <div className="mt-10">
          <Button href="#proyectos" variant="outline">
            Ver los 24 proyectos
          </Button>
        </div>
      </div>
    </section>
  );
}
