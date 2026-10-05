import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative border-y border-white/[.06] py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan/[.02] to-transparent" />
      <Container className="relative">
        <ScrollReveal>
          <SectionHeading
            index="03"
            eyebrow="PROJECTS"
            title="Selected builds from the lab."
            description="Each project is an opportunity to understand a different layer of the engineering stack."
          />
        </ScrollReveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {projects.map((project, index) => <ProjectCard key={project.number} project={project} index={index} />)}
        </div>
      </Container>
    </section>
  );
}
