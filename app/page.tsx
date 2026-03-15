import { AboutCard } from "@/src/domains/home/components/about-card";
import { Experience } from "@/src/domains/home/components/experience";
import { Hero } from "@/src/domains/home/components/hero";
import { Projects } from "@/src/domains/home/components/projects";
import { Skills } from "@/src/domains/home/components/skills";
import { Stats } from "@/src/domains/home/components/stats";

export default function Home() {
  return (
    <div className="py-24">
      <Hero />
      <Stats />
      <AboutCard />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
