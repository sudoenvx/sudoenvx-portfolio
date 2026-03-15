import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps<T extends React.ElementType = "div"> = {
    as?: T;
    className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "className">;

export const Card = React.forwardRef(
    <T extends React.ElementType = "div">(
        { as, className, ...props }: CardProps<T>,
        ref: React.ForwardedRef<React.ElementRef<T>>
    ) => {
        const Component = as || "div";
        return (
            <Component ref={ref} className={cn("bg-bg-card", className)} {...props} />
        );
    }
) as <T extends React.ElementType = "div">(
    props: CardProps<T> & { ref?: React.ForwardedRef<React.ElementRef<T>> }
) => React.ReactElement | null;

Card.displayName = "Card";