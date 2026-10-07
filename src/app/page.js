import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import Services from "./components/Services";
import Process from "./components/Process";
import Results from "./components/Results";
import Industries from "./components/Industries";
import Testimonials from "./components/Testimonials";
import HomeCTA from "./components/HomeCTA";
import JsonLd from "./components/JsonLd";
import { createPageMetadata, SITE_URL } from "./seo";
import SmoothScroll from "./services/growth-marketing/components/SmoothScroll";

export const metadata = createPageMetadata({
  title: "Growth Marketing, Creative & Technology Agency | Prioritize Labs",
  description:
    "Prioritize Labs helps ambitious businesses grow with performance marketing, creative production, and practical technology and automation. Based in Agra, India.",
  path: "/",
  keywords: [
    "growth marketing agency India",
    "performance marketing Agra",
    "creative production agency India",
    "technology and automation services",
    "Prioritize Labs",
  ],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${SITE_URL}/#webpage`,
          url: `${SITE_URL}/`,
          name: "Growth Marketing, Creative & Technology Agency | Prioritize Labs",
          description:
            "Prioritize Labs helps ambitious businesses grow with performance marketing, creative production, and practical technology and automation. Based in Agra, India.",
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#organization` },
          mainEntity: {
            "@type": "ItemList",
            name: "Prioritize Labs services",
            itemListElement: [
              ["Growth Marketing", "/services/growth-marketing"],
              ["Creative Production", "/services/creative-services"],
              ["Technology & Automation", "/services/technology"],
            ].map(([name, path], index) => ({
              "@type": "ListItem",
              position: index + 1,
              name,
              url: `${SITE_URL}${path}`,
            })),
          },
        }}
      />
      <SmoothScroll>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Results />
        <Industries />
        <Testimonials />
        <HomeCTA />
      </SmoothScroll>
    </>
  );
}
