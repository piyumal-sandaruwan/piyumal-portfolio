"use client";

import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handler = (event: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handler, { passive: true });
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] hidden md:block"
      style={{
        background:
          "radial-gradient(260px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,240,255,.055), transparent 70%)",
      }}
    />
  );
}
