import * as React from "react";

import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, type = "button", ...props }, ref) => {
        return (
            <button
                ref={ref}
                type={type}
                className={cn(
                    "inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-accent-contrast transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-60",
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";