import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { DevOpsJourney } from "@/components/sections/DevOpsJourney";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Certifications } from "@/components/sections/Certifications";
import { Extracurricular } from "@/components/sections/Extracurricular";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Extracurricular />
      <DevOpsJourney />
      <Education />
      <Contact />
    </main>
  );
}
