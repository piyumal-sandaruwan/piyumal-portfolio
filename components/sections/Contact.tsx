import {
  Github,
  Gitlab,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const contacts = [
  {
    label: "EMAIL",
    value: "piyumalsandaruwanb@gmail.com",
    href: "mailto:piyumalsandaruwanb@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "PHONE",
    value: "076 431 8050",
    href: "tel:+94764318050",
    icon: Phone,
    external: false,
  },
  {
    label: "GITHUB",
    value: "github.com/piyumal-sandaruwan",
    href: "https://github.com/piyumal-sandaruwan",
    icon: Github,
    external: true,
  },
  {
    label: "GITLAB",
    value: "gitlab.com/piyumal-sandaruwan",
    href: "https://gitlab.com/piyumal-sandaruwan",
    icon: Gitlab,
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/piyumal-sandaruwan-0099793a9",
    href: "https://www.linkedin.com/in/piyumal-sandaruwan-0099793a9/",
    icon: Linkedin,
    external: true,
  },
] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-white/[.06] py-24 sm:py-28"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* LEFT */}
          <ScrollReveal>
            <SectionHeading
              index="06"
              eyebrow="CONTACT"
              title="Let's connect."
              description="I'm looking for an internship where I can contribute to real projects, learn from experienced engineers and continue developing my DevOps and cloud engineering skills."
            />

            <div className="mt-8 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[.2em] text-zinc-700 lg:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan/60" />
              <span>available for opportunities</span>
            </div>
          </ScrollReveal>

          {/* RIGHT */}
          {/* RIGHT */}
<div>
  <ScrollReveal delay={0.08}>
    <div className="flex flex-wrap items-center gap-3">
      {contacts.map(({ label, href, icon: Icon, external }) => (
        <a
          key={label}
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
          className="
            focus-ring
            flex h-12 w-12 items-center justify-center
            rounded-xl
            border border-white/[.08]
            bg-white/[.015]
            text-zinc-500
            transition-all duration-300
            hover:-translate-y-1
            hover:border-cyan/30
            hover:bg-cyan/[.03]
            hover:text-cyan
          "
        >
          <Icon
            size={19}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </a>
      ))}
    </div>
  </ScrollReveal>

  <ScrollReveal delay={0.16}>
    <div className="mt-8 flex items-start gap-4">
      <span className="mt-2 h-px w-8 shrink-0 bg-cyan/30" />

      <p className="max-w-xl text-sm leading-7 text-zinc-600">
        Whether it is an internship opportunity, a technical
        discussion or a project collaboration, feel free to get
        in touch.
      </p>
    </div>
  </ScrollReveal>
</div>
        </div>
      </Container>
    </section>
  );
}