import Link from "next/link";

const navigation = [
  { name: "Features", href: "/#features" },
  { name: "How It Works", href: "/#workflow" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 font-bold text-white shadow-lg shadow-blue-500/20">
            PR
          </div>

          <div>
            <p className="text-base font-semibold text-white">
              Prime Retail AI
            </p>
            <p className="text-xs text-slate-400">
              Amazon Ads Intelligence
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:text-white sm:block"
          >
            Book a Demo
          </Link>

          <Link
            href="/contact"
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-400"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}