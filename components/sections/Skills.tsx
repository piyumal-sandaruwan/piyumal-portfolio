import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/Badge";

const groups = [
  ["FRONTEND", ["Next.js", "React", "TypeScript", "Tailwind CSS"]],
  ["BACKEND", ["Spring Boot", "Node.js", "REST APIs", "Laravel"]],
  ["DEVOPS", ["Docker", "Jenkins", "GitHub Actions", "Linux", "Nginx"]],
  ["CLOUD / DATA", ["AWS EC2", "Cloudflare", "MySQL", "MongoDB"]],
] as const;

export function Skills() {
  return (
    <section id="skills" className="py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            index="02"
            eyebrow="STACK"
            title="A stack built around shipping."
            description="I care more about understanding the system than collecting technologies."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {groups.map(([name, items], index) => (
            <ScrollReveal key={name} delay={index * .07}>
              <div className="glass neon-border rounded-2xl p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[.2em] text-cyan">{name}</span>
                  <span className="font-mono text-[9px] text-zinc-700">0{index + 1}</span>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {items.map((item) => <Badge key={item}>{item}</Badge>)}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
