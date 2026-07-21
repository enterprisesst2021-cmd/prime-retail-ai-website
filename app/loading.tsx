export default function Loading() {
  return (
    <main
      role="status"
      aria-label="Loading Prime Retail AI"
      className="flex min-h-screen items-center justify-center bg-slate-950 px-6"
    >
      <div className="text-center">
        <div className="relative mx-auto h-20 w-20">
          <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-xl" />

          <div className="relative flex h-20 w-20 animate-pulse items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-2xl font-bold text-white shadow-xl shadow-blue-500/20">
            PR
          </div>

          <div className="absolute -inset-3 animate-spin rounded-[2rem] border border-transparent border-t-cyan-300/70" />
        </div>

        <p className="mt-8 text-base font-medium text-white">
          Loading Prime Retail AI
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Preparing your experience...
        </p>
      </div>
    </main>
  );
}