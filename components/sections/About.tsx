import { Terminal, ArrowUpRight } from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/[.06] py-24 sm:py-28"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[5%] top-1/3 h-72 w-72 rounded-full bg-cyan/5 blur-3xl" />

        <div className="absolute right-[5%] bottom-0 h-80 w-80 rounded-full bg-cyan/5 blur-3xl" />

        <div className="absolute right-[7%] top-20 hidden font-mono text-[9px] uppercase tracking-[.3em] text-cyan/10 lg:block">
          SYSTEM / PROFILE
        </div>

        <div className="absolute right-[7%] top-32 hidden items-center gap-2 lg:flex">
          <span className="h-px w-16 bg-cyan/10" />
          <span className="h-1 w-1 rounded-full bg-cyan/30" />
        </div>
      </div>

      <Container>
        <div className="relative grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* LEFT */}
          <ScrollReveal>
            <SectionHeading
              index="01"
              eyebrow="ABOUT"
              title="Build. Automate. Learn. Deploy."
              description="My learning style is practical: build a system, understand how it works, automate the repetitive parts, and keep improving."
            />

            {/* Engineering mindset */}
            <div className="mt-8 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-zinc-700 lg:flex">
              <Terminal
                size={13}
                strokeWidth={1.6}
                className="text-cyan/60"
              />

              <span>engineering mindset</span>

              <span className="h-px w-8 bg-cyan/20" />

              <span>01 / 04</span>
            </div>

            {/* Small profile information */}
            <div className="mt-10 hidden border-t border-white/[.06] pt-6 lg:block">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-[.2em] text-zinc-600">
                  Current focus
                </span>

                <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-cyan/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  Learning
                </span>
              </div>

              <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500">
                Developing practical skills in DevOps, cloud infrastructure,
                container orchestration and infrastructure automation.
              </p>
            </div>
          </ScrollReveal>

          {/* RIGHT */}
          <div>
            <ScrollReveal delay={0.08}>
              {/* Main introduction */}
              <p className="max-w-4xl text-xl leading-9 text-zinc-300 sm:text-2xl">
                I&apos;m a BICT (Hons) undergraduate at the University of
                Colombo building a career around
                <span className="text-cyan">
                  {" "}
                  DevOps, cloud, networking and full-stack engineering
                </span>
                .
              </p>

              {/* Supporting paragraph */}
              <p className="mt-7 max-w-3xl leading-8 text-zinc-600">
                My projects have given me experience across application
                development, deployment and infrastructure. I enjoy
                understanding what happens beyond the application itself —
                from source code and containers to networks, servers and
                production environments.hhhhhhh
              </p>
            </ScrollReveal>

            {/* Currently learning */}
            <ScrollReveal delay={0.16}>
              <div className="mt-12 border-t border-white/[.06] pt-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-[.22em] text-cyan">
                    Currently learning
                  </span>

                  <span className="h-px w-10 bg-cyan/20" />

                  <span className="font-mono text-[9px] text-zinc-700">
                    2026
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-7 gap-y-4">
                  <span className="group flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan/70" />

                    <span className="font-mono text-sm text-zinc-400 transition-colors group-hover:text-cyan">
                      Kubernetes
                    </span>
                  </span>

                  <span className="group flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan/70" />

                    <span className="font-mono text-sm text-zinc-400 transition-colors group-hover:text-cyan">
                      Terraform
                    </span>
                  </span>

                  <span className="group flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan/70" />

                    <span className="font-mono text-sm text-zinc-400 transition-colors group-hover:text-cyan">
                      Ansible
                    </span>
                  </span>

                  <span className="group flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-cyan/70" />

                    <span className="font-mono text-sm text-zinc-400 transition-colors group-hover:text-cyan">
                      Cloud Infrastructure
                    </span>
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom statement */}
            <ScrollReveal delay={0.22}>
              <div className="mt-10 flex items-start gap-4 border-l border-cyan/20 pl-5">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="mt-1 shrink-0 text-cyan/60"
                />

                <p className="max-w-2xl text-sm leading-7 text-zinc-600">
                  My goal is to grow from building applications into
                  designing, automating and operating reliable systems.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}