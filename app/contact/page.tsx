import type { Metadata } from "next";
import { ContactForm } from "@/src/domains/home/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Ali Tarek",
  description:
    "Get in touch for collaborations, freelance work, or full-time opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="text-center mb-11">
        <div className="text-[12px] uppercase tracking-[3px] text-primary font-jetbrains mb-3">
          Contact
        </div>
        <h1 className="font-playfair text-[34px] font-bold text-text-primary mb-3">
          Let&apos;s Build Something Great
        </h1>
        <p className="text-[15px] text-text-secondary max-w-[620px] mx-auto leading-[1.7] font-light">
          Share your idea, timeline, and goals. I&apos;ll get back with next
          steps and a plan for execution.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
