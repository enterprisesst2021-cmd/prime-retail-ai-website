import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-24 pt-36 lg:px-8 lg:pb-32">
      <div className="absolute left-1/2 top-20 -z-10 h-[420px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        <header className="border-b border-white/10 pb-12">
          <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            {eyebrow}
          </div>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            {description}
          </p>

          <p className="mt-6 text-sm text-slate-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                {section.title}
              </h2>

              <div className="mt-4 space-y-4 text-base leading-8 text-slate-400">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}