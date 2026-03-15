import { SectionLabel } from "./section-label";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ExperienceItem {
    title: string;
    company: string;
    period: string;
    description: string;
    highlights?: string[];
}

export const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            title: "Senior Frontend Engineer",
            company: "Tech Company Inc.",
            period: "Jan 2021 - Present",
            description: "Leading frontend development for enterprise SaaS platform serving 100k+ users. Architecting scalable component libraries and improving overall developer experience.",
            highlights: [
                "Reduced bundle size by 40% through code splitting and lazy loading",
                "Built design system adopted across 5 product teams",
                "Mentored 6 junior developers through code reviews and pair programming"
            ]
        },
        {
            title: "Frontend Engineer",
            company: "Startup Co.",
            period: "Mar 2018 - Dec 2020",
            description: "Developed core features for healthcare platform, focusing on accessibility and performance optimization.",
            highlights: [
                "Achieved WCAG 2.1 AA compliance across all user-facing features",
                "Implemented real-time notifications using WebSockets"
            ]
        },
        {
            title: "Junior Frontend Developer",
            company: "Digital Agency",
            period: "Jun 2016 - Feb 2018",
            description: "Built responsive websites and web applications for various clients across different industries."
        }
    ];

    return (
        <div className="section mb-11">
            <SectionLabel>Experience</SectionLabel>
            <div className="relative">
                {experiences.map((exp, index) => (
                    <Card
                        key={index}
                        className="rounded-[14px] p-5 mb-3 transition-colors bg-card hover:bg-card-hover"
                    >
                        <div className="mb-3">
                            <div className="font-playfair text-[17px] font-semibold text-white mb-1">
                                {exp.title}
                            </div>
                            <div className="text-sm text-primary font-bold mb-1.5">
                                {exp.company}
                            </div>
                            <div className="font-jetbrains text-xs text-text-muted">
                                {exp.period}
                            </div>
                        </div>
                        <div className="text-[13.5px] text-text-secondary leading-[1.7] mb-3.5">
                            {exp.description}
                        </div>
                        {exp.highlights && (
                            <div className="flex flex-col gap-1.5">
                                {exp.highlights.map((highlight, hIndex) => (
                                    <div key={hIndex} className="flex items-start gap-2.5 text-[13px] text-text-secondary">
                                        <span className="text-accent text-xs mt-0.5">
                                            <ChevronRight className="w-4 h-4"  />
                                        </span>
                                        {highlight}
                                    </div>
                                ))}
                            </div>
                        )}
                    </Card>
                ))}
            </div>
        </div>
    );
};
