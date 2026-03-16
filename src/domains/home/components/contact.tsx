import { Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface ContactLink {
    icon: React.ReactNode;
    text: string;
    href: string;
}

export const Contact = () => {
    const contactLinks: ContactLink[] = [
        {
            icon: <Mail className="w-3.75 h-3.75" />,
            text: "Email",
            href: "mailto:sudoenvx@gmail.com"
        },
        {
            icon: <Linkedin className="w-3.75 h-3.75" />,
            text: "LinkedIn",
            href: "https://linkedin.com/in/sudoenvx"
        },
        {
            icon: <Github className="w-3.75 h-3.75" />,
            text: "GitHub",
            href: "https://github.com/sudoenvx"
        }
    ];

    return (
        <div className="flex justify-center gap-2.5 flex-wrap mt-13">
            {contactLinks.map((link, index) => (
                <Link key={index} href={link.href}>
                    <Card
                        as="a"
                        href={link.href}
                        className="inline-flex items-center gap-2 rounded-full px-4.5 py-1.5 bg-secondary text-secondary-text hover:bg-primary no-underline text-[13px] transition-colors hover:text-accent"
                    >
                        {link.icon}
                        {link.text}
                    </Card>
                </Link>
            ))}
        </div>
    );
};
