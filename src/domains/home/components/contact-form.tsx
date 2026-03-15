import { Send } from "lucide-react";
import { SectionLabel } from "./section-label";
import { Contact } from "./contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
    return (
        <div className="section mb-11">
            <SectionLabel>Contact</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

                <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="group">
                            <Input
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                        <div className="group">
                            <Input
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="group">
                        <Input
                            type="tel"
                            placeholder="Phone Number (Optional)"
                        />
                    </div>
                    <div className="group">
                        <Textarea
                            rows={6}
                            placeholder="Tell me about your project..."
                        />
                    </div>
                    <div className="flex justify-end items-center">
                        <Button
                            className="bg-primary text-primary-text cursor-pointer"
                            type="submit"
                        >
                            <span>Send Message</span>
                            <Send className="w-4 h-4" />
                        </Button>
                    </div>
                </form>
            </div>

            <Contact />
        </div>
    );
};
