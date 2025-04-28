"use client";

import type { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
    return (
        <button
            type="button"
            className={className}
            onClick={() => alert("Hello from your app!")}
        >
            {children}
        </button>
    );
};
