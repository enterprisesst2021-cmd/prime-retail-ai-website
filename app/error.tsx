"use client";

import { useEffect } from "react";
import ButtonLink from "@/components/ui/ButtonLink";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error("Prime Retail AI application error:", error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 text-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-3xl" />

      <div className="mx-auto max-w-2xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-red-300/20 bg-red-400/10 text-3xl text-red-200">
          !
        </div>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.25em] text-red-300">
          Application Error
        </p>

        <h1 className="mt-5 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          Something went wrong
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          We were unable to complete this request. Try loading the page again,
          or return to the homepage if the issue continues.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Try Again
          </button>

          <ButtonLink href="/" variant="secondary">
            Return Home
          </ButtonLink>
        </div>

        {error.digest ? (
          <p className="mt-8 text-xs text-slate-600">
            Reference: {error.digest}
          </p>
        ) : null}
      </div>
    </main>
  );
}