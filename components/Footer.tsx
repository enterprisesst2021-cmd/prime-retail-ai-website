import Link from "next/link";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white shadow-lg shadow-blue-500/20">
                PR
              </div>

              <div>
                <p className="font-semibold text-white">Prime Retail AI</p>
                <p className="text-xs text-slate-500">
                  Amazon Ads Intelligence
                </p>
              </div>
            </Link>

            <p className="mt-5 leading-7 text-slate-400">
              AI-powered Amazon advertising analytics and optimization tools
              designed to help sellers improve visibility, efficiency and
              campaign decision-making.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              Product
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              Company
            </h3>

            <nav className="mt-5 flex flex-col gap-3">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Prime Retail AI. All rights reserved.</p>

          <p>
            Prime Retail AI is an independent software platform and is not
            affiliated with Amazon.
          </p>
        </div>
      </div>
    </footer>
  );
}