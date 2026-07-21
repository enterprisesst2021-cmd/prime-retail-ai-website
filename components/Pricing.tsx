import ButtonLink from "@/components/ui/ButtonLink";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const plans = [
  {
    name: "Starter",
    description:
      "For sellers who want clear campaign visibility and practical optimization insights.",
    price: "Coming soon",
    highlighted: false,
    cta: "Join Waitlist",
    features: [
      "1 Amazon Ads profile",
      "Campaign performance dashboard",
      "Keyword and search-term analytics",
      "AI optimization recommendations",
      "Weekly performance summary",
    ],
  },
  {
    name: "Professional",
    description:
      "For growing brands that need deeper automation, faster analysis and more control.",
    price: "Coming soon",
    highlighted: true,
    cta: "Book a Demo",
    features: [
      "Multiple Amazon Ads profiles",
      "Advanced bid recommendations",
      "Budget optimization",
      "Search-term harvesting",
      "Negative keyword suggestions",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    description:
      "For agencies, aggregators and large brands managing complex advertising operations.",
    price: "Custom",
    highlighted: false,
    cta: "Contact Sales",
    features: [
      "Unlimited account management",
      "Custom automation rules",
      "Team access and permissions",
      "Portfolio-level reporting",
      "Custom integrations",
      "Dedicated onboarding",
    ],
  },
];

export default function Pricing() {
  return (
    <Section
      id="pricing"
      className="overflow-hidden bg-slate-900/40"
    >
      <div className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <SectionHeading
        eyebrow="Simple pricing"
        title="Choose a plan that grows with your advertising"
        description="Pricing will be announced before launch. Join the waitlist or book a demo to get early access and product updates."
        alignment="center"
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={[
              "relative flex h-full flex-col rounded-3xl border p-7",
              "transition duration-300 hover:-translate-y-1",
              plan.highlighted
                ? "border-blue-400/40 bg-gradient-to-b from-blue-500/15 to-slate-950 shadow-2xl shadow-blue-950/30"
                : "border-white/10 bg-white/[0.035] hover:border-white/20",
            ].join(" ")}
          >
            {plan.highlighted ? (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-blue-300/30 bg-blue-500 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg shadow-blue-500/20">
                Most Popular
              </div>
            ) : null}

            <div>
              <h3 className="text-2xl font-semibold text-white">
                {plan.name}
              </h3>

              <p className="mt-4 min-h-20 leading-7 text-slate-400">
                {plan.description}
              </p>
            </div>

            <div className="mt-8 border-y border-white/10 py-6">
              <p className="text-sm font-medium text-slate-400">
                Pricing
              </p>

              <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                {plan.price}
              </p>
            </div>

            <ul className="mt-8 flex-1 space-y-4">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-300/20 bg-emerald-400/10 text-xs text-emerald-300">
                    ✓
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <ButtonLink
              href="/contact"
              variant={plan.highlighted ? "primary" : "secondary"}
              className="mt-8 w-full"
            >
              {plan.cta}
            </ButtonLink>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-6 text-center">
        <p className="text-sm leading-6 text-slate-400">
          All plans are being designed for Amazon sellers and advertisers.
          Marketplace availability, limits and final pricing may vary at launch.
        </p>
      </div>
    </Section>
  );
}