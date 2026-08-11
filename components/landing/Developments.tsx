"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { Icon } from "@/components/ds/Icon";
import { PropertyCard, type Property } from "@/components/ds/PropertyCard";
import { PropertyModal } from "@/components/ds/PropertyModal";
import { SectionHeading } from "@/components/ds/SectionHeading";
import {
  DEVELOPMENTS,
  DEVELOPMENT_TABS,
  type DevelopmentTab,
} from "@/content/site";

export function Developments() {
  const [active, setActive] = useState(DEVELOPMENT_TABS[0].id);
  const [selected, setSelected] = useState<Property | null>(null);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const step =
      event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const index = DEVELOPMENT_TABS.findIndex((tab) => tab.id === active);
    const next =
      DEVELOPMENT_TABS[
        (index + step + DEVELOPMENT_TABS.length) % DEVELOPMENT_TABS.length
      ];
    setActive(next.id);
    tabRefs.current[next.id]?.focus();
  }

  return (
    <section id="desarrollos" className="ds-section" style={{ background: "#fff" }}>
      <div className="ds-container">
        <SectionHeading
          eyebrow={DEVELOPMENTS.eyebrow}
          title={DEVELOPMENTS.title}
          description={DEVELOPMENTS.lead}
          style={{ maxWidth: 700 }}
        />

        <div className="ds-tabbar" role="tablist" aria-label="Verticales">
          {DEVELOPMENT_TABS.map((tab) => (
            <button
              key={tab.id}
              ref={(node) => {
                tabRefs.current[tab.id] = node;
              }}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={tab.id === active}
              aria-controls={`panel-${tab.id}`}
              tabIndex={tab.id === active ? 0 : -1}
              onClick={() => setActive(tab.id)}
              onKeyDown={onKeyDown}
              className="ds-tab"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {DEVELOPMENT_TABS.map((tab) => (
          <Panel
            key={tab.id}
            tab={tab}
            hidden={tab.id !== active}
            onSelect={setSelected}
          />
        ))}
      </div>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

function Panel({
  tab,
  hidden,
  onSelect,
}: {
  tab: DevelopmentTab;
  hidden: boolean;
  onSelect: (property: Property) => void;
}) {
  return (
    <div
      role="tabpanel"
      id={`panel-${tab.id}`}
      aria-labelledby={`tab-${tab.id}`}
      hidden={hidden}
      className="pt-12"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h3 style={{ fontSize: "clamp(24px, 2.4vw, 30px)", letterSpacing: "-0.02em" }}>
            {tab.heading}
          </h3>
          <p
            style={{
              marginTop: 16,
              fontSize: "var(--fs-body)",
              lineHeight: "var(--lh-body)",
              color: "var(--text-secondary)",
              textWrap: "pretty",
            }}
          >
            {tab.body}
          </p>

          {tab.stats ? (
            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3.5">
              {tab.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderTop: "var(--border-width-strong) solid var(--interra-orange)",
                    paddingTop: 12,
                    fontSize: "var(--fs-body-sm)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <b
                    style={{
                      display: "block",
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                      color: "var(--text-primary)",
                    }}
                  >
                    {stat.value}
                  </b>
                  {stat.label}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <div
            className="ds-eyebrow"
            style={{
              letterSpacing: "0.14em",
              color: "var(--text-secondary)",
              marginBottom: 16,
            }}
          >
            {tab.benefitsTitle}
          </div>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {tab.benefits.map((benefit) => (
              <div key={benefit.label} className="ds-benefit">
                <Icon name={benefit.icon} size={20} color="var(--interra-orange)" />
                {benefit.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {tab.projects.map((project) => (
          <PropertyCard
            key={project.name}
            property={project}
            onSelect={() => onSelect(project)}
          />
        ))}
      </div>

    </div>
  );
}
