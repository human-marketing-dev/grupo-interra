import { Footer } from "@/components/ds/Footer";
import { Navbar } from "@/components/ds/Navbar";
import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { Coverage } from "@/components/landing/Coverage";
import { CtaBand } from "@/components/landing/CtaBand";
import { Hero } from "@/components/landing/Hero";
import { Portfolio } from "@/components/landing/Portfolio";
import { Process } from "@/components/landing/Process";
import { StatementBand } from "@/components/landing/StatementBand";
import { Testimonial } from "@/components/landing/Testimonial";
import { Verticals } from "@/components/landing/Verticals";
import { FOOTER_COLUMNS, NAV_LINKS } from "@/content/site";

export default function LandingPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main className="flex-1">
        <Hero />
        <StatementBand />
        <Verticals />
        <About />
        <Portfolio />
        <Process />
        <Coverage />
        <Testimonial />
        <CtaBand />
        <Contact />
      </main>

      <Footer
        logoSrc="/brand/logo-stacked-white.png"
        columns={FOOTER_COLUMNS}
      />
    </>
  );
}
