"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { certifications } from "@/data/certifications";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/components/Container";

export function Certifications() {
  return (
    <section id="certifications" className="py-24">
      <Container>
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            index="04"
            eyebrow="CERTIFICATIONS"
            title="CERTIFICATIONS & ACHIEVEMENTS"
            description="Certifications, achievements and continuous learning milestones from my technical journey."
          />
        </ScrollReveal>

        {/* Certification cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <ScrollReveal key={item.number}>
              <article className="group relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl border border-white/[.08] bg-[#080b10] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-2xl font-medium tracking-[.08em] text-cyan">
                    {item.number}
                  </span>

                  {item.href && item.href !== "#" ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${item.title} certificate`}
                      className="rounded-full border border-white/[.08] p-2 text-zinc-500 transition hover:border-cyan/40 hover:text-cyan"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  ) : (
                    <span className="rounded-full border border-white/[.08] p-2 text-zinc-600">
                      <ArrowUpRight size={16} />
                    </span>
                  )}
                </div>

                {/* Certificate image */}
                <div className="mt-6 overflow-hidden rounded-xl border border-white/[.08] bg-white/[.03]">
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={item.image}
                      alt={`${item.title} certificate`}
                      fill
                      className="object-contain p-3 transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Certificate information */}
                <div className="mt-6">
                  <p className="font-mono text-[10px] tracking-[.2em] text-cyan">
                    • {item.category}
                  </p>

                  <h3 className="mt-3 text-lg font-semibold leading-tight tracking-[-.02em] text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-mono text-xs text-zinc-500">
                    {item.issuer}
                    <span className="mx-2 text-zinc-700">·</span>
                    {item.year}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-zinc-500">
                    {item.description}
                  </p>
                </div>

                {/* Bottom link */}
                {item.href && item.href !== "#" ? (
                  <div className="mt-auto pt-6">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[.16em] text-zinc-400 transition-colors hover:text-cyan"
                    >
                      VIEW CERTIFICATE
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                ) : null}

                {/* Subtle bottom accent */}
                <span className="pointer-events-none absolute bottom-0 right-0 h-px w-24 bg-gradient-to-l from-cyan/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}