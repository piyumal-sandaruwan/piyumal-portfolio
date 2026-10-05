"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["ABOUT", "#about"],
  ["STACK", "#skills"],
  ["PROJECTS", "#projects"],
  ["CERTIFICATIONS", "#certifications"],
  ["PIPELINE", "#journey"],
  ["CONTACT", "#contact"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.06] bg-[#050609]/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-7 lg:px-10">
        
        {/* =====================================================
            TERMINAL BRAND
        ====================================================== */}

        <a
          href="#top"
          className="focus-ring flex items-center font-mono text-[10px] tracking-[0.05em] sm:text-[11px]"
        >
          <span className="text-cyan-400">piyumal@portfolio</span>
          <span className="text-zinc-600">:</span>
          <span className="text-zinc-500">~</span>
          <span className="text-zinc-600">$</span>
          <span className="ml-1 text-zinc-300">whoami</span>
        </a>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <div className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="focus-ring font-mono text-[10px] tracking-[.16em] text-zinc-500 transition-colors duration-200 hover:text-cyan-400"
            >
              {label}
            </a>
          ))}
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring rounded-lg border border-white/[.08] p-2 text-zinc-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-400 md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================== */}

      {open ? (
        <div className="border-t border-white/[.06] bg-[#050609]/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="focus-ring block rounded-lg px-3 py-3 font-mono text-xs tracking-[.14em] text-zinc-400 transition-colors hover:bg-white/[.03] hover:text-cyan-400"
            >
              {label}
            </a>
          ))}
        </div>
      ) : null}
    </header>
  );
}