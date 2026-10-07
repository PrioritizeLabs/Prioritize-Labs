import LegalDocument from "../components/LegalDocument";
import { createPageMetadata } from "../seo";

const title = "Privacy Policy";
const intro =
  "This policy explains how Prioritize Labs handles personal information when you visit our website, contact us or discuss a project with us.";

export const metadata = createPageMetadata({
  title: "Privacy Policy | Prioritize Labs",
  description:
    "Learn what personal information Prioritize Labs may collect, why it is used and how to contact us about your privacy.",
  path: "/privacy-policy",
});

const sections = [
  {
    heading: "1. Information we may collect",
    paragraphs: [
      "When you contact us or request information, we may receive details such as your name, email address, telephone number, business information and the contents of your message. We may also receive information you choose to share while discussing or receiving a service.",
      "When you browse the website, the hosting and security systems may process technical information such as your device or browser type, requested pages, approximate location derived from network information and basic diagnostic logs. The exact information depends on the services and settings in use.",
    ],
  },
  {
    heading: "2. How we use information",
    paragraphs: [
      "We use information to respond to enquiries, prepare proposals, communicate about projects, provide and improve services, protect the website from misuse, maintain business records and meet legal obligations.",
      "We do not use enquiry details for unrelated marketing without an appropriate basis or permission where required. You can ask us to stop promotional communications at any time.",
    ],
  },
  {
    heading: "3. Sharing and service providers",
    paragraphs: [
      "We do not sell personal information. We may share information with service providers who help us operate our website, communications or business, where needed to deliver a service, or where disclosure is required by law. We expect service providers to handle information appropriately and only for the relevant purpose.",
      "If a project requires access to an advertising, analytics, hosting or other third-party platform, that platform may process information under its own privacy policy and terms.",
    ],
  },
  {
    heading: "4. Cookies and similar technologies",
    paragraphs: [
      "The website or its hosting services may use essential cookies or similar technologies for core functionality and security. Analytics or advertising technologies may be used only where configured. You can manage cookies through your browser settings; blocking some cookies may affect site functionality.",
    ],
  },
  {
    heading: "5. Retention and security",
    paragraphs: [
      "We keep personal information for as long as reasonably needed for the purpose for which it was collected, to manage an engagement, resolve a dispute, maintain appropriate records or meet legal requirements. Retention periods can differ depending on the information and circumstances.",
      "We use reasonable safeguards to protect information, but no method of online transmission or electronic storage can be guaranteed to be completely secure.",
    ],
  },
  {
    heading: "6. Your choices and rights",
    paragraphs: [
      "Depending on the laws that apply to you, you may have rights to request access to, correction or deletion of personal information, to withdraw consent or to object to or restrict certain processing. To make a request, contact us using the email address below. We may need to verify your identity and may retain information where the law permits or requires it.",
    ],
  },
  {
    heading: "7. Children and external links",
    paragraphs: [
      "This website and our business services are intended for businesses and adults, and are not directed to children. Our website may link to third-party websites; their privacy practices are governed by their own policies.",
    ],
  },
  {
    heading: "8. Updates and contact",
    paragraphs: [
      "We may update this policy when our practices or legal obligations change. The current version and its update date will be published on this page.",
      "For privacy questions or requests, email info@prioritizelabs.com. Prioritize Labs is based in Agra, Uttar Pradesh, India.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalDocument title={title} intro={intro} path="/privacy-policy" sections={sections} />;
}
