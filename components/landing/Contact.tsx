import Link from "next/link";
import { Icon } from "@/components/ds/Icon";
import { SectionHeading } from "@/components/ds/SectionHeading";
import { CONTACT, CONTACT_DETAILS } from "@/content/site";
import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contacto"
      className="ds-section"
      style={{ background: "var(--surface-subtle)" }}
    >
      <div className="ds-container grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={CONTACT.eyebrow}
            title={CONTACT.title}
            description={CONTACT.lead}
            style={{ maxWidth: "none" }}
          />

          <div className="mt-9 flex flex-col gap-[18px]" style={{ fontSize: 16 }}>
            {CONTACT_DETAILS.map((detail) => (
              <Link
                key={detail.value}
                href={detail.href}
                style={{ display: "flex", gap: 12, alignItems: "center" }}
              >
                <Icon name={detail.icon} size={18} color="var(--interra-orange)" />
                {detail.value}
              </Link>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
