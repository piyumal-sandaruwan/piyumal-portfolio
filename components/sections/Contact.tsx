import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-28">
      <Container>
        <ScrollReveal>
          <div className="neon-border glass relative overflow-hidden rounded-[2rem] p-7 sm:p-10 lg:p-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan/10 blur-[100px]" />
            <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <SectionHeading
                  index="06"
                  eyebrow="CONTACT"
                  title="Let’s connect."
                  description="I’m looking for an internship where I can contribute to real systems, learn from engineers and grow into a stronger DevOps / Cloud engineer."
                />
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="mailto:piyumal@example.com"><Mail size={15} className="mr-2" /> EMAIL</Button>
                  <Button href="https://www.linkedin.com/" variant="secondary" external>LINKEDIN <ArrowUpRight size={14} className="ml-2" /></Button>
                </div>
              </div>

              <div className="flex gap-3">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="focus-ring rounded-full border border-white/10 p-3 text-zinc-500 hover:border-cyan hover:text-cyan"><Github size={18} /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus-ring rounded-full border border-white/10 p-3 text-zinc-500 hover:border-cyan hover:text-cyan"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
