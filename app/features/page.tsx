import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features | Prime Retail AI",
  description:
    "Explore AI-powered Amazon Ads features for reducing ACOS, discovering profitable keywords, optimizing bids, and improving campaign performance.",
  alternates: {
    canonical: "https://www.primeretail.app/features/",
  },
  openGraph: {
    title: "Prime Retail AI Features",
    description:
      "AI-powered campaign analytics, bid recommendations, keyword discovery, wasted-spend detection, and Amazon Ads automation.",
    url: "https://www.primeretail.app/features/",
    siteName: "Prime Retail AI",
    type: "website",
  },
};

const features = [
  {
    title: "Campaign Performance Analytics",
    description:
      "Monitor ad sales, spend, ACOS, ROAS, clicks, conversions, and campaign trends from one clear dashboard.",
  },
  {
    title: "Wasted Spend Detection",
    description:
      "Identify search terms and targets that consume budget without generating profitable sales.",
  },
  {
    title: "AI Bid Recommendations",
    description:
      "Receive smarter bid increase and decrease recommendations based on performance, profitability, and conversion data.",
  },
  {
    title: "Keyword Discovery",
    description:
      "Find profitable customer search terms that can be added as new exact-match or phrase-match keywords.",
  },
  {
    title: "Negative Keyword Suggestions",
    description:
      "Discover irrelevant or unprofitable search terms that should be blocked to protect your advertising budget.",
  },
  {
    title: "Budget Optimization",
    description:
      "Identify campaigns that are losing sales because of limited budgets and campaigns where budget can be reduced.",
  },
  {
    title: "ACOS and ROAS Monitoring",
    description:
      "Track profitability targets and quickly identify campaigns performing above or below your goals.",
  },
  {
    title: "Actionable Recommendations",
    description:
      "Turn complex advertising data into clear actions your team can review and apply.",
  },
  {
    title: "Automated Reports",
    description:
      "Receive regular summaries of performance changes, opportunities, risks, and recommended next steps.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <section className="border-b border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Prime Retail AI Features
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Smarter tools for profitable Amazon advertising
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Prime Retail AI helps Amazon sellers and advertising teams detect
            wasted spend, discover profitable opportunities, and make better
            campaign decisions using AI-powered analytics and recommendations.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-400"
            >
              Book a Demo
            </Link>

            <Link
              href="/#pricing"
              className="rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-7 shadow-lg shadow-blue-950/20"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                  ✓
                </div>

                <h2 className="text-xl font-semibold">{feature.title}</h2>

                <p className="mt-3 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950 to-slate-950 p-10 text-center sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Make every advertising decision with better data
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            See how Prime Retail AI can help your business reduce wasted spend,
            improve campaign efficiency, and scale profitable Amazon Ads.
          </p>

          <Link
            href="/contact/"
            className="mt-8 inline-flex rounded-lg bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-400"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
