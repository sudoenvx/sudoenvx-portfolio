import { SectionLabel } from "./section-label";
import { Card } from "@/components/ui/card";

interface Certification {
    name: string;
    issuer: string;
    date: string;
}

export const Certifications = () => {
    const certs: Certification[] = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "Valid until Dec 2026"
        },
        {
            name: "Meta Front-End Developer Professional",
            issuer: "Meta",
            date: "Completed Jan 2024"
        },
        {
            name: "Accessibility Specialist",
            issuer: "IAAP",
            date: "Valid until Jun 2026"
        },
        {
            name: "Google Cloud Professional",
            issuer: "Google Cloud",
            date: "Completed Mar 2023"
        }
    ];

    return (
        <div className="section mb-11">
            <SectionLabel>Certifications</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {certs.map((cert, index) => (
                    <Card
                        key={index}
                        className="rounded-xl p-5 transition-colors bg-card hover:bg-card-hover"
                    >
                        <div className="text-sm font-semibold text-primary mb-1">
                            {cert.name}
                        </div>
                        <div className="text-xs text-accent font-bold mb-1.5">
                            {cert.issuer}   
                        </div>
                        <div className="font-jetbrains text-[11px] text-text-muted">
                            {cert.date}
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};
