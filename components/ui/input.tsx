import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type = "text", ...props }, ref) => {
        return (
            <input
                ref={ref}
                type={type}
                className={cn(
                    "w-full rounded-lg bg-white/5 px-2 py-1.5 text-sm text-text-primary transition-colors placeholder:text-text-muted/80 focus:border-accent focus:outline-none",
                    className
                )}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";