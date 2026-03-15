import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ContactLink {
    icon: React.ReactNode;
    text: string;
    href: string;
}

export const Contact = () => {
    const contactLinks: ContactLink[] = [
        {
            icon: <Mail className="w-[15px] h-[15px]" />,
            text: "Email",
            href: "mailto:sudoenvx@gmail.com"
        },
        {
            icon: <Linkedin className="w-[15px] h-[15px]" />,
            text: "LinkedIn",
            href: "https://linkedin.com/in/sudoenvx"
        },
        {
            icon: <Globe className="w-[15px] h-[15px]" />,
            text: "Portfolio",
            href: "https://portfolio.sudoenvx.com"
        },
        {
            icon: <Github className="w-[15px] h-[15px]" />,
            text: "GitHub",
            href: "https://github.com/sudoenvx"
        }
    ];

    return (
        <div className="flex justify-center gap-2.5 flex-wrap mt-[52px]">
            {contactLinks.map((link, index) => (
                <Card
                    as="a"
                    key={index}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full px-[18px] py-1.5 bg-secondary text-secondary-text hover:bg-primary no-underline text-[13px] transition-colors hover:text-accent font-bold"
                >
                    {link.icon}
                    {link.text}
                </Card>
            ))}
        </div>
    );
};
