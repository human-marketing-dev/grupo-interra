import { Footer } from "@/components/ds/Footer";
import { Navbar } from "@/components/ds/Navbar";
import { About } from "@/components/landing/About";
import { Contact } from "@/components/landing/Contact";
import { CtaBand } from "@/components/landing/CtaBand";
import { Developments } from "@/components/landing/Developments";
import { Hero } from "@/components/landing/Hero";
import { Partners } from "@/components/landing/Partners";
import { FOOTER_COLUMNS, FOOTER_DESCRIPTION, NAV_LINKS } from "@/content/site";

export default function LandingPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main className="flex-1">
        <Hero />
        <About />
        <Developments />
        <Partners />
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
