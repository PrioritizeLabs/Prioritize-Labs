import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Work & Portfolio | Prioritize Labs",
  description:
    "Explore creative, video, website and marketing work from Prioritize Labs, serving businesses in Agra and across India.",
  path: "/portfolio",
});

export default function PortfolioLayout({ children }) {
  return children;
}
