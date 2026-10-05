import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-5">
      <div>
        <p className="font-mono text-xs tracking-[.2em] text-cyan">404 / ROUTE_NOT_FOUND</p>
        <h1 className="mt-4 text-5xl font-semibold">Signal lost.</h1>
        <Link href="/" className="focus-ring mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm">
          Return to system
        </Link>
      </div>
    </main>
  );
}
