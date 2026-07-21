import ButtonLink from "@/components/ui/ButtonLink";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 text-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="mx-auto max-w-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-2xl font-bold text-white shadow-2xl shadow-blue-500/20">
          PR
        </div>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
          Error 404
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          This page could not be found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          The page may have been moved, deleted or the address may be incorrect.
          Return to the homepage to continue exploring Prime Retail AI.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/">Return Home</ButtonLink>

          <ButtonLink href="/contact" variant="secondary">
            Contact Support
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}