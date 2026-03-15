import { ExternalLink, Github } from "lucide-react";
import { SectionLabel } from "./section-label";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { projects } from "@/src/data/projects";

export const Projects = () => {
    return (
        <div className="section mb-11">
            <SectionLabel>Projects</SectionLabel>
            {projects.map((project, index) => (
                <Card
                    key={index}
                    className="rounded-[14px] p-5 mb-3 transition-colors bg-card hover:bg-card-hover relative overflow-hidden group"
                >
                    <div className="flex justify-between items-start gap-4 mb-2">
                        <Link href={`/projects/${project.id}`} className="block">
                            <div className="text-[17px] font-semibold text-secondary group-hover:text-primary transition-colors">
                                {project.name}
                            </div>
                        </Link>
                        <div className="flex shrink-0 bg-secondary rounded-md overflow-hidden">
                            {project.github && (
                                <a
                                    href={project.github}
                                    title="GitHub"
                                    className="hover:text-primary-text px-1.5 py-1 hover:bg-primary text-primary-text hover:text-primary-accent transition-colors flex items-center"
                                >
                                    <Github className="w-[17px] h-[17px]" />
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    title="Live Demo"
                                    className="px-1.5 py-1 text-primary-text hover:bg-primary hover:text-primary-text transition-colors flex items-center"
                                >
                                    <ExternalLink className="w-[17px] h-[17px]" />
                                </a>
                            )}
                        </div>
                    </div>
                    <p className="text-[13.5px] text-text-secondary leading-[1.6] mb-3.5 font-light">
                        {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-3.5">
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
                            className="text-xs font-medium text-text-muted hover:text-accent transition-colors flex items-center gap-1 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                        >
                            Read More <ArrowRight className="w-3 h-3" />
                        </Link> */}
                    </div>
                </Card>
            ))}
            <div className="flex justify-center mt-6">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-[13px] font-medium text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
                >
                    View All Projects
                    <ExternalLink className="w-3.5 h-3.5" />
                </Link>
            </div>
        </div>
    );
};
