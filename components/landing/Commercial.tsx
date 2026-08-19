"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ds/Icon";
import { PropertyCard, type Property } from "@/components/ds/PropertyCard";
import { PropertyModal } from "@/components/ds/PropertyModal";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { COMMERCIAL, TENANT_BRANDS } from "@/content/site";

export function Commercial() {
  const [selected, setSelected] = useState<Property | null>(null);

  return (
    <section
      id="comercial"
      className="ds-section"
      style={{ background: "var(--surface-subtle)" }}
    >
      <div className="ds-container">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow={COMMERCIAL.eyebrow}
              title={COMMERCIAL.title}
              description={COMMERCIAL.lead}
              style={{ maxWidth: "none" }}
            />

            <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3.5">
              {COMMERCIAL.stats.map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    borderTop:
                      "var(--border-width-strong) solid var(--interra-orange)",
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

            <div
              className="ds-eyebrow mt-9"
              style={{
                letterSpacing: "0.14em",
                color: "var(--text-secondary)",
                marginBottom: 16,
              }}
            >
              {COMMERCIAL.benefitsTitle}
            </div>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {COMMERCIAL.benefits.map((benefit) => (
                <div key={benefit.label} className="ds-benefit">
                  <Icon name={benefit.icon} size={20} color="var(--interra-orange)" />
                  {benefit.label}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pt-2">
            <PropertyCard
              property={COMMERCIAL.project}
              onSelect={() => setSelected(COMMERCIAL.project)}
            />
          </div>
        </div>

        <div
          className="mt-16 pt-10"
          style={{ borderTop: "var(--border-width) solid var(--border-strong)" }}
        >
          <div
            className="ds-eyebrow"
            style={{ letterSpacing: "0.14em", color: "var(--text-secondary)" }}
          >
            {COMMERCIAL.brandsTitle}
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-6">
            {TENANT_BRANDS.map((brand) => (
              <div key={brand.name} className="ds-brand">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  className="ds-brand__logo"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <PropertyModal property={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
