import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  ExternalLink,
  Github,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "@/src/domains/home/components/section-label";
import { projects } from "@/src/data/projects";
import { Contact } from "@/src/domains/home/components/contact";
import { ProjectGallery } from "@/components/projects/project_gallery";

type PageProps = {
  params: { id: string };
};

const getProjectById = (id: string) =>
  
  projects.find((project) => project.id === id);

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const project = getProjectById(resolvedParams.id);
  if (!project) {
    return {
      title: "Project Not Found | Ali Tarek",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.name} | Ali Tarek`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const resolvedParams = await Promise.resolve(params);
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  const architectureBlocks = [
    { label: "Frontend", items: project.architecture.frontend },
    { label: "Backend", items: project.architecture.backend },
    { label: "Database", items: project.architecture.database },
    { label: "Infrastructure", items: project.architecture.infrastructure },
    { label: "Integrations", items: project.architecture.integrations },
  ].filter((block) => block.items && block.items.length > 0);

  return (
    <div className="py-24">
      <div className="mb-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[13px] text-text-muted hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start mb-11">
        <div>
          <h1 className="text-[22px] sm:text-[24px] md:text-[26px] font-bold text-white mb-3">
            {project.name}
          </h1>
          <p className="text-[15px] text-text-secondary leading-[1.7] font-light mb-4">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-text hover:bg-primary/90 px-4 py-1.5 text-[13px] font-medium transition-colors"
              >
                Live Demo
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-text hover:bg-secondary/90 px-4 py-1.5 text-[13px] font-medium transition-colors"
              >
                GitHub
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.docs && (
              <a
                href={project.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 text-secondary hover:text-primary hover:border-primary px-4 py-2 text-[13px] font-medium transition-colors"
              >
                Documentation
                <BookOpen className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-sm overflow-hidden shadow bg-card">
              <div className="flex items-center gap-2 px-3 py-2 bg-card-hover/90 border-b border-foreground/10">
                <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
                <span className="text-[10px] text-text-muted uppercase tracking-[2px] ml-2">
                  {project.name}
                </span>
              </div>
              <div className="aspect-[16/10] bg-card-hover">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-text-muted text-md uppercase font-medium">
                    Preview coming soon
                  </div>
                )}
              </div>
            </div>
        </div>
      </div>

      <div className="section mb-11">
        <SectionLabel>Overview</SectionLabel>
        <Card className="rounded-[14px] p-5 bg-card">
          <p className="text-[14px] text-text-secondary leading-[1.8] font-light">
            {project.overview}
          </p>
          {project.solutionOverview && (
            <p className="text-[14px] text-text-secondary leading-[1.8] font-light mt-3.5">
              {project.solutionOverview}
            </p>
          )}
        </Card>
      </div>

      <div className="section mb-11">
        <SectionLabel>Problem & Motivation</SectionLabel>
        <Card className="rounded-[14px] p-5 bg-card">
          <p className="text-[14px] text-text-secondary leading-[1.8] font-light">
            {project.problemStatement}
          </p>
          <p className="text-[14px] text-text-secondary leading-[1.8] font-light mt-3.5">
            {project.motivation}
          </p>
        </Card>
      </div>

      <div className="section mb-11">
        <SectionLabel>Key Features</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2">
          {project.keyFeatures.map((feature, index) => (
            <Card key={index} className="rounded-[14px] p-4 bg-card">
              <div className="text-[14px] font-semibold text-secondary mb-2">
                {feature.title}
              </div>
              <p className="text-[13.5px] text-text-secondary leading-[1.6]">
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="section mb-11">
        <SectionLabel>Architecture</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2">
          {architectureBlocks.map((block) => (
            <Card key={block.label} className="rounded-[14px] p-4 bg-card">
              <div className="text-[13px] uppercase tracking-[2px] text-primary mb-3 font-jetbrains">
                {block.label}
              </div>
              <div className="flex flex-col gap-2 text-[13.5px] text-text-secondary leading-[1.6]">
                {block.items?.map((item, index) => (
                  <div key={index} className="flex items-start gap-2.5">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="section mb-11">
        <SectionLabel>Engineering Decisions</SectionLabel>
        <Card className="rounded-[14px] p-5 bg-card">
          <div className="flex flex-col gap-2.5">
            {project.engineeringDecisions.map((decision, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 text-[13.5px] text-text-secondary"
              >
                <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{decision}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="section mb-11">
        <SectionLabel>Challenges & Solutions</SectionLabel>
        <div className="grid gap-4">
          {project.challenges.map((item, index) => (
            <Card key={index} className="rounded-[14px] p-5 bg-card">
              <div className="text-[11px] uppercase tracking-[2px] text-primary font-jetbrains mb-2">
                Challenge
              </div>
              <p className="text-[13.5px] text-text-secondary leading-[1.6] mb-3">
                {item.challenge}
              </p>
              <div className="text-[11px] uppercase tracking-[2px] text-primary font-jetbrains mb-2">
                Solution
              </div>
              <p className="text-[13.5px] text-text-secondary leading-[1.6]">
                {item.solution}
              </p>
            </Card>
          ))}
        </div>
      </div>

      <div className="section mb-11">
        <SectionLabel>Performance & Scalability</SectionLabel>
        <Card className="rounded-[14px] p-5 bg-card">
          <div className="flex flex-col gap-2.5">
            {project.performance.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 text-[13.5px] text-text-secondary"
              >
                <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="section mb-11">
        <SectionLabel>Lessons Learned</SectionLabel>
        <Card className="rounded-[14px] p-5 bg-card">
          <div className="flex flex-col gap-2.5">
            {project.lessons.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 text-[13.5px] text-text-secondary"
              >
                <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="section mb-11">
        <SectionLabel>Future Improvements</SectionLabel>
        <Card className="rounded-[14px] p-5 bg-card">
          <div className="flex flex-col gap-2.5">
            {project.futureImprovements.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-2.5 text-[13.5px] text-text-secondary"
              >
                <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="section mb-11">
          <SectionLabel>Gallery</SectionLabel>
          <ProjectGallery gallery={project.gallery} projectName={project.name} />
        </div>
      )}

      <div className="section mb-11">
        <SectionLabel>Tech Stack</SectionLabel>
        <Card className="rounded-[14px] p-5 bg-card">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.stack.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="text-[11px] bg-primary rounded-[5px] px-2 py-0.5 text-primary-text font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 text-[12.5px]">
            {[
              { label: "Role", value: project.role },
              { label: "Team", value: project.team },
              { label: "Timeline", value: project.timeline },
            ].map((item) => (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[12px] font-medium text-slate-900 shadow-sm"
              >
                <span className="text-[10px] uppercase tracking-[1.5px] text-primary-text">
                  {item.label}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-400" aria-hidden />
                <span className="text-slate-900/80">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Contact />
    </div>
  );
}
