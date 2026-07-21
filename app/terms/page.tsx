import Footer from "@/components/Footer";
import LegalPage from "@/components/LegalPage";
import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms of Service govern your access to and use of the Prime
          Retail AI website, software platform, dashboards, analytics,
          recommendations and related services.
        </p>

        <p>
          By accessing or using Prime Retail AI, you agree to be bound by these
          Terms. If you do not agree, you should not use the service.
        </p>
      </>
    ),
  },
  {
    title: "2. About Prime Retail AI",
    content: (
      <>
        <p>
          Prime Retail AI is an independent software platform intended to help
          Amazon advertisers review campaign performance, analyze advertising
          data and identify optimization opportunities.
        </p>

        <p>
          Prime Retail AI is not owned, operated, endorsed by or affiliated
          with Amazon. Amazon and related marks belong to their respective
          owners.
        </p>
      </>
    ),
  },
  {
    title: "3. Eligibility",
    content: (
      <>
        <p>
          You must be legally capable of entering into a binding agreement and
          authorized to act on behalf of the business or advertising account
          you connect to Prime Retail AI.
        </p>

        <p>
          You are responsible for ensuring that your use of the service complies
          with all laws, regulations, marketplace rules and contractual
          obligations applicable to you.
        </p>
      </>
    ),
  },
  {
    title: "4. Account Registration",
    content: (
      <>
        <p>
          Some features may require you to create an account and provide
          accurate, complete and current information.
        </p>

        <p>
          You are responsible for maintaining the confidentiality of your
          account credentials and for all activity performed through your
          account.
        </p>

        <p>
          You must promptly notify Prime Retail AI if you suspect unauthorized
          account access or another security issue.
        </p>
      </>
    ),
  },
  {
    title: "5. Amazon Account Authorization",
    content: (
      <>
        <p>
          Connected-account features may require authorization through
          Amazon&apos;s official Login with Amazon or Amazon Ads API systems.
        </p>

        <p>
          You represent that you have permission to authorize access to the
          relevant Amazon Advertising profile and associated data.
        </p>

        <p>
          You may revoke authorization through Amazon&apos;s account settings.
          Revoking access may disable data synchronization and connected
          features.
        </p>
      </>
    ),
  },
  {
    title: "6. Permitted Use",
    content: (
      <>
        <p>You may use Prime Retail AI only for lawful business purposes.</p>

        <p>You must not:</p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Use the service for fraudulent, unlawful or deceptive activity.</li>
          <li>
            Attempt to access another user&apos;s account, data or advertising
            profile without authorization.
          </li>
          <li>
            Reverse engineer, copy, reproduce or commercially exploit the
            platform except where permitted by law.
          </li>
          <li>
            Interfere with the security, availability or performance of the
            service.
          </li>
          <li>
            Introduce malicious software, harmful code or automated abuse.
          </li>
          <li>
            Use the platform in a manner that violates Amazon policies or
            applicable third-party terms.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "7. Advertising Data and Recommendations",
    content: (
      <>
        <p>
          Prime Retail AI may process advertising information to provide
          dashboards, analytics, alerts, forecasts and optimization
          recommendations.
        </p>

        <p>
          Recommendations are generated from available data and are provided
          for informational and decision-support purposes. They do not
          constitute a guarantee of sales, profitability, ranking, ACOS, ROAS
          or any other business result.
        </p>

        <p>
          You remain responsible for reviewing and approving advertising
          decisions before changes are applied to your campaigns.
        </p>
      </>
    ),
  },
  {
    title: "8. Automated Actions",
    content: (
      <>
        <p>
          Certain plans or future features may allow users to authorize
          automated campaign actions, including bid, budget, keyword, targeting
          or status changes.
        </p>

        <p>
          Where automation is enabled, you are responsible for configuring
          appropriate rules, limits and permissions and for monitoring the
          resulting advertising activity.
        </p>

        <p>
          Prime Retail AI may suspend or restrict automated actions if required
          for security, technical, legal or platform-policy reasons.
        </p>
      </>
    ),
  },
  {
    title: "9. Fees and Billing",
    content: (
      <>
        <p>
          Some services may be offered on a paid subscription, usage-based or
          custom pricing basis.
        </p>

        <p>
          Pricing, billing intervals, taxes, plan limits, renewal terms and
          cancellation conditions will be presented before you purchase a paid
          plan.
        </p>

        <p>
          Unless otherwise stated, fees paid for an active billing period may
          be non-refundable, except where required by law.
        </p>
      </>
    ),
  },
  {
    title: "10. Trials and Early Access",
    content: (
      <>
        <p>
          Prime Retail AI may offer trials, pilot access, beta features or
          early-access programs.
        </p>

        <p>
          Such features may be incomplete, changed, suspended or discontinued
          at any time and may be subject to additional conditions.
        </p>
      </>
    ),
  },
  {
    title: "11. Intellectual Property",
    content: (
      <>
        <p>
          Prime Retail AI and its licensors retain all rights in the platform,
          branding, software, interfaces, designs, models, documentation and
          related intellectual property.
        </p>

        <p>
          These Terms do not transfer ownership of any Prime Retail AI
          intellectual property to you.
        </p>

        <p>
          Subject to these Terms, you receive a limited, non-exclusive,
          non-transferable and revocable right to use the service for your
          internal business purposes.
        </p>
      </>
    ),
  },
  {
    title: "12. Your Data",
    content: (
      <>
        <p>
          You retain ownership of the business information and advertising data
          you provide or authorize Prime Retail AI to access.
        </p>

        <p>
          You grant Prime Retail AI the limited rights necessary to process,
          store and display that data for providing, securing and improving the
          service.
        </p>

        <p>
          Information handling is also governed by the Prime Retail AI Privacy
          Policy.
        </p>
      </>
    ),
  },
  {
    title: "13. Third-Party Services",
    content: (
      <>
        <p>
          Prime Retail AI may depend on third-party services including Amazon,
          cloud infrastructure, authentication, analytics, payment processing
          and communication providers.
        </p>

        <p>
          Prime Retail AI is not responsible for outages, policy changes,
          restrictions or actions caused by third-party services outside its
          reasonable control.
        </p>
      </>
    ),
  },
  {
    title: "14. Service Availability",
    content: (
      <>
        <p>
          We aim to provide a reliable service but do not guarantee that Prime
          Retail AI will always be available, uninterrupted, error-free or
          compatible with every account or marketplace.
        </p>

        <p>
          The platform may be temporarily unavailable because of maintenance,
          upgrades, third-party outages, API limits, security events or other
          operational reasons.
        </p>
      </>
    ),
  },
  {
    title: "15. Suspension and Termination",
    content: (
      <>
        <p>
          Prime Retail AI may suspend or terminate access if you violate these
          Terms, create security or legal risk, misuse the platform, fail to pay
          applicable fees or if continued access is no longer commercially or
          technically practical.
        </p>

        <p>
          You may stop using the service and request account closure, subject to
          outstanding payment, retention and legal obligations.
        </p>
      </>
    ),
  },
  {
    title: "16. Disclaimers",
    content: (
      <>
        <p>
          Prime Retail AI is provided on an “as is” and “as available” basis to
          the extent permitted by law.
        </p>

        <p>
          We do not guarantee specific advertising outcomes, uninterrupted
          access, error-free data, marketplace acceptance or continued
          availability of third-party APIs.
        </p>

        <p>
          Advertising decisions involve commercial risk, and you remain
          responsible for campaign strategy, budgets, bids and account actions.
        </p>
      </>
    ),
  },
  {
    title: "17. Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by law, Prime Retail AI will not be
          liable for indirect, incidental, special, consequential, exemplary or
          punitive damages, or for loss of profits, revenue, data, goodwill or
          business opportunity.
        </p>

        <p>
          Where liability cannot be excluded, it will be limited to the amount
          you paid to Prime Retail AI during the applicable period giving rise
          to the claim, unless applicable law requires otherwise.
        </p>
      </>
    ),
  },
  {
    title: "18. Indemnification",
    content: (
      <>
        <p>
          You agree to indemnify and hold harmless Prime Retail AI from claims,
          losses, liabilities, costs and expenses arising from your misuse of
          the service, violation of these Terms, infringement of third-party
          rights or unauthorized use of an advertising account.
        </p>
      </>
    ),
  },
  {
    title: "19. Changes to the Service or Terms",
    content: (
      <>
        <p>
          Prime Retail AI may modify the service, pricing, features or these
          Terms from time to time.
        </p>

        <p>
          Updated Terms will be published on this page with a revised “Last
          updated” date. Continued use after an update may constitute acceptance
          of the revised Terms.
        </p>
      </>
    ),
  },
  {
    title: "20. Governing Law",
    content: (
      <>
        <p>
          These Terms will be governed by the laws applicable to the legal
          entity operating Prime Retail AI, without regard to conflict-of-law
          principles.
        </p>

        <p>
          The final registered business name, jurisdiction and dispute forum
          should be added before commercial launch.
        </p>
      </>
    ),
  },
  {
    title: "21. Contact",
    content: (
      <>
        <p>
          For questions about these Terms, billing, account access or the Prime
          Retail AI service, contact us through the contact page.
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
  title: "Terms of Service | Prime Retail AI",
  description:
    "Read the terms governing access to and use of the Prime Retail AI Amazon advertising analytics and optimization platform.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <LegalPage
        eyebrow="Legal information"
        title="Terms of Service"
        description="These Terms explain the rules, responsibilities and conditions that apply when accessing or using Prime Retail AI."
        lastUpdated="21 July 2026"
        sections={sections}
      />

      <Footer />
    </>
  );
}