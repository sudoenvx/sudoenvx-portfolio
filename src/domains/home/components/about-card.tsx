import { Monitor, Star, Users } from "lucide-react";
import { SectionLabel } from "./section-label";
import { Card } from "@/components/ui/card";

interface MetaItem {
    icon: React.ReactNode;
    text: string;
}

export const AboutCard = () => {
    const metaItems: MetaItem[] = [
        { icon: <Monitor className="w-[15px] h-[15px]" />, text: "8+ Years Experience" },
        { icon: <Users className="w-[15px] h-[15px]" />, text: "Teams Led & Mentored" },
        { icon: <Star className="w-[15px] h-[15px]" />, text: "Open Source Contributor" }
    ];

    return (
        <div className="section mb-11">
            <SectionLabel>About</SectionLabel>
            <Card className="rounded-[14px] p-5 relative overflow-hidden bg-card">
                <p className="text-[14.5px] text-text-secondary leading-[1.85] font-light">
                    I&apos;m a Senior Frontend Engineer with 8+ years of hands-on experience building
                    scalable, accessible web applications. My work spans enterprise SaaS platforms,
                    healthcare portals, and e-commerce systems — always with a focus on performance,
                    clean code, and exceptional user experience.
                </p>
                <p className="text-[14.5px] text-text-secondary leading-[1.85] font-light mt-3.5">
                    I thrive in collaborative environments, leading cross-functional teams and
                    mentoring junior developers. Outside of work, I enjoy contributing to open source,
                    exploring new developer tooling, and writing about frontend architecture.
                </p>
                <div className="flex flex-wrap gap-2 mt-6 pt-5.5 border-t border-foreground">
                    {metaItems.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 text-[13px] text-secondary-text bg-secondary px-2 py-0.5 rounded-md">
                            <div className="text-amber font-bold">{item.icon}</div>
                            {item.text}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};
