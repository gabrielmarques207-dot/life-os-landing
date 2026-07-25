type SectionHeadingProps = {
  kicker: string;
  title: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  kicker,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      <span className="mb-3 block text-small font-semibold uppercase tracking-wide text-terracotta-dark">
        {kicker}
      </span>
      <h2 className="text-h1 text-ink">{title}</h2>
    </div>
  );
}
