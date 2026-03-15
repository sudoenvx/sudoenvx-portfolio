import { BookOpen, Star, Target, Trophy } from "lucide-react";
import { SectionLabel } from "./section-label";
import { Card } from "@/components/ui/card";

interface Achievement {
    icon: React.ReactNode;
    label: string;
    description: string;
}

export const Achievements = () => {
    const achievements: Achievement[] = [
        {
            icon: <Trophy className="w-[32px] h-[32px] text-primary" />,
            label: "Top Contributor",
            description: "React community 2024"
        },
        {
            icon: <Target className="w-[32px] h-[32px] text-primary" />,
            label: "Speaker",
            description: "Frontend conferences"
        },
        {
            icon: <BookOpen className="w-[32px] h-[32px] text-primary" />,
            label: "50+ Articles",
            description: "Technical writing"
        },
        {
            icon: <Star className="w-[32px] h-[32px] text-primary" />,
            label: "5k+ Stars",
            description: "Open source projects"
        }
    ];

    return (
        <div className="section mb-11">
            <SectionLabel>Achievements</SectionLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {achievements.map((achievement, index) => (
                    <Card
                        key={index}
                        className="rounded-xl p-5 text-center transition-colors bg-card hover:bg-card-hover flex flex-col items-center"
                    >
                        <div className="mb-3">
                            {achievement.icon}
                        </div>
                        <div className="text-[13px] font-semibold text-foreground mb-1">
                            {achievement.label}
                        </div>
                        <div className="text-xs text-foreground">
                            {achievement.description}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
