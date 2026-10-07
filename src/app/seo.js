const SITE_URL = "https://prioritizelabs.com";

export function createPageMetadata({ title, description, path, keywords }) {
  const url = new URL(path, SITE_URL);
  const socialImage = {
    url: `${SITE_URL}/prioritizelabs-og.png`,
    width: 1200,
    height: 630,
    alt: "Prioritize Labs — growth marketing, creative production, technology and automation",
  };

  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Prioritize Labs",
      locale: "en_IN",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage.url],
    },
  };
}

export { SITE_URL };
