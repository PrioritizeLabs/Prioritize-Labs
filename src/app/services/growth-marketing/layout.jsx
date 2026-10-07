import { createPageMetadata } from "../../seo";
import ServicePageSchema from "../../components/ServicePageSchema";

export const metadata = createPageMetadata({
  title: "Growth Marketing Agency in India | Prioritize Labs",
  description:
    "Performance marketing, SEO, social media, lead generation and analytics designed to build measurable growth pipelines for ambitious businesses.",
  path: "/services/growth-marketing",
  keywords: [
    "growth marketing agency India",
    "performance marketing Agra",
    "SEO services India",
    "lead generation agency",
    "digital marketing strategy",
  ],
});

export default function GrowthMarketingLayout({ children }) {
  return (
    <>
      <ServicePageSchema
        name="Growth Marketing"
        description="Performance advertising, SEO, social media marketing, lead generation and analytics for measurable business growth."
        path="/services/growth-marketing"
        serviceTypes={[
          "Performance marketing",
          "Search engine optimization",
          "Social media marketing",
          "Lead generation",
          "Marketing analytics",
        ]}
      />
      {children}
    </>
  );
}
