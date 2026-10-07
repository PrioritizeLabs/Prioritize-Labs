"use client";

import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import ResultsSection from "./components/ResultsSection";
import FitSection from "./components/FitSection";
import PricingSection from "./components/PricingSection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <SmoothScroll>
      {/* <Nav /> */}
      <main className="relative bg-bg max-w-7xl mx-auto">
        <Hero />
        <ProblemSection />
        <ProcessSection />
        <ServicesSection />
        <ResultsSection />
        <FitSection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      {/* <Footer /> */}
    </SmoothScroll>
  );
}