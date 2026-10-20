import { createPageMetadata } from "../../seo";
import JsonLd from "../../components/JsonLd";
import SoftwareDevelopmentExperience from "./SoftwareDevelopmentExperience";

const softwareDescription =
  "From discovery and product design to development, launch and ongoing improvement, Prioritize Labs builds software around real business needs.";

export const metadata = createPageMetadata({
  title: "Software Development Services | Prioritize Labs",
  description: softwareDescription,
  path: "/services/software-development",
  keywords: [
    "software development services",
    "custom software development India",
    "web application development",
    "software product development",
    "software development Agra",
  ],
});

export default function SoftwareDevelopmentPage() {
  const pageUrl = "https://prioritizelabs.com/services/software-development";

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${pageUrl}#service`,
              name: "Software Development",
              description: softwareDescription,
              url: pageUrl,
              provider: { "@id": "https://prioritizelabs.com/#organization" },
              areaServed: [
                { "@type": "City", name: "Agra" },
                { "@type": "Country", name: "India" },
              ],
              serviceType: [
                "Software product development",
                "Web application development",
                "Software testing and quality assurance",
                "Software deployment and maintenance",
              ],
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://prioritizelabs.com" },
                { "@type": "ListItem", position: 2, name: "Services", item: "https://prioritizelabs.com/services" },
                { "@type": "ListItem", position: 3, name: "Software Development", item: pageUrl },
              ],
            },
          ],
        }}
      />
      <SoftwareDevelopmentExperience />
    </>
  );
}
