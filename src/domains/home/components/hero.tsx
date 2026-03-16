import { Clock, Globe, MapPin } from "lucide-react";

interface Badge {
    icon: React.ReactNode;
    text: string;
}

export const Hero = () => {
    const badges: Badge[] = [
        { icon: <Clock className="w-[14px] h-[14px]" />, text: "Available for opportunities" },
        { icon: <MapPin className="w-[14px] h-[14px]" />, text: "Alexandria, Egypt" },
        { icon: <Globe className="w-[14px] h-[14px]" />, text: "English · Arabic" }
    ];

    return (
        <div className="text-center mb-[58px] relative">
            <h1 className="text-[36px] font-bold text-white tracking-[-0.5px] mb-1.5">
                Ali Tarek
            </h1>
            <div className="text-[15px] text-primary mb-[18px] opacity-85">
                @sudoenvx
            </div>
            <p className="text-[15px] text-text-secondary max-w-[520px] mx-auto mb-7 font-light leading-[1.7]">
                Senior Frontend Engineer crafting high-performance web applications.
                Passionate about clean architecture, developer experience, and turning
                complex problems into elegant interfaces.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
                {badges.map((badge, index) => (
                    <div
                        key={index}
                        className="inline-flex items-center gap-[7px] bg-secondary text-secondary-text rounded-[20px] px-3.5 py-1.5  text-[12.5px] cursor-default"
                    >
                        {badge.icon}
                        {badge.text}
                    </div>
                ))}
            </div>
        </div>
    );
};
