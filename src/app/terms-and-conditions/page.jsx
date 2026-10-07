import LegalDocument from "../components/LegalDocument";
import { createPageMetadata } from "../seo";

const title = "Terms & Conditions";
const intro =
  "These terms explain the general conditions for using the Prioritize Labs website and engaging our digital, creative and marketing services. A project proposal or signed agreement may set additional terms for that engagement.";

export const metadata = createPageMetadata({
  title: "Terms & Conditions | Prioritize Labs",
  description:
    "Read the terms that apply to the Prioritize Labs website and digital, creative, technology and marketing services.",
  path: "/terms-and-conditions",
});

const sections = [
  {
    heading: "1. About these terms",
    paragraphs: [
      "In these terms, “Prioritize Labs”, “we”, “us” and “our” refer to the Prioritize Labs business and its service team. “You” and “client” refer to a person or business using this website or engaging our services.",
      "By using this website or approving a proposal, you agree to the terms that apply to that use or engagement. If you do not agree, please do not use the website or proceed with the service.",
    ],
  },
  {
    heading: "2. Service scope and project agreements",
    paragraphs: [
      "The services we offer may include growth marketing, advertising, search optimisation, creative production, video, website development and automation. The specific scope, deliverables, fees, timeline, review rounds and any support arrangements will be set out in the proposal, order or written agreement for your project.",
      "The project-specific written agreement takes precedence over these general terms where the two conflict. Any change to agreed scope or timeline should be confirmed in writing and may affect fees or delivery dates.",
    ],
  },
  {
    heading: "3. Client responsibilities",
    paragraphs: [
      "You agree to provide accurate information, timely feedback, required approvals and access to relevant accounts or materials. You are responsible for ensuring you have permission to provide any content, data, logos or other materials supplied to us.",
      "Delays in receiving required information, access, approvals or payment may affect project timing. We will communicate material issues and agree on reasonable next steps.",
    ],
  },
  {
    heading: "4. Fees and payment",
    paragraphs: [
      "Fees, payment milestones, applicable taxes and due dates will be stated in the relevant proposal or invoice. Third-party advertising spend, software subscriptions, hosting, stock assets and other external costs are separate unless the written agreement expressly says otherwise.",
      "You remain responsible for charges that you approve or incur with third-party platforms and providers. Their terms, availability, fees and service decisions are outside our control.",
    ],
  },
  {
    heading: "5. Reviews and approvals",
    paragraphs: [
      "You are responsible for reviewing deliverables and confirming that names, prices, claims, legal notices and other supplied business information are accurate before publication. We will provide the review rounds agreed in the project scope.",
      "Unless a project agreement says otherwise, you remain responsible for final approval and for ensuring that published materials meet the legal and regulatory requirements applicable to your business.",
    ],
  },
  {
    heading: "6. Intellectual property",
    paragraphs: [
      "After full payment of the applicable fees, rights in final, project-specific deliverables will be handled as described in the project agreement. If no separate intellectual-property terms are agreed, we grant you the right to use the final deliverables for your business purposes.",
      "Our pre-existing tools, processes, know-how and reusable materials remain ours. Third-party fonts, software, stock media and other licensed materials remain subject to their respective licence terms.",
    ],
  },
  {
    heading: "7. Outcomes and third-party services",
    paragraphs: [
      "We work to deliver the services described in the agreed scope, but marketing, search rankings, audience response, sales and advertising performance depend on factors beyond our control. We do not promise specific rankings, revenue, leads or campaign results unless a written agreement expressly provides otherwise.",
      "Search engines, social networks, hosting providers and other third parties may change their policies, systems or availability. We are not responsible for those independent decisions or interruptions.",
    ],
  },
  {
    heading: "8. Cancellation and refunds",
    paragraphs: [
      "Payments are non-refundable once made, except where a refund is required by applicable law or expressly agreed in writing. You may cancel an ongoing service for future billing periods by giving written notice before the next billing period begins. Cancellation does not reverse a payment already made or remove payment obligations for work or costs already approved.",
      "Please also read our Refund Policy for the cancellation and billing-period details.",
    ],
  },
  {
    heading: "9. Privacy and confidentiality",
    paragraphs: [
      "Our handling of personal information is described in the Privacy Policy. Each party should use reasonable care to protect non-public information received from the other in connection with a project, subject to disclosures required by law and information already public or independently developed.",
    ],
  },
  {
    heading: "10. Liability",
    paragraphs: [
      "To the extent permitted by applicable law, neither party will be liable to the other for indirect or consequential loss arising from an engagement. Nothing in these terms limits or excludes a right or liability that cannot lawfully be limited or excluded.",
      "Each party should take reasonable steps to reduce any loss it experiences. Any project-specific allocation of risk must be agreed in writing.",
    ],
  },
  {
    heading: "11. Governing law and changes",
    paragraphs: [
      "These terms are governed by the laws of India. Subject to mandatory consumer-protection rules and other applicable law, disputes may be brought before a court of competent jurisdiction in Agra, Uttar Pradesh.",
      "We may update these terms by publishing a revised version on this website. The updated version applies from its stated effective date; project-specific written agreements remain subject to their own variation terms.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return <LegalDocument title={title} intro={intro} path="/terms-and-conditions" sections={sections} />;
}
