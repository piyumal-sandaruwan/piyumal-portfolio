import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[.26em] text-cyan">
        <span>{index}</span>
        <span className="h-px w-10 bg-cyan/40" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-4xl font-semibold tracking-[-.035em] text-white sm:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-5 max-w-2xl leading-7 text-zinc-500">{description}</p> : null}
    </div>
  );
}
