"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

import {
  activities,
  gallery,
} from "@/data/extracurricular";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/components/Container";

export function Extracurricular() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section id="extracurricular" className="py-24">
      <Container>

        {/* Section Heading */}
        <ScrollReveal>
          <SectionHeading
            index="05"
            eyebrow="EXTRACURRICULAR ACTIVITIES"
            title="BEYOND THE CLASSROOM"
            description="Club involvement, editorial responsibilities, media work and creative contributions beyond my academic work."
          />
        </ScrollReveal>

        {/* Positions */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {activities.map((item) => (
            <ScrollReveal key={item.number}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/[.08] bg-[#080b10] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/30">

                <div className="flex items-start justify-between">
                  <span className="font-mono text-2xl text-cyan">
                    {item.number}
                  </span>

                  <span className="font-mono text-[10px] tracking-[.16em] text-zinc-600">
                    {item.category}
                  </span>
                </div>

                <div className="mt-7 grid gap-6 sm:grid-cols-[1fr_180px]">

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 font-mono text-xs text-cyan">
                      {item.organization}
                    </p>

                    <p className="mt-5 text-sm leading-6 text-zinc-500">
                      {item.description}
                    </p>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[.08] bg-white/[.03]">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${item.organization}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="180px"
                    />
                  </div>

                </div>

                <span className="pointer-events-none absolute bottom-0 right-0 h-px w-24 bg-gradient-to-l from-cyan/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Creative & Event Work */}
        <div className="mt-16">

          <ScrollReveal>
            <div className="mb-6">
              <p className="font-mono text-[10px] tracking-[.2em] text-cyan">
                CREATIVE & EVENT WORK
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                Selected Contributions
              </h3>
            </div>
          </ScrollReveal>

          {/* Gallery */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery
              .slice(0, showMore ? gallery.length : 3)
              .map((item, index) => (
                <motion.article
                 key={`${item.title}-${index}`}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.04,
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/[.08] bg-[#080b10]"
                >

                  <div className="relative aspect-[4/3] overflow-hidden bg-white/[.03]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex items-center justify-between p-5">

                    <div>
                      <p className="font-mono text-[9px] tracking-[.16em] text-cyan">
                        {item.category}
                      </p>

                      <h4 className="mt-2 text-sm font-medium text-white">
                        {item.title}
                      </h4>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="text-zinc-600 transition-colors group-hover:text-cyan"
                    />

                  </div>
                </motion.article>
              ))}
          </div>

          {/* Show More / Show Less */}
          {gallery.length > 3 && (
            <div className="mt-8 flex justify-center">

              <button
                type="button"
                onClick={() => setShowMore((value) => !value)}
                aria-expanded={showMore}
                className="group inline-flex items-center gap-2 rounded-lg border border-white/[.08] px-5 py-3 font-mono text-[10px] tracking-[.16em] text-zinc-400 transition hover:border-cyan/30 hover:text-cyan"
              >
                {showMore ? "SHOW LESS" : "SHOW MORE"}

                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    showMore ? "rotate-180" : ""
                  }`}
                />
              </button>

            </div>
          )}

        </div>

      </Container>
    </section>
  );
}