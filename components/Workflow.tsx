const steps = [
  {
    number: "01",
    title: "Connect Amazon Ads",
    description:
      "Securely authorize Prime Retail AI to access your Amazon advertising account.",
  },
  {
    number: "02",
    title: "Sync Campaign Data",
    description:
      "Import campaigns, keywords, search terms, budgets and performance metrics.",
  },
  {
    number: "03",
    title: "AI Performance Analysis",
    description:
      "Our system evaluates spend, sales, ACOS, ROAS and conversion behaviour.",
  },
  {
    number: "04",
    title: "Review Recommendations",
    description:
      "See clear recommendations for bids, budgets, keywords and wasted search terms.",
  },
  {
    number: "05",
    title: "Apply Optimizations",
    description:
      "Approve selected actions and improve your campaigns from one central dashboard.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden border-t border-white/10 bg-slate-900/40 px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="absolute right-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Simple workflow
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            From campaign data to smarter decisions
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Prime Retail AI transforms complex advertising data into practical
            recommendations that are easy to understand and apply.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-blue-400 via-cyan-300 to-blue-500 md:block lg:left-1/2 lg:h-px lg:w-[80%] lg:-translate-x-1/2" />

          <div className="grid gap-6 lg:grid-cols-5">
            {steps.map((step) => (
              <article
                key={step.number}
                className="relative rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/10 backdrop-blur"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-blue-300/30 bg-blue-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-blue-400/20 bg-gradient-to-r from-blue-500/10 via-cyan-400/5 to-blue-500/10 p-8 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-200">
            Built for Amazon sellers
          </p>

          <p className="mx-auto mt-4 max-w-3xl text-xl leading-8 text-white">
            Spend less time reviewing spreadsheets and more time growing
            profitable campaigns.
          </p>
        </div>
      </div>
    </section>
  );
}