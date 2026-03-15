import { Code2, Database, Layout, Terminal } from "lucide-react";
import { SectionLabel } from "./section-label";
import { Card } from "@/components/ui/card";

interface SkillCategory {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

export const Skills = () => {
    const categories: SkillCategory[] = [
        {
            title: "Frontend Development",
            icon: <Layout className="w-4 h-4" />,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Framer Motion", "Redux", "Zustand"]
        },
        {
            title: "Backend & Database",
            icon: <Database className="w-4 h-4" />,
            skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Prisma", "GraphQL", "Supabase", "Redis"]
        },
        {
            title: "DevOps & Tools",
            icon: <Terminal className="w-4 h-4" />,
            skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Linux", "Nginx", "Jest"]
        },
        {
            title: "Languages & Concepts",
            icon: <Code2 className="w-4 h-4" />,
            skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "REST API", "Microservices", "System Design", "Agile"]
        }
    ];

    return (
        <div className="section mb-11">
            <SectionLabel>Professional Skills</SectionLabel>
            <div className="grid grid-cols-2 gap-6">
                {categories.map((category, index) => (
                    <Card key={index} className="rounded-2xl p-5 transition-colors bg-card">
                        <div className="flex items-center gap-3 mb-4">
                            {/*<div className="w-8 h-8 rounded-lg bg-accent-dim flex items-center justify-center text-accent">*/}
                            {/*    {category.icon}*/}
                            {/*</div>*/}
                            <h3 className="text-md font-bold text-white">
                                {category.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                                <span
                                    key={skillIndex}
                                    className="px-1.5 py-0.5 bg-primary text-primary-text text-[12px] font-medium rounded-[5px] transition-colors"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
