import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Contact | Prime Retail AI",
  description:
    "Contact Prime Retail AI for early access, demos, Amazon advertising analytics and campaign optimization enquiries.",
};

const contactReasons = [
  {
    title: "Early access",
    description:
      "Join the initial group of Amazon advertisers testing Prime Retail AI.",
  },
  {
    title: "Product demo",
    description:
      "See how campaign analytics and AI recommendations will work.",
  },
  {
    title: "Agency requirements",
    description:
      "Discuss multiple profiles, team access and portfolio-level reporting.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950 px-6 pb-24 pt-36 lg:px-8 lg:pb-32">
        <div className="absolute left-1/2 top-12 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              Contact Prime Retail AI
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Tell us about your Amazon advertising goals
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              Share your current advertising setup, challenges and expected
              outcomes. We will use this information to understand whether Prime
              Retail AI is suitable for your business.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside>
              <div className="space-y-5">
                {contactReasons.map((reason) => (
                  <article
                    key={reason.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <h2 className="font-semibold text-white">
                      {reason.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {reason.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                <p className="font-semibold text-white">
                  Initial marketplace
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Prime Retail AI is initially being developed for advertisers
                  operating on Amazon India.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5">
                <p className="text-sm font-medium text-slate-300">
                  Response time
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Enquiries are generally reviewed within two business days
                  during the early-access phase.
                </p>
              </div>
            </aside>

            <ContactForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}