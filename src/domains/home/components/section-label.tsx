import React from "react";

export const SectionLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="font-jetbrains font-bold text-xs uppercase tracking-[2.5px] text-primary mb-3.5 flex items-center gap-2.5">
        {children}
        <div className="flex-1 h-px bg-foreground" />
    </div>
);
