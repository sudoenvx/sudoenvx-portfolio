import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/src/domains/home/components/section-label";
import { projects } from "@/src/data/projects";

export const metadata: Metadata = {
  title: "Projects | Ali Tarek",
  description:
    "A curated selection of product, frontend, and fullstack projects focused on performance, scalability, and clean architecture.",
};

export default function ProjectsPage() {
  return (
    <div className="py-24">
      <div className="text-center mb-11">
        <div className="text-[12px] uppercase tracking-[3px] text-primary font-jetbrains mb-3">
          Portfolio
        </div>
        <h1 className="text-[32px] font-bold text-white mb-3">
          Featured Projects
        </h1>
        <p className="text-[15px] text-text-secondary max-w-155 mx-auto leading-[1.7] font-light">
          A focused collection of work spanning analytics platforms, headless
          commerce, and offline-first experiences.
        </p>
      </div>

      <div className="section mb-11">
        <SectionLabel>Selected Work</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="rounded-[14px] p-5 transition-colors bg-card hover:bg-card-hover group"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="block text-[17px] font-semibold text-secondary group-hover:text-primary transition-colors"
                  >
                    {project.name}
                  </Link>

                </div>
                <div className="flex shrink-0 bg-secondary rounded-md overflow-hidden">
                  {project.github && (
                    <a
                      href={project.github}
                      title="GitHub"
                      className="hover:text-primary-text px-1.5 py-1 hover:bg-primary text-primary-text transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4.25 h-4.25" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      title="Live Demo"
                      className="px-1.5 py-1 text-primary-text hover:bg-primary transition-colors flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4.25 h-4.25" />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[13.5px] text-text-secondary leading-[1.6] mb-4 font-light">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-[11px] bg-primary rounded-[5px] px-2 py-0.5 text-primary-text font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-secondary hover:text-primary transition-colors"
              >
                View project details
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
