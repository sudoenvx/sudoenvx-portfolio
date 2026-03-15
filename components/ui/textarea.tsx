import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                ref={ref}
                className={cn(
                    "w-full resize-none rounded-lg bg-card px-2 py-2 text-sm text-secondary transition-colors placeholder:text-text-muted/80 focus:border-accent focus:outline-none",
                    className
                )}
                {...props}
            />
        );
    }
);

Textarea.displayName = "Textarea";