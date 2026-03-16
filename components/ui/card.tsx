import * as React from "react";
import { cn } from "@/lib/utils";

type CardProps = {
    as?: keyof React.JSX.IntrinsicElements;
    className?: string;
    [key: string]: unknown;
};

export function Card({ as = "div", className, ...props }: CardProps) {
    const classes = cn("bg-bg-card", className);

    if (as === "section") {
        return <section className={classes} {...props} />;
    }
    if (as === "article") {
        return <article className={classes} {...props} />;
    }
    if (as === "main") {
        return <main className={classes} {...props} />;
    }
    // Add more elements as needed

    // Default to div
    return <div className={classes} {...props} />;
}