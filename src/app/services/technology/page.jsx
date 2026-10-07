import ServiceLandingPage from "../components/ServiceLandingPage";
import { createPageMetadata } from "../../seo";

const service = {
  name: "Technology & Automation",
  path: "/services/technology",
  eyebrow: "Technology & Automation",
  headline: "Technology that removes friction and gives your growth room to scale.",
  description:
    "Prioritize Labs plans and builds websites, web applications and practical workflow automations for businesses in Agra and across India. We focus on useful, maintainable solutions that make it easier for customers to act and teams to work.",
  serviceTypes: [
    "Website development",
    "Web application development",
    "Workflow automation",
    "Digital product consulting",
  ],
  sectionTitle: "Build the right thing, then make it work harder.",
  sectionIntro:
    "We connect strategy, implementation and performance so your digital tools solve real business problems rather than adding complexity.",
  capabilities: [
    {
      title: "Business websites",
      description:
        "Responsive business and service websites with clear information architecture, accessible interfaces and conversion-focused journeys.",
    },
    {
      title: "Landing pages",
      description:
        "Fast, focused campaign pages built around one audience, one offer and a clear next action.",
    },
    {
      title: "Web applications",
      description:
        "Custom interfaces, portals and dashboards shaped around your team's workflows and customer needs.",
    },
    {
      title: "E-commerce & integrations",
      description:
        "Online store experiences and integrations that connect the tools you already use, with scope defined to fit the project.",
    },
    {
      title: "Workflow automation",
      description:
        "Reduce repetitive admin by connecting forms, notifications, CRM processes and other business tools where practical.",
    },
    {
      title: "Performance & technical SEO",
      description:
        "Technical foundations covering responsive behaviour, semantic page structure, image handling, metadata and measurable performance.",
    },
  ],
  process: [
    {
      title: "Map the problem",
      description:
        "We define users, business goals, constraints and success measures before choosing platforms or technology.",
    },
    {
      title: "Plan the experience",
      description:
        "We agree on page structure, key journeys, integrations, content needs and delivery milestones.",
    },
    {
      title: "Build and review",
      description:
        "We develop the agreed solution in stages, share progress and test the important paths with you.",
    },
    {
      title: "Launch and improve",
      description:
        "We support deployment and handover, then identify follow-up improvements based on real use and agreed support scope.",
    },
  ],
  faqTitle: "Web development and automation, explained.",
  ctaTitle: "Have a process worth improving?",
  faqs: [
    {
      question: "What kinds of websites and technology projects do you build?",
      answer:
        "Projects can include business websites, campaign landing pages, web applications, online stores, integrations and workflow automation. Scope depends on your goals and technical requirements.",
    },
    {
      question: "Will my website work on mobile devices?",
      answer:
        "Yes. Responsive behaviour is part of the design and development process, with layouts planned for phones, tablets and desktop screens.",
    },
    {
      question: "Can you improve an existing website?",
      answer:
        "We can review an existing site and recommend a scoped set of design, technical, content or performance improvements before work begins.",
    },
    {
      question: "How long does a website project take?",
      answer:
        "Timing depends on the number of pages, integrations, content readiness and review cycles. We agree on milestones and delivery expectations in the project proposal.",
    },
  ],
};

export const metadata = createPageMetadata({
  title: "Technology & Automation Services | Prioritize Labs",
  description:
    "Responsive websites, web applications and workflow automation from Prioritize Labs in Agra, India. Build practical digital tools for your next stage of growth.",
  path: service.path,
  keywords: [
    "web development Agra",
    "website development India",
    "web application development",
    "business process automation",
    "website performance optimization",
  ],
});

export default function TechnologyPage() {
  return <ServiceLandingPage service={service} />;
}
