import { AboutCard } from "@/src/domains/home/components/about-card";
import { Achievements } from "@/src/domains/home/components/achievements";
import { Certifications } from "@/src/domains/home/components/certifications";
import { ContactForm } from "@/src/domains/home/components/contact-form";
import { Experience } from "@/src/domains/home/components/experience";
import { Hero } from "@/src/domains/home/components/hero";
import { Projects } from "@/src/domains/home/components/projects";
import { Skills } from "@/src/domains/home/components/skills";
import { Stats } from "@/src/domains/home/components/stats";
import { Testimonials } from "@/src/domains/home/components/testimonials";

export default function Home() {
  return (
    <div className="py-24">
      <Hero />
      <Stats />
      <AboutCard />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Certifications />
      <Achievements />
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
