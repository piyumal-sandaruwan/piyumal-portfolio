import { ShieldCheck, Workflow, Network, Cloud } from "lucide-react";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const cards = [
  [Workflow, "AUTOMATION", "Turn repetitive delivery steps into reliable pipelines."],
  [Cloud, "CLOUD", "Deploy and operate containerized workloads with cloud fundamentals."],
  [Network, "NETWORKING", "Understand the traffic path, segmentation and infrastructure underneath."],
  [ShieldCheck, "SECURITY", "Keep secrets server-side and treat secure defaults as part of engineering."],
] as const;

export function About() {
  return (
    <section id="about" className="relative border-y border-white/[.06] py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[.75fr_1.25fr]">
          <ScrollReveal>
            <SectionHeading
              index="01"
              eyebrow="ABOUT"
              title="Build. Break. Learn. Ship."
              description="My learning style is practical: build a system, understand the failure points, automate the boring parts, and improve it."
            />
          </ScrollReveal>

          <div>
            <ScrollReveal delay={.08}>
              <p className="text-xl leading-9 text-zinc-300">
                I&apos;m a BICT (Hons) undergraduate at the University of Colombo building a career around
                <span className="text-cyan"> DevOps, cloud and networking</span>.
              </p>
              <p className="mt-6 max-w-3xl leading-8 text-zinc-600">
                My projects span React, Spring Boot, Node.js, Docker, Jenkins, AWS, Nginx, Linux and network
                design. I&apos;m interested in the engineering layer between source code and a reliable production system.
              </p>
            </ScrollReveal>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {cards.map(([Icon, title, text], index) => (
                <ScrollReveal key={title} delay={.12 + index * .07}>
                  <div className="glass group relative overflow-hidden rounded-2xl p-5 transition duration-500 hover:-translate-y-1 hover:border-cyan/20">
                    <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan/5 blur-2xl transition group-hover:bg-cyan/10" />
                    <Icon size={19} className="relative text-cyan" />
                    <p className="relative mt-6 font-mono text-[10px] tracking-[.18em] text-zinc-400">{title}</p>
                    <p className="relative mt-2 text-sm leading-6 text-zinc-600">{text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
