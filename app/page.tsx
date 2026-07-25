import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { Demo } from "@/components/Demo";
import { Modules } from "@/components/Modules";
import { Benefits } from "@/components/Benefits";
import { Comparison } from "@/components/Comparison";
import { Personas } from "@/components/Personas";
import { Faq } from "@/components/Faq";
import { Offer } from "@/components/Offer";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-terracotta focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main id="main-content">
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Demo />
        <Modules />
        <Benefits />
        <Comparison />
        <Personas />
        <Faq />
        <Offer />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
