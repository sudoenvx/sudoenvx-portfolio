"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, PlusIcon, QuoteIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionLabel } from "./section-label";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Daniel Roberts",
        role: "Startup Founder",
        company: "Nimbus Labs",
        quote:
            "Ali was a steady, clear partner from kickoff to launch. The new interface shipped on time, performance improved across the board, and communication was always on point.",
    },
    {
        name: "Lena Morano",
        role: "Product Lead",
        company: "Atlas Health",
        quote:
            "We needed speed without sacrificing quality. Ali brought structure, thoughtful UX decisions, and a system that our team could scale confidently.",
    },
    {
        name: "Omar Elsayed",
        role: "Engineering Manager",
        company: "Fieldstack",
        quote:
            "Ali delivered a clean architecture and crisp UI polish. Our stakeholders noticed the difference immediately, and the team appreciated the maintainability.",
    },
];

const getInitials = (name: string) =>
    name
        .split(" ")
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

export const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = testimonials.length;
    const active = testimonials[activeIndex];

    const goTo = (index: number) => {
        const nextIndex = (index + total) % total;
        setActiveIndex(nextIndex);
    };

    const handlePrev = () => goTo(activeIndex - 1);
    const handleNext = () => goTo(activeIndex + 1);

    return (
        <div className="section mb-11">
            <SectionLabel>Testimonials</SectionLabel>
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] items-center">
                <div className="space-y-4">
                    <h3 className="text-[28px] md:text-[28px] font-bold text-white leading-tight">
                        Client Feedback <br /> & Experiences
                    </h3>
                    <p className="text-[14.5px] text-text-secondary leading-[1.7] font-light max-w-[420px]">
                        I treat every engagement like a product partnership. Clear expectations,
                        fast iterations, and long-term maintainability are always at the core.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="flex -space-x-2">
                            {testimonials.slice(0, 3).map((item, index) => (
                                <div
                                    key={`${item.name}-${index}`}
                                    className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-text shadow shadow-card-hover border border-white text-[12px] font-semibold"
                                >
                                    {getInitials(item.name)}
                                </div>
                            ))}
                            <div className="h-10 w-10 rounded-full bg-primary text-primary-text flex items-center justify-center text-[12px] font-semibold ">
                                <PlusIcon className="w-4 h-4" />
                            </div>
                        </div>
                        <div>
                            <div className="text-[18px] font-bold text-secondary">10+ Clients</div>
                            <div className="text-[11px] uppercase tracking-[2px] text-text-muted">
                                Trust my work
                            </div>
                        </div>
                    </div>
                </div>

                <Card className="relative rounded-[18px] p-4 bg-card overflow-hidden">
                    <div className="relative">
                        <div
                            id={`testimonial-${activeIndex}`}
                            aria-live="polite"
                            className="text-[15px] md:text-[16px] text-text-secondary leading-[1.8] font-light"
                        >
                            &quot;{active.quote}&quot;
                        </div>

                        <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-secondary-text text-[13px] font-semibold">
                                    {getInitials(active.name)}
                                </div>
                                <div>
                                    <div className="text-[14px] font-semibold text-secondary">
                                        {active.name}
                                    </div>
                                    <div className="text-[12px] text-text-muted">
                                        {active.role} - {active.company}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={handlePrev}
                                    aria-label="Previous testimonial"
                                    aria-controls={`testimonial-${activeIndex}`}
                                    className="h-8 w-8 cursor-pointer rounded-full bg-secondary text-secondary-text hover:bg-secondary/90 transition-colors flex items-center justify-center"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    type="button"
                                    onClick={handleNext}
                                    aria-label="Next testimonial"
                                    aria-controls={`testimonial-${activeIndex}`}
                                    className="h-8 w-8 cursor-pointer rounded-full bg-secondary text-secondary-text hover:bg-secondary/90 transition-colors flex items-center justify-center"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-4 flex flex-wrap items-center gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={`testimonial-dot-${index}`}
                                    type="button"
                                    onClick={() => goTo(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                    aria-pressed={index === activeIndex}
                                    className={`h-2.5 rounded-full transition-all ${
                                        index === activeIndex
                                            ? "w-7 bg-primary"
                                            : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
                                    }`}
                                />
                            ))}
                            <div className="ml-auto text-[11px] font-bold uppercase tracking-[2px] text-text-muted">
                                {activeIndex + 1} / {total}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};
