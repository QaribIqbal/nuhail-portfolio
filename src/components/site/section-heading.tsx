import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <Heading className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[var(--text)] md:text-6xl">
        {title}
      </Heading>
      {description ? <p className="mt-5 text-base leading-7 text-[var(--text-muted)] md:text-lg">{description}</p> : null}
    </div>
  );
}
