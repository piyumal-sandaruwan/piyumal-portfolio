export function Footer() {
  return (
    <footer className="border-t border-white/[.06] py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 font-mono text-[10px] uppercase tracking-[.14em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-7 lg:px-10">
        <span>© {new Date().getFullYear()} Piyumal Sandaruwan</span>
        <span>engineered with Next.js / TypeScript</span>
      </div>
    </footer>
  );
}
