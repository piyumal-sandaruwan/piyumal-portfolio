import Link from "next/link";

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const className =
    "focus-ring group inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 " +
    (variant === "primary"
      ? "bg-cyan text-black shadow-[0_0_30px_rgba(0,240,255,.16)] hover:bg-white hover:shadow-[0_0_40px_rgba(0,240,255,.28)]"
      : "border border-white/10 bg-white/[.025] text-zinc-200 hover:border-cyan/50 hover:text-cyan");

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
  }

  return <Link href={href} className={className}>{children}</Link>;
}
