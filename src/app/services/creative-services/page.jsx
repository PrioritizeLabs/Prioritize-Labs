import ServiceLandingPage from "../components/ServiceLandingPage";
import { createPageMetadata } from "../../seo";

const service = {
  name: "Creative Production",
  path: "/services/creative-services",
  eyebrow: "Creative Production",
  headline: "Creative that earns attention — and builds the brand behind it.",
  description:
    "Prioritize Labs creates brand identity, social content, campaign creative and video for businesses in Agra and across India. Every asset is designed around your audience, your message and the next action you want people to take.",
  serviceTypes: [
    "Brand identity design",
    "Social media creative production",
    "Video and short-form content",
    "Advertising creative",
  ],
  sectionTitle: "One creative partner for every channel.",
  sectionIntro:
    "From the first brand impression to the next campaign, we bring design and content together so your marketing looks and sounds like one business.",
  capabilities: [
    {
      title: "Brand identity & design",
      description:
        "Logo systems, visual guidelines and practical brand assets that make your business recognisable wherever customers find you.",
    },
    {
      title: "Social media content",
      description:
        "Platform-ready static posts, carousels, stories, reel covers and content calendars made for consistent publishing.",
    },
    {
      title: "Video & short-form edits",
      description:
        "Reels, Shorts, product videos and promotional edits with clear hooks, readable captions and a strong next step.",
    },
    {
      title: "Campaign creative",
      description:
        "Ad concepts and creative variations for Meta, Google and other campaign placements, designed to support testing and learning.",
    },
    {
      title: "Marketing collateral",
      description:
        "Presentations, brochures, banners and digital materials that carry your brand consistently into sales and customer touchpoints.",
    },
    {
      title: "Creative direction",
      description:
        "A defined visual direction, messaging approach and review process to help teams produce useful, consistent content over time.",
    },
  ],
  process: [
    {
      title: "Understand the brief",
      description:
        "We learn about your audience, goals, existing brand and where each asset will be used before production begins.",
    },
    {
      title: "Set the creative direction",
      description:
        "We align on the message, visual approach, formats, deliverables and review rounds so expectations are clear.",
    },
    {
      title: "Create and refine",
      description:
        "Our team develops the agreed assets and incorporates feedback within the scope and revision terms of your proposal.",
    },
    {
      title: "Deliver for real use",
      description:
        "You receive approved files in the agreed formats, ready for the platforms and placements in your plan.",
    },
  ],
  faqTitle: "Creative production, explained.",
  ctaTitle: "Make your next creative brief count.",
  faqs: [
    {
      question: "What creative services does Prioritize Labs offer?",
      answer:
        "We provide brand identity and graphic design, social media content, short-form video editing, campaign creative, marketing collateral and creative direction. The exact deliverables are agreed in a project proposal.",
    },
    {
      question: "Can you create content for Instagram, YouTube and ads?",
      answer:
        "Yes. We create and adapt creative for social channels and digital advertising, with formats and specifications agreed for each project.",
    },
    {
      question: "How does the creative project process work?",
      answer:
        "We begin with a brief and goals, agree on a creative direction and deliverables, then create and refine assets through the review rounds included in your proposal.",
    },
    {
      question: "Do you work with businesses outside Agra?",
      answer:
        "Yes. Prioritize Labs is based in Agra, Uttar Pradesh, and works with businesses in India and other markets.",
    },
  ],
};

export const metadata = createPageMetadata({
  title: "Creative Production & Brand Design | Prioritize Labs",
  description:
    "Brand identity, social media creative, video and campaign production for businesses in Agra and across India. Explore Prioritize Labs creative services.",
  path: service.path,
  keywords: [
    "creative agency Agra",
    "brand design India",
    "social media creative production",
    "video content production",
    "advertising creative services",
  ],
});

export default function CreativeServicesPage() {
  return <ServiceLandingPage service={service} />;
}
