import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 hover:bg-blue-400",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10",
  ghost:
    "text-slate-300 hover:bg-white/5 hover:text-white",
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-xl px-6 py-3.5",
        "text-sm font-semibold transition duration-200",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-blue-400 focus-visible:ring-offset-2",
        "focus-visible:ring-offset-slate-950",
        variants[variant],
        className,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}