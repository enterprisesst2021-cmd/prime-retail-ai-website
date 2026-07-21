import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
};

export default function Section({
  children,
  id,
  className = "",
  containerClassName = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={[
        "relative border-t border-white/10 px-6 py-24",
        "lg:px-8 lg:py-32",
        className,
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto max-w-7xl",
          containerClassName,
        ].join(" ")}
      >
        {children}
      </div>
    </section>
  );
}