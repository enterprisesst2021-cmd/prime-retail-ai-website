const tabs = [
  "Campaigns",
  "Keywords",
  "Search Terms",
  "AI Recommendations",
];

const campaigns = [
  {
    name: "Camera Tripod - Exact",
    spend: "₹24,500",
    sales: "₹1,42,000",
    acos: "17.3%",
    status: "Profitable",
  },
  {
    name: "Mobile Creator Kit",
    spend: "₹18,900",
    sales: "₹92,400",
    acos: "20.5%",
    status: "Stable",
  },
  {
    name: "Green Screen Backdrop",
    spend: "₹14,800",
    sales: "₹68,300",
    acos: "21.7%",
    status: "Optimize",
  },
];

const recommendations = [
  {
    title: "Reduce inefficient bids",
    description:
      "Lower bids on 14 search terms with high spend and no recent orders.",
    impact: "Save ₹6,400/month",
  },
  {
    title: "Increase profitable campaign budget",
    description:
      "Move additional budget to campaigns with strong ROAS and limited daily budget.",
    impact: "Potential +18% sales",
  },
  {
    title: "Harvest converting search terms",
    description:
      "Add 9 profitable customer search terms as exact-match keywords.",
    impact: "Improve targeting",
  },
];

export default function DashboardShowcase() {
  return (
    <section 
    id="dashboard"
    className="relative overflow-hidden border-t border-white/10 bg-slate-950 px-6 py-24 lg:px-8 lg:py-32">
      <div className="absolute left-1/2 top-20 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            One intelligent workspace
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            See every campaign, insight and opportunity clearly
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Monitor performance, identify wasted spend and review AI-powered
            recommendations from one central dashboard.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex flex-col border-b border-white/10 lg:flex-row">
            <aside className="border-b border-white/10 p-6 lg:w-64 lg:border-b-0 lg:border-r">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white">
                  PR
                </div>

                <div>
                  <p className="font-semibold text-white">Prime Retail AI</p>
                  <p className="text-xs text-slate-400">Ads Workspace</p>
                </div>
              </div>

              <nav className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {tabs.map((tab, index) => (
                  <button
                    key={tab}
                    type="button"
                    className={`rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                      index === 0
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>

              <div className="mt-8 rounded-2xl border border-emerald-300/15 bg-emerald-400/10 p-4">
                <p className="text-sm font-medium text-emerald-200">
                  Amazon connected
                </p>
                <p className="mt-2 text-xs leading-5 text-slate-400">
                  Campaign data synchronized successfully.
                </p>
              </div>
            </aside>

            <div className="flex-1 p-6 lg:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-sm text-slate-400">
                    Advertising performance
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold text-white">
                    Campaign Dashboard
                  </h3>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                  Last 30 days
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  ["Ad Spend", "₹1.24L", "-4.2%"],
                  ["Ad Sales", "₹6.84L", "+22.5%"],
                  ["ACOS", "18.1%", "-5.4%"],
                  ["ROAS", "5.52x", "+16.8%"],
                ].map(([label, value, change]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.035] p-5"
                  >
                    <p className="text-sm text-slate-400">{label}</p>
                    <p className="mt-2 text-2xl font-semibold text-white">
                      {value}
                    </p>
                    <p className="mt-2 text-xs text-emerald-300">{change}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025]">
                  <div className="border-b border-white/10 px-5 py-4">
                    <p className="font-medium text-white">
                      Campaign performance
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                      <thead className="text-slate-500">
                        <tr className="border-b border-white/10">
                          <th className="px-5 py-4 font-medium">Campaign</th>
                          <th className="px-5 py-4 font-medium">Spend</th>
                          <th className="px-5 py-4 font-medium">Sales</th>
                          <th className="px-5 py-4 font-medium">ACOS</th>
                          <th className="px-5 py-4 font-medium">Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {campaigns.map((campaign) => (
                          <tr
                            key={campaign.name}
                            className="border-b border-white/5 last:border-b-0"
                          >
                            <td className="whitespace-nowrap px-5 py-4 font-medium text-white">
                              {campaign.name}
                            </td>
                            <td className="whitespace-nowrap px-5 py-4 text-slate-300">
                              {campaign.spend}
                            </td>
                            <td className="whitespace-nowrap px-5 py-4 text-slate-300">
                              {campaign.sales}
                            </td>
                            <td className="whitespace-nowrap px-5 py-4 text-slate-300">
                              {campaign.acos}
                            </td>
                            <td className="whitespace-nowrap px-5 py-4">
                              <span className="rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                                {campaign.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-blue-200">AI Optimization</p>
                      <p className="mt-1 font-semibold text-white">
                        Recommended actions
                      </p>
                    </div>

                    <span className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
                      26 actions
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {recommendations.map((recommendation) => (
                      <article
                        key={recommendation.title}
                        className="rounded-xl border border-white/10 bg-slate-950/50 p-4"
                      >
                        <h4 className="font-medium text-white">
                          {recommendation.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-400">
                          {recommendation.description}
                        </p>

                        <p className="mt-3 text-xs font-medium text-emerald-300">
                          {recommendation.impact}
                        </p>
                      </article>
                    ))}
                  </div>

                  <button
                    type="button"
                    className="mt-5 w-full rounded-xl bg-blue-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
                  >
                    Review Recommendations
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 text-center sm:grid-cols-3">
          {[
            ["Campaign visibility", "Monitor spend, sales and efficiency"],
            ["AI insights", "Understand what needs your attention"],
            ["Controlled automation", "Approve changes before they are applied"],
          ].map(([title, description]) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
            >
              <p className="font-medium text-white">{title}</p>
              <p className="mt-2 text-sm text-slate-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}