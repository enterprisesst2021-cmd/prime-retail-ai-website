import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Is my Amazon Ads account secure?",
    answer:
      "Yes. Prime Retail AI is being designed to connect through Amazon's official advertising authorization process. Your Amazon password is never shared with Prime Retail AI.",
  },
  {
    question: "Which Amazon marketplaces will be supported?",
    answer:
      "Amazon India is the initial marketplace planned for launch. Support for additional marketplaces may be added as the platform expands.",
  },
  {
    question: "Will Prime Retail AI automatically change my campaigns?",
    answer:
      "The initial version will focus on controlled optimization. You will be able to review recommendations before applying changes to bids, budgets, keywords or search terms.",
  },
  {
    question: "What advertising data will the platform analyze?",
    answer:
      "Prime Retail AI is being built to analyze campaign performance, keyword data, search terms, spend, sales, orders, impressions, clicks, ACOS, ROAS and conversion trends.",
  },
  {
    question: "How often will campaign data be synchronized?",
    answer:
      "Synchronization frequency will depend on the selected plan and Amazon API availability. The goal is to keep campaign reporting and recommendations regularly updated.",
  },
  {
    question: "Can agencies or teams use Prime Retail AI?",
    answer:
      "Yes. Agency and team capabilities are planned for larger plans, including multiple advertising profiles, shared access and portfolio-level reporting.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Launch pricing and trial details have not been finalized yet. Early users who join the waitlist may receive access to pilot testing or launch offers.",
  },
  {
    question: "Does Prime Retail AI guarantee lower ACOS?",
    answer:
      "No advertising platform can guarantee a specific result. Prime Retail AI is intended to improve decision-making by identifying patterns, inefficiencies and optimization opportunities.",
  },
];

export default function FAQ() {
  return (
    <Section
      id="faq"
      className="overflow-hidden bg-slate-950"
      containerClassName="max-w-5xl"
    >
      <div className="absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <SectionHeading
        eyebrow="Frequently asked questions"
        title="Everything you need to know before getting started"
        description="Learn how Prime Retail AI is being built, how account access will work and what to expect from the platform."
        alignment="center"
      />

      <div className="mt-16 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left">
              <span className="text-base font-semibold text-white sm:text-lg">
                {faq.question}
              </span>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-300 transition duration-200 group-open:rotate-45 group-open:border-blue-400/30 group-open:bg-blue-500/10 group-open:text-blue-200">
                +
              </span>
            </summary>

            <div className="border-t border-white/10 px-6 py-5">
              <p className="leading-7 text-slate-400">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-6 text-center">
        <p className="text-base font-medium text-white">
          Still have questions?
        </p>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Contact our team to discuss your Amazon advertising setup and early
          access requirements.
        </p>
      </div>
    </Section>
  );
}