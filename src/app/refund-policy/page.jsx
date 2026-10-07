import LegalDocument from "../components/LegalDocument";
import { createPageMetadata } from "../seo";

const title = "Refund Policy";
const intro =
  "This policy explains Prioritize Labs' payment, refund and cancellation approach for digital, creative, technology and marketing services.";

export const metadata = createPageMetadata({
  title: "Refund Policy | Prioritize Labs",
  description:
    "Review the Prioritize Labs payment and cancellation policy for project work and ongoing service billing.",
  path: "/refund-policy",
});

const sections = [
  {
    heading: "1. Payments are non-refundable",
    paragraphs: [
      "Payments made to Prioritize Labs are non-refundable once paid, including project fees, retainers, deposits and other amounts, except where a refund is required by applicable law or expressly agreed in writing.",
      "Before making a payment, please review the proposal, scope, deliverables, timeline and payment schedule, and ask us to clarify anything you are unsure about.",
    ],
  },
  {
    heading: "2. Cancelling an ongoing service",
    paragraphs: [
      "You may cancel an ongoing or recurring service for future billing periods by emailing info@prioritizelabs.com with written notice before the next billing period begins. The cancellation takes effect from the next billing period; a payment already made for the current period will not be refunded.",
      "If your project or retainer has a specific cancellation notice period in its written agreement, that project-specific term applies.",
    ],
  },
  {
    heading: "3. Work in progress and approved costs",
    paragraphs: [
      "Cancellation does not reverse payments already made or remove amounts due for work, deliverables or third-party costs that you approved under the applicable proposal or agreement.",
      "Advertising spend, software subscriptions, hosting, licences and other charges paid to third parties are also subject to the third party's own terms and refund rules.",
    ],
  },
  {
    heading: "4. How to request cancellation",
    paragraphs: [
      "Send your cancellation request to info@prioritizelabs.com and include your name, business name, service and requested end date. We will confirm receipt and the effective date based on your billing schedule and applicable written agreement.",
    ],
  },
  {
    heading: "5. Legal rights and updates",
    paragraphs: [
      "Nothing in this policy limits a consumer right or other legal protection that cannot be excluded under applicable law. If a mandatory legal requirement conflicts with this policy, that requirement applies.",
      "We may update this policy by publishing a revised version on this website. The version in effect when a payment or cancellation is made will apply, subject to applicable law and any written project agreement.",
    ],
  },
];

export default function RefundPolicyPage() {
  return <LegalDocument title={title} intro={intro} path="/refund-policy" sections={sections} />;
}
