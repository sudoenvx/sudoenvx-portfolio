'use client';

import { Send } from "lucide-react";
import { useState } from "react";
import { SectionLabel } from "./section-label";
import { Contact } from "./contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMail } from "@/src/services/mail-service";

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{
        type: "idle" | "success" | "error";
        message: string;
    }>({
        type: "idle",
        message: "",
    });

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const message = formData.get("message");

        setIsSubmitting(true);
        setStatus({ type: "idle", message: "" });

        try {
            await sendMail({
                name: name as string,
                email: email as string,
                phone: phone as string,
                message: message as string,
            });

            (e.currentTarget as HTMLFormElement)?.reset();
            setStatus({
                type: "success",
                message: "Thanks for reaching out. I'll get back to you shortly.",
            });
        } catch (error) {
            console.error("Error sending message:", error);
            setStatus({
                type: "error",
                message: "Something went wrong while sending. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="section mb-11">
            <SectionLabel>Contact</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-sm:gap-8">
                <div>
                    <h3 className="text-3xl font-bold text-secondary mb-4 leading-tight">
                        Let&apos;s build something <br />
                        <span className="text-primary">amazing together.</span>
                    </h3>
                    <p className="leading-relaxed mb-8 font-light">
                        I&apos;m currently available for freelance work and open to full-time opportunities.
                        If you have a project in mind or just want to chat, feel free to reach out.
                    </p>

                </div>

                <form className="space-y-5" onSubmit={handleContactSubmit} aria-busy={isSubmitting}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="group">
                            <Input
                                type="text"
                                placeholder="Name"
                                name="name"
                                disabled={isSubmitting}

                            />
                        </div>
                        <div className="group">
                            <Input
                                type="email"
                                placeholder="Email"
                                name="email"
                                disabled={isSubmitting}
                            />
                        </div>
                    </div>
                    <div className="group">
                        <Input
                            type="tel"
                            placeholder="Phone Number (Optional)"
                            name="phone"
                            disabled={isSubmitting}

                        />
                    </div>
                    <div className="group">
                        <Textarea
                            rows={6}
                            placeholder="Tell me about your project..."
                            name="message"
                            disabled={isSubmitting}
                        />
                    </div>
                    {status.type !== "idle" && (
                        <div
                            role="status"
                            aria-live="polite"
                            className={`rounded-xl border-2 px-4 py-3 ${
                                status.type === "success"
                                    ? "border-primary/40 bg-card"
                                    : "border-[#d64550] bg-card"
                            }`}
                        >
                            <div
                                className={`text-[11px] uppercase tracking-[2px] font-jetbrains ${
                                    status.type === "success"
                                        ? "text-primary"
                                        : "text-red-400"
                                }`}
                            >
                                {status.type === "success" ? "Message sent" : "Send failed"}
                            </div>
                            <div className="mt-1 text-[13px] text-text-secondary leading-[1.6]">
                                {status.message}
                            </div>
                        </div>
                    )}
                    <div className="flex justify-end items-center">
                        <Button
                            className="bg-primary text-primary-text cursor-pointer"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span>Sending</span>
                                    <span className="h-4 w-4 rounded-full border-2 border-black/30 border-t-black animate-spin" />
                                </>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send className="w-4 h-4" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </div>

            <Contact />
        </div>
    );
};
