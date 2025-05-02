import type { ReactNode } from "react";

import { cn } from "@core/ui/cn";

interface SeparatorProps {
    className?: string;
    children?: ReactNode;
}

function Hr() {
    return <hr className={"flex-1 border-neutral-300"} />;
}

export function Separator({ className, children }: SeparatorProps) {
    return (
        <div
            className={cn(
                "w-full flex items-center justify-center gap-4 text-neutral-500 text-sm",
                className,
            )}
        >
            <Hr />
            {children}
            <Hr />
        </div>
    );
}
