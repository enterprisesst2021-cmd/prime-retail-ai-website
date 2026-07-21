import ButtonLink from "@/components/ui/ButtonLink";
import Section from "@/components/ui/Section";

export default function CTA() {
  return (
    <Section
      className="overflow-hidden bg-slate-900/40"
      containerClassName="max-w-6xl"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-3xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-blue-400/20 bg-gradient-to-br from-blue-500/15 via-slate-950 to-cyan-400/10 px-6 py-14 text-center shadow-2xl shadow-blue-950/30 sm:px-10 lg:px-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_35%)]" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            Early access is opening soon
          </div>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Make smarter Amazon advertising decisions with Prime Retail AI
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Join the early-access list, discuss your advertising setup and be
            among the first sellers to explore AI-powered campaign optimization.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact" className="w-full sm:w-auto">
              Request Early Access
            </ButtonLink>

            <ButtonLink
              href="#dashboard"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Explore the Platform
            </ButtonLink>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
            <span>No credit card required</span>
            <span>Controlled recommendations</span>
            <span>Built initially for Amazon India</span>
          </div>
        </div>
      </div>
    </Section>
  );
}