import { Footer } from "@/components/ds/Footer";
import { Navbar } from "@/components/ds/Navbar";
import { About } from "@/components/landing/About";
import { Commercial } from "@/components/landing/Commercial";
import { Contact } from "@/components/landing/Contact";
import { CtaBand } from "@/components/landing/CtaBand";
import { Developments } from "@/components/landing/Developments";
import { HardNumbers } from "@/components/landing/HardNumbers";
import { Hero } from "@/components/landing/Hero";
import { FOOTER_COLUMNS, FOOTER_DESCRIPTION, NAV_LINKS } from "@/content/site";

export default function LandingPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main className="flex-1">
        <Hero />
        <About />
        <Developments />
        <HardNumbers />
        <Commercial />
        <CtaBand />
        <Contact />
      </main>

      <Footer
        logoSrc="/brand/logo-stacked-white.png"
        description={FOOTER_DESCRIPTION}
        columns={FOOTER_COLUMNS}
      />
    </>
  );
}
