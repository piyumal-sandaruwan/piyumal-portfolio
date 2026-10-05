 "use client";

import { motion, useReducedMotion } from "framer-motion";
import { Box, CheckCircle2, Cloud, Code2, GitBranch, Server, ShieldCheck } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stages = [
  ["01", "CODE", Code2],
  ["02", "GIT", GitBranch],
  ["03", "CI", Server],
  ["04", "TEST", CheckCircle2],
  ["05", "QUALITY", ShieldCheck],
  ["06", "DOCKER", Box],
  ["07", "CLOUD", Cloud],
] as const;

export function DevOpsJourney() {
  const reduced = useReducedMotion();

  return (
    <section id="journey" className="py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            index="04"
            eyebrow="PIPELINE"
            title="From commit to cloud."
            description="The engineering mindset I want to demonstrate: automate the path from source code to a reproducible deployment."
          />
        </ScrollReveal>

        <div className="mt-14 overflow-x-auto pb-5">
          <div className="relative flex min-w-[880px] items-center justify-between gap-2 px-2">
            <div className="absolute left-8 right-8 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan/0 via-cyan/40 to-pink/0" />
            {stages.map(([num, label, Icon], index) => (
              <motion.div
                key={label}
                initial={reduced ? false : { opacity: 0, scale: .8 }}
                whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: .5, delay: index * .1 }}
                className="glass relative z-10 flex h-24 w-28 shrink-0 flex-col items-center justify-center rounded-2xl"
              >
                <Icon size={18} className="text-cyan" />
                <span className="mt-2 font-mono text-[9px] tracking-[.15em] text-white">{label}</span>
                <span className="mt-1 font-mono text-[8px] text-zinc-700">{num}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["AUTOMATE", "Pipelines reduce manual mistakes and make delivery repeatable."],
            ["VERIFY", "Tests and quality checks create feedback before deployment."],
            ["SECURE", "Secrets stay outside source control and production boundaries are explicit."],
          ].map(([title, text], index) => (
            <ScrollReveal key={title} delay={index * .08}>
              <div className="glass rounded-2xl p-6">
                <p className="font-mono text-[10px] tracking-[.2em] text-cyan">{title}</p>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
