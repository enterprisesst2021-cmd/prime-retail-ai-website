"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    await new Promise((resolve) => setTimeout(resolve, 700));

    form.reset();
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20 sm:p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-200"
          >
            Full name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-200"
          >
            Work email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="mt-6">
        <label
          htmlFor="company"
          className="text-sm font-medium text-slate-200"
        >
          Company or brand
        </label>

        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
          placeholder="Your business name"
        />
      </div>

      <div className="mt-6">
        <label
          htmlFor="monthlyAdSpend"
          className="text-sm font-medium text-slate-200"
        >
          Approximate monthly Amazon ad spend
        </label>

        <select
          id="monthlyAdSpend"
          name="monthlyAdSpend"
          defaultValue=""
          className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
        >
          <option value="" disabled>
            Select a range
          </option>
          <option value="under-50000">Under ₹50,000</option>
          <option value="50000-200000">₹50,000 – ₹2,00,000</option>
          <option value="200000-500000">₹2,00,000 – ₹5,00,000</option>
          <option value="500000-1000000">₹5,00,000 – ₹10,00,000</option>
          <option value="above-1000000">Above ₹10,00,000</option>
        </select>
      </div>

      <div className="mt-6">
        <label
          htmlFor="message"
          className="text-sm font-medium text-slate-200"
        >
          How can we help?
        </label>

        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="mt-2 w-full resize-y rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-blue-400/50 focus:ring-2 focus:ring-blue-400/20"
          placeholder="Tell us about your Amazon advertising account, current challenges and what you want to improve."
        />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950 text-blue-500"
        />

        <label
          htmlFor="consent"
          className="text-sm leading-6 text-slate-400"
        >
          I agree that Prime Retail AI may use the submitted information to
          respond to my enquiry in accordance with the Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>

      {status === "success" ? (
        <div
          role="status"
          className="mt-5 rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-4 py-3 text-sm leading-6 text-emerald-200"
        >
          Thank you. Your enquiry has been recorded. Our team will contact you
          after reviewing the details.
        </div>
      ) : null}

      {status === "error" ? (
        <div
          role="alert"
          className="mt-5 rounded-xl border border-red-300/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-200"
        >
          Please complete all required fields before submitting the form.
        </div>
      ) : null}
    </form>
  );
}