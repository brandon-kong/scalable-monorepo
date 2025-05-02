"use client";

import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import cn from "@core/ui/cn";
import type { LinkProps } from "next/link";

const buttonVariants = cva(
    [
        "relative select-none",
        // Focus and Accessibility
        "before:pointer-events-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-neutral-900",
        "disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-50",
        "w-full cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-disabled:opacity-50",
    ],
    {
        variants: {
            variant: {
                default: [
                    // Borders and Background
                    "border",
                    "border-[transparent]",
                    "bg-neutral-900",
                    "bg-gradient-to-b",
                    "from-[#2c2c30]",
                    "to-[#1d1d20]",

                    // Colors and Effects
                    "text-white",
                    "shadow-inner",
                    "hover:opacity-90",
                    "hover:bg-[#1f1f1f]",
                    "hover:shadow-none",

                    // Before pseudo-element
                    "before:pointer-events-none",
                    "before:absolute",
                    "before:inset-0",
                    "before:rounded-lg",
                    "before:shadow-[0px_2px_0.4px_0px_rgba(255,_255,_255,_0.16)_inset]",
                ],
                destructive: [
                    // Colors and Effects
                    "bg-destructive",
                    "text-white",
                    "shadow-xs",
                    "hover:bg-destructive/90",

                    // Focus and Accessibility
                    "focus-visible:ring-destructive/20",
                    "dark:focus-visible:ring-destructive/40",
                    "dark:bg-destructive/60",
                ],
                outline: [
                    // Borders and Background
                    "border",
                    "bg-background",

                    // Colors and Effects
                    "shadow-xs",
                    "hover:bg-accent",
                    "hover:text-accent-foreground",

                    // Dark Mode
                    "dark:bg-input/30",
                    "dark:border-input",
                    "dark:hover:bg-input/50",
                ],
                secondary: [
                    "text-black",

                    // Borders and Background
                    "border",
                    "border-black/20",
                    "bg-[#F2F2F3]",
                ],
                ghost: [
                    // Colors and Effects
                    "hover:bg-accent",
                    "hover:text-accent-foreground",

                    // Dark Mode
                    "dark:hover:bg-accent/50",
                ],
                link: [
                    "inline-block",
                    "p-0",

                    // Typography
                    "text-primary",
                    "underline-offset-4",
                    "hover:underline",
                ],
            },
            size: {
                default: "h-12 rounded-xl px-6 has-[>svg]:px-4",
                xs: "h-6 p-2 leading-none text-xs rounded-md",
                sm: "h-8 rounded-md gap-2 px-3 has-[>svg]:px-2.5",
                lg: "text-md h-12 rounded-xl px-6 has-[>svg]:px-4",
                icon: "size-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export type ButtonBaseProps = {
    className?: string;
    href?: string;
    variant?: VariantProps<typeof buttonVariants>["variant"];
    size?: VariantProps<typeof buttonVariants>["size"];
    asChild?: boolean;
    disabled?: boolean;
    loading?: boolean;
};

type ButtonProps = ButtonBaseProps &
    (
        | (Omit<React.JSX.IntrinsicElements["a"], "href" | "ref"> & LinkProps)
        | (Omit<React.JSX.IntrinsicElements["button"], "ref"> & {
              href?: never;
          })
    );

const Button = React.forwardRef<
    HTMLAnchorElement | HTMLButtonElement,
    ButtonProps
>((props, forwardedRef) => {
    const { variant, size, loading, ...passThroughProps } = props;

    // If pass an `href`-attr is passed it's `<a>`, otherwise it's a `<button />`
    const isLink = typeof props.href !== "undefined";
    const elementType = isLink ? "a" : "button";

    const element = React.createElement(
        elementType,
        {
            ...passThroughProps,
            type: !isLink ? props.type : undefined,
            ref: forwardedRef,
            className: cn(buttonVariants({ size, variant }), props.className),
            // if we click a disabled button, we prevent going through the click handler
            onClick: props.disabled
                ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                      e.preventDefault();
                  }
                : props.onClick,
        },
        <>
            <span
                className={cn(
                    "contents", // renders the children without this div wrapped around it
                    loading ? "invisible" : "visible",
                )}
            >
                {props.children}
            </span>

            {loading && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                    <svg
                        className={cn("mx-4 h-5 w-5 animate-spin")}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <title>Loading</title>
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </div>
            )}
        </>,
    );

    return element;
});

export { Button, buttonVariants };
