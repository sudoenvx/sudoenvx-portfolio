import { SectionLabel } from "./section-label";
import { Card } from "@/components/ui/card";
import { CheckCircle2, LayoutGrid, Rocket, Target, Workflow } from "lucide-react";

interface ServiceItem {
    title: string;
    description: string;
    tags: string[];
    icon: React.ReactNode;
    featured?: boolean;
    highlights?: string[];
}

export const Services = () => {
    const services: ServiceItem[] = [
        {
            title: "System Design & Architecture",
            description:
                "Design scalable backend systems and application architecture with a focus on maintainability and performance.",
            tags: ["APIs","Scalability", "System Design"],
            icon: <Target className="w-5 h-5" />,
            featured: true,
            highlights: [
                "Clarify ICP, differentiation, and core message",
                "Design offer packages and pricing anchors",
                "Build a 90‑day execution roadmap",
            ],
        },
        {
            title: "Fullstack Application Development",
            featured: true,
            description:
                "Build fast, reliable web applications using modern frameworks with strong focus on UX and performance.",
            tags: ["React", "Next.js", "TypeScript"],
            icon: <LayoutGrid className="w-5 h-5" />,
        },
        {
            title: "Backend Systems & Automation",
            description: "Optimize lead capture and reporting for your sales team.",
            tags: ["CRM setup", "Lead routing", "Reporting"],
            icon: <Workflow className="w-5 h-5" />,
        },
        {
            title: "MVP & Product Development",
            description: "Build, measure, and refine with real business impact in mind.",
            tags: ["MVP build", "Analytics", "Optimization"],
            icon: <Rocket className="w-5 h-5" />,
        },
        {
            title: "Technical Debt Audit",
            description: "Identify areas of improvement in your codebase, architecture, and infrastructure.",
            tags: ["Code review", "Technical debt"],
            icon: <CheckCircle2 className="w-5 h-5" />,
        }
    ];

    const featuredServices = services.filter((service) => service.featured);
    const otherServices = services.filter((service) => !service.featured);

    return (
        <div className="section mb-11" id="services">
            <SectionLabel>What I Do</SectionLabel>
            <div className="flex flex-col gap-6">
                {/* <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-3 max-w-120">
                        <h3 className="text-[28px] md:text-[28px] font-bold text-white leading-tight">
                            My special service for your business development
                        </h3>
                        <p className="text-[14.5px] text-text-secondary leading-[1.7] font-light max-w-[520px]">
                            I blend strategy, design, and engineering to help you unlock growth.
                            Each engagement is built around clear outcomes, quick iterations, and
                            measurable progress.
                        </p>
                    </div>
                </div> */}

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                    <div className="flex flex-col gap-4">
                        {featuredServices.map((service) => (
                            <Card key={service.title} className="rounded-xl p-4 transition-colors bg-card hover:bg-card-hover h-fit">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-9 w-9 rounded-lg bg-secondary text-primary-text flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <div className="text-[15px] font-semibold text-secondary">
                                            {service.title}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-[2px] text-primary font-bold">
                                            Core Expertise
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[14px] text-text-secondary leading-[1.7] font-light max-w-[560px]">
                                    {service.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] bg-primary rounded-[6px] px-2.5 py-1 text-primary-text font-medium"
                                        >
                                            {tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                        ))}
                    </div>

                    <div className="grid gap-4">
                        {otherServices.map((service) => (
                            <Card
                                key={service.title}
                                className="rounded-xl p-4 transition-colors bg-card hover:bg-card-hover "
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="h-9 w-9 rounded-lg bg-secondary text-secondary-text flex items-center justify-center">
                                        {service.icon}
                                    </div>
                                    <div>
                                        <div className="text-[15px] font-semibold text-secondary">
                                            {service.title}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-[2px] text-primary font-bold">
                                            Core Expertise
                                        </div>
                                    </div>
                                    
                                </div>
                                <p className="text-[13.5px] text-text-secondary leading-[1.6] font-light">
                                    {service.description}
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {service.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-[11px] bg-primary rounded-[5px] px-2 py-0.5 text-primary-text font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
