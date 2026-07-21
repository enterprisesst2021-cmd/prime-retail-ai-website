const features = [
  {
    icon: "AI",
    title: "AI Bid Optimization",
    description:
      "Receive intelligent bid recommendations based on spend, conversions, ACOS and campaign performance.",
  },
  {
    icon: "ST",
    title: "Search Term Mining",
    description:
      "Identify profitable customer search terms and discover where your advertising budget is being wasted.",
  },
  {
    icon: "KW",
    title: "Keyword Harvesting",
    description:
      "Convert strong search terms into targeted keywords and improve campaign structure automatically.",
  },
  {
    icon: "AR",
    title: "ACOS & ROAS Analytics",
    description:
      "Monitor sales, spend, ACOS, ROAS and conversion trends through one easy-to-understand dashboard.",
  },
  {
    icon: "BO",
    title: "Budget Optimization",
    description:
      "Move advertising budgets toward campaigns with stronger sales potential and better conversion rates.",
  },
  {
    icon: "1C",
    title: "One-Click Actions",
    description:
      "Review AI recommendations and apply approved campaign changes quickly from one central workspace.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative border-t border-white/10 bg-slate-950 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute left-0 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            Powerful Amazon Ads intelligence
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Everything you need to optimize Amazon advertising
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Prime Retail AI combines advertising data, automation and artificial
            intelligence to help sellers make faster and more profitable
            campaign decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.055]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-sm font-bold text-cyan-200">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-400">
                {feature.description}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-blue-500/30 via-cyan-300/10 to-transparent opacity-0 transition group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}