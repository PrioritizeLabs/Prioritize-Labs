import { createPageMetadata } from "../seo";
import JsonLd from "../components/JsonLd";

export const metadata = createPageMetadata({
  title: "Digital Services for Business Growth | Prioritize Labs",
  description:
    "Explore growth marketing, creative production, and technology and automation services from Prioritize Labs in Agra, India.",
  path: "/services",
  keywords: [
    "digital services Agra",
    "growth marketing services India",
    "creative agency",
    "technology and automation services",
  ],
});

export default function ServicesLayout({ children }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": "https://prioritizelabs.com/services#webpage",
          url: "https://prioritizelabs.com/services",
          name: "Digital Services for Business Growth | Prioritize Labs",
          description:
            "Explore growth marketing, creative production, and technology and automation services from Prioritize Labs.",
          isPartOf: { "@id": "https://prioritizelabs.com/#website" },
          mainEntity: {
            "@type": "ItemList",
            itemListElement: [
              ["Growth Marketing", "/services/growth-marketing"],
              ["Creative Production", "/services/creative-services"],
              ["Technology & Automation", "/services/technology"],
            ].map(([name, path], index) => ({
              "@type": "ListItem",
              position: index + 1,
              name,
              url: `https://prioritizelabs.com${path}`,
            })),
          },
        }}
      />
      {children}
    </>
  );
}
