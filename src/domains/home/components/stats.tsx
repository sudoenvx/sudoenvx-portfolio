import { Card } from "@/components/ui/card";

interface Stat {
    value: string;
    label: string;
}

export const Stats = () => {
    const stats: Stat[] = [
        {
            value: "6+",
            label: "Years Experience"
        },
        {
            value: "10+",
            label: "Projects Completed"
        },
        {
            value: "10+",
            label: "Happy Clients"
        },
        {
            value: "240",
            label: "Commits Pushed"
        }
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-11">
            {stats.map((stat, index) => (
                <Card key={index} className="rounded-xl p-4 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-colors group bg-card">
                    <div className="font-playfair text-3xl font-bold text-primary mb-1">
                        {stat.value}
                    </div>
                    <div className="text-xs  text-text-secondary uppercase tracking-widest">
                        {stat.label}
                    </div>
                </Card>
            ))}
        </div>
    );
};
