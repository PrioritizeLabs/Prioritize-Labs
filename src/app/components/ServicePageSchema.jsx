import JsonLd from "./JsonLd";

const SITE_URL = "https://prioritizelabs.com";

export default function ServicePageSchema({ name, description, path, serviceTypes }) {
  const url = `${SITE_URL}${path}`;

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Service",
            "@id": `${url}#service`,
            name,
            description,
            url,
            serviceType: serviceTypes,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: [
              { "@type": "City", name: "Agra" },
              { "@type": "Country", name: "India" },
            ],
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${SITE_URL}/services`,
              },
              { "@type": "ListItem", position: 3, name, item: url },
            ],
          },
        ],
      }}
    />
  );
}
