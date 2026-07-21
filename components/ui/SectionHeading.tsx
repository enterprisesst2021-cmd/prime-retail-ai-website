type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  alignment = "left",
}: SectionHeadingProps) {
  const isCentered = alignment === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <div className="inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={[
          eyebrow ? "mt-6" : "",
          "text-4xl font-semibold tracking-tight text-white sm:text-5xl",
        ].join(" ")}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={[
            "mt-6 text-lg leading-8 text-slate-400",
            isCentered ? "mx-auto" : "",
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}