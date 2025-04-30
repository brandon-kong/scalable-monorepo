"use client";

import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import cn from "@core/ui/cn";
import Link, { type LinkProps } from "next/link";

const buttonVariants = cva(
    [
        "disabled:cursor-not-allowed aria-disabled:cursor-not-allowed",
        "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive aria-disabled:opacity-50",
    ],
    {
        variants: {
            variant: {
                default: [
                    // Typography
                    "text-sm",
                    "font-medium",

                    // Positioning
                    "relative",
                    "flex",
                    "w-full",
                    "items-center",
                    "justify-center",
                    "gap-2",

                    // Borders and Background
                    "border",
                    "border-[transparent]",
                    "bg-neutral-900",
                    "rounded-xl",
                    "bg-gradient-to-b",
                    "from-[#2c2c30]",
                    "to-[#1d1d20]",

                    // Padding
                    "px-4",
                    "py-2",

                    // Colors and Effects
                    "text-white",
                    "shadow-inner",
                    "hover:opacity-90",
                    "hover:bg-[#1f1f1f]",
                    "hover:shadow-none",

                    // Focus and Accessibility
                    "focus-visible:outline-none",
                    "focus-visible:ring-2",
                    "focus-visible:ring-offset-1",
                    "focus-visible:ring-neutral-900",

                    // Transitions
                    "transition-all",
                    "duration-150",
                    "ease-in-out",

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
                    // Colors and Effects
                    "bg-secondary",
                    "text-secondary-foreground",
                    "shadow-xs",
                    "hover:bg-secondary/80",
                ],
                ghost: [
                    // Colors and Effects
                    "hover:bg-accent",
                    "hover:text-accent-foreground",

                    // Dark Mode
                    "dark:hover:bg-accent/50",
                ],
                link: [
                    // Typography
                    "text-primary",
                    "underline-offset-4",
                    "hover:underline",
                ],
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                xs: "h-6 p-2 leading-none text-xs rounded-md",
                sm: "h-8 rounded-md gap-2 px-3 has-[>svg]:px-2.5",
                lg: "h-12 rounded-xl px-6 has-[>svg]:px-4",
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
    const { variant, size, disabled } = props;

    // If pass an `href`-attr is passed it's `<a>`, otherwise it's a `<button />`
    const isLink = typeof props.href !== "undefined";
    const elementType = isLink ? "a" : "button";

    const element = React.createElement(elementType, {
        ...props,
        type: !isLink ? props.type : undefined,
        ref: forwardedRef,
        className: cn(buttonVariants({ size, variant }), props.className),
        // if we click a disabled button, we prevent going through the click handler
        onClick: disabled
            ? (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                  e.preventDefault();
              }
            : props.onClick,
    });

    return element;
});

export { Button, buttonVariants };
