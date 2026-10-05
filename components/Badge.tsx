export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/[.08] bg-white/[.025] px-3 py-1 font-mono text-[10px] text-zinc-400">
      {children}
    </span>
  );
}
