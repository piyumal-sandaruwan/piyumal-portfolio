import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { journey } from "@/data/journey";

export function Education() {
  return (
    <section className="border-y border-white/[.06] bg-white/[.01] py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading index="05" eyebrow="JOURNEY" title="Learning by building." />
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[5px] top-0 w-px bg-gradient-to-b from-cyan/70 via-white/10 to-transparent" />
          <div className="space-y-9">
            {journey.map(([year, title, detail], index) => (
              <ScrollReveal key={year} delay={index * .07}>
                <div className="relative grid gap-3 pl-8 sm:grid-cols-[150px_1fr] sm:gap-7">
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border border-cyan bg-[#050609] shadow-[0_0_14px_rgba(0,240,255,.6)]" />
                  <p className="font-mono text-[10px] tracking-[.16em] text-cyan">{year}</p>
                  <div>
                    <h3 className="text-lg font-medium text-white">{title}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
