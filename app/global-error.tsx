"use client";

type GlobalErrorProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function GlobalError({
  reset,
}: GlobalErrorProps) {
  return (
    <html lang="en-IN">
      <body className="bg-slate-950 text-white">
        <main className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
          <div className="mx-auto max-w-xl">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-2xl font-bold text-white">
              PR
            </div>

            <h1 className="mt-10 text-4xl font-semibold tracking-tight sm:text-5xl">
              Prime Retail AI is temporarily unavailable
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-400">
              A critical application error occurred. Please try loading the
              website again.
            </p>

            <button
              type="button"
              onClick={reset}
              className="mt-10 inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Reload Application
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}