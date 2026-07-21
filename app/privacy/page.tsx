import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>
          Prime Retail AI respects your privacy and is committed to protecting
          the personal and business information you provide while using our
          website, services and software platform.
        </p>

        <p>
          This Privacy Policy explains how information may be collected, used,
          stored and protected when you visit our website, contact us, create an
          account or connect an Amazon Advertising account.
        </p>
      </>
    ),
  },
  {
    title: "2. Information We May Collect",
    content: (
      <>
        <p>We may collect information including:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Your name, email address, phone number and company details.</li>
          <li>Information submitted through contact or early-access forms.</li>
          <li>
            Account information required to create and manage a Prime Retail AI
            account.
          </li>
          <li>
            Technical information such as browser type, device information,
            IP address and website usage data.
          </li>
          <li>
            Amazon Advertising data authorized by you through Amazon&apos;s
            official authorization process.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Amazon Advertising Account Data",
    content: (
      <>
        <p>
          When you connect an Amazon Advertising account, Prime Retail AI may
          access advertising information permitted by the authorization scopes
          you approve.
        </p>

        <p>This information may include:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Advertising profiles and marketplace information.</li>
          <li>Campaign, ad group, keyword and targeting data.</li>
          <li>Search-term and advertising performance reports.</li>
          <li>
            Metrics such as impressions, clicks, spend, orders, sales, ACOS and
            ROAS.
          </li>
        </ul>

        <p>
          Prime Retail AI does not ask for or store your Amazon account password.
          Account access is intended to occur through Amazon&apos;s official
          Login with Amazon and Amazon Ads API authorization systems.
        </p>
      </>
    ),
  },
  {
    title: "4. How We Use Information",
    content: (
      <>
        <p>Information may be used to:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Provide, maintain and improve Prime Retail AI services.</li>
          <li>Synchronize and display advertising performance data.</li>
          <li>
            Generate analytics, alerts and campaign optimization
            recommendations.
          </li>
          <li>Respond to support, sales and early-access enquiries.</li>
          <li>Protect the platform against fraud, misuse and security threats.</li>
          <li>Comply with legal, regulatory and contractual obligations.</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Legal Basis for Processing",
    content: (
      <>
        <p>
          Depending on the circumstances, information may be processed because
          it is necessary to provide requested services, fulfil a contract,
          comply with legal obligations, protect legitimate business interests
          or because you have provided consent.
        </p>
      </>
    ),
  },
  {
    title: "6. How We Share Information",
    content: (
      <>
        <p>
          Prime Retail AI does not sell your personal information or Amazon
          Advertising data.
        </p>

        <p>
          Information may be shared only when reasonably necessary with trusted
          service providers that support areas such as cloud hosting, database
          infrastructure, analytics, authentication, email delivery and
          customer support.
        </p>

        <p>
          Information may also be disclosed when required by law, court order,
          government authority or to protect the rights, safety and security of
          Prime Retail AI, its users or others.
        </p>
      </>
    ),
  },
  {
    title: "7. Data Storage and Security",
    content: (
      <>
        <p>
          We intend to use reasonable administrative, technical and
          organizational safeguards to protect information from unauthorized
          access, alteration, disclosure, loss or misuse.
        </p>

        <p>
          No internet-based service or electronic storage system can guarantee
          absolute security. Users are responsible for protecting their account
          credentials and promptly reporting suspected unauthorized access.
        </p>
      </>
    ),
  },
  {
    title: "8. Data Retention",
    content: (
      <>
        <p>
          Information may be retained for as long as necessary to provide the
          service, maintain legitimate business records, resolve disputes,
          enforce agreements and comply with legal obligations.
        </p>

        <p>
          When information is no longer required, it may be deleted, anonymized
          or securely archived in accordance with applicable requirements.
        </p>
      </>
    ),
  },
  {
    title: "9. Account Connection and Revocation",
    content: (
      <>
        <p>
          You may revoke Prime Retail AI&apos;s access to your Amazon account
          through the relevant Amazon account or advertising authorization
          settings.
        </p>

        <p>
          Revoking access may prevent Prime Retail AI from synchronizing new
          advertising data or providing connected-account features.
        </p>
      </>
    ),
  },
  {
    title: "10. Cookies and Analytics",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to maintain
          sessions, remember preferences, understand website usage and improve
          performance.
        </p>

        <p>
          You may control cookies through your browser settings. Disabling
          certain cookies may affect some website functionality.
        </p>
      </>
    ),
  },
  {
    title: "11. Your Rights",
    content: (
      <>
        <p>
          Depending on applicable law, you may have the right to request access,
          correction, deletion, restriction or portability of personal
          information.
        </p>

        <p>
          You may also have the right to withdraw consent or object to certain
          processing activities. Requests may be subject to identity
          verification and applicable legal limitations.
        </p>
      </>
    ),
  },
  {
    title: "12. Third-Party Services",
    content: (
      <>
        <p>
          Prime Retail AI may integrate with third-party services, including
          Amazon. Their handling of information is governed by their own terms
          and privacy policies.
        </p>

        <p>
          Prime Retail AI is an independent software platform and is not owned,
          operated, endorsed by or affiliated with Amazon.
        </p>
      </>
    ),
  },
  {
    title: "13. Children's Privacy",
    content: (
      <>
        <p>
          Prime Retail AI is intended for businesses and adult users. The
          service is not directed toward children, and we do not knowingly
          collect personal information from children.
        </p>
      </>
    ),
  },
  {
    title: "14. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          This Privacy Policy may be updated from time to time to reflect
          changes in the platform, legal requirements or business practices.
        </p>

        <p>
          The updated version will be published on this page with a revised
          “Last updated” date.
        </p>
      </>
    ),
  },
  {
    title: "15. Contact Us",
    content: (
      <>
        <p>
          For privacy-related questions, account-access requests or concerns
          about how information is handled, contact Prime Retail AI through our
          contact page.
        </p>

        <p>
          Contact page:{" "}
          <a
            href="/contact"
            className="font-medium text-blue-300 transition hover:text-blue-200"
          >
            Prime Retail AI Support
          </a>
        </p>
      </>
    ),
  },
];

export const metadata = {
  title: "Privacy Policy | Prime Retail AI",
  description:
    "Read the Prime Retail AI Privacy Policy and learn how personal and Amazon Advertising account data may be handled.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <LegalPage
        eyebrow="Legal information"
        title="Privacy Policy"
        description="This policy explains how Prime Retail AI may collect, use, store and protect information when you use our website and Amazon advertising optimization platform."
        lastUpdated="21 July 2026"
        sections={sections}
      />

      <Footer />
    </>
  );
}