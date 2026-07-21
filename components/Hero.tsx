import Link from "next/link";

const metrics = [
  { label: "Ad Sales", value: "₹12.8L", change: "+24.8%" },
  { label: "ACOS", value: "18.4%", change: "-6.2%" },
  { label: "ROAS", value: "5.43x", change: "+18.1%" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-24 pt-36 lg:px-8 lg:pb-32 lg:pt-44">
      <div className="absolute inset-0 -z-20 bg-slate-950" />

      <div className="absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            AI-powered Amazon advertising optimization
          </div>

          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Increase sales.
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Reduce ACOS.
            </span>
            Automate Amazon Ads.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Prime Retail AI connects with your Amazon Ads account, identifies
            wasted spend, discovers profitable search terms and recommends
            smarter bids and budgets.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-blue-500 px-6 py-3.5 text-center font-semibold text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400"
            >
              Start Optimizing
            </Link>

            <Link
              href="/#workflow"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-white/10"
            >
              See How It Works
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <span>✓ Secure Amazon connection</span>
            <span>✓ AI recommendations</span>
            <span>✓ No long-term contract</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-slate-400">Advertising Overview</p>
                <h2 className="mt-1 text-xl font-semibold text-white">
                  Campaign Performance
                </h2>
              </div>

              <div className="rounded-lg bg-emerald-400/10 px-3 py-2 text-xs font-medium text-emerald-300">
                Live Sync
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs text-emerald-300">
                    {metric.change} this month
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Sales trend</p>
                  <p className="mt-1 font-medium text-white">
                    Last 30 days
                  </p>
                </div>

                <span className="text-sm text-cyan-300">+21.6%</span>
              </div>

              <div className="flex h-44 items-end gap-2">
                {[32, 46, 38, 62, 55, 78, 69, 88, 74, 96, 84, 100].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-300 opacity-80"
                      style={{ height: `${height}%` }}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4">
              <p className="text-sm font-medium text-blue-100">
                AI Recommendation
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Reduce bids on 14 high-spend search terms and move ₹8,500 into
                three campaigns with stronger conversion rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}