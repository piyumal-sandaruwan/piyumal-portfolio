import { Terminal } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-y border-white/[.06] py-24 sm:py-28"
    >
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[10%] top-1/3 h-64 w-64 rounded-full bg-cyan/[.025] blur-3xl" />

        <div className="absolute right-[8%] bottom-0 h-72 w-72 rounded-full bg-cyan/[.02] blur-3xl" />

        <div className="absolute right-[7%] top-20 hidden font-mono text-[9px] uppercase tracking-[.3em] text-cyan/[.08] lg:block">
          TECHNICAL STACK
        </div>
      </div>

      <Container>
        {/* Section heading */}
        <ScrollReveal>
          <SectionHeading
            index="02"
            eyebrow="STACK"
            title="Tools I build with."
            description="A practical technology stack built through coursework, personal projects and hands-on development."
          />

          <div className="mt-7 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-zinc-700 lg:flex">
            <Terminal
              size={13}
              strokeWidth={1.5}
              className="text-cyan/50"
            />

            <span>technical capabilities</span>

            <span className="h-px w-10 bg-cyan/15" />

            <span>{skillGroups.length} groups</span>
          </div>
        </ScrollReveal>

        {/* Skill groups */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {skillGroups.map(
            ({ number, title, description, skills }, index) => (
              <ScrollReveal
                key={title}
                delay={0.05 + index * 0.05}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/[.07] bg-white/[.015] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan/20 hover:bg-white/[.025]">
                  {/* Corner detail */}
                  <div className="absolute right-6 top-6 h-px w-8 bg-cyan/10 transition-all duration-500 group-hover:w-14 group-hover:bg-cyan/30" />

                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <p className="font-mono text-[10px] tracking-[.2em] text-cyan/80">
                      {title}
                    </p>

                    <span className="font-mono text-[9px] tracking-[.15em] text-zinc-700">
                      {number}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-600">
                    {description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {skills.map(({ name, icon: Icon }) => (
                      <div
                        key={name}
                        className="group/skill flex items-center gap-2 rounded-lg border border-white/[.07] bg-white/[.02] px-3 py-2 transition-all duration-300 hover:border-cyan/20 hover:bg-cyan/[.025]"
                      >
                        {Icon ? (
                          <Icon
                            size={14}
                            aria-hidden="true"
                            className="text-zinc-500 transition-colors duration-300 group-hover/skill:text-cyan"
                          />
                        ) : null}

                        <span className="font-mono text-[10px] text-zinc-500 transition-colors duration-300 group-hover/skill:text-zinc-300">
                          {name}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-7 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan/50" />

                    <span className="h-px w-8 bg-white/[.06] transition-all duration-500 group-hover:w-12 group-hover:bg-cyan/20" />

                    <span className="font-mono text-[8px] uppercase tracking-[.18em] text-zinc-700">
                      hands-on
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}