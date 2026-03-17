import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import { ContactForm } from "@/src/domains/home/components/contact-form";
import { AppConfig } from "@/src/data/app";

export const metadata: Metadata = {
  title: "Contact | Ali Tarek",
  description:
    "Get in touch for collaborations, freelance work, or full-time opportunities.",
};

export default function ContactPage() {
  const contactMethods = [
    {
      label: AppConfig.contact.email,
      href: `mailto:${AppConfig.contact.email}`,
      icon: Mail,
    },
    {
      label: AppConfig.contact.phone,
      href: `tel:${AppConfig.contact.phone}`,
      icon: Phone,
    },
  ].filter((method) => method.label);

  return (
    <div className="py-24">
      <div className="text-center mb-11">
        <div className="text-[12px] uppercase tracking-[3px] text-primary font-jetbrains mb-3">
          Contact
        </div>
        <h1 className="text-[34px] font-bold text-white mb-3">
          Let&apos;s Build Something Great
        </h1>
        <p className="text-[15px] text-text-secondary max-w-[620px] mx-auto leading-[1.7] font-light">
          Share your idea, timeline, and goals. I&apos;ll get back with next
          steps and a plan for execution.
        </p>

        {contactMethods.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[13.5px] text-text-secondary">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <a
                  key={method.href}
                  href={method.href}
                  className="inline-flex items-center gap-2 hover:bg-secondary/85 bg-secondary px-3 py-1 text-secondary-text rounded-full  transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="transition-colors">
                    {method.label}
                  </span>
                </a>
              );
            })}
          </div>
        )}
      </div>

      <ContactForm />
    </div>
  );
}
