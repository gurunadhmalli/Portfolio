type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, id, align = "left" }: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`reveal mb-14 md:mb-16 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p
        className={`mb-4 flex items-center gap-3 text-sm font-medium text-accent-hover ${centered ? "justify-center" : ""}`}
      >
        <span className="h-px w-6 bg-accent" aria-hidden />
        {eyebrow}
      </p>
      <h2 id={id} className="text-4xl font-semibold leading-[1.1] tracking-[-0.025em] text-ink md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-5 text-lg leading-relaxed text-muted">{description}</p>}
    </div>
  );
}
