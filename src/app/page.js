import { createPageMetadata, SITE_URL } from "./seo";
import JsonLd from "./components/JsonLd";
import HomeExperience from "./components/HomeExperience";

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
      <HomeExperience />
    </>
  );
}
