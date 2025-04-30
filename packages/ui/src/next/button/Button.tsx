"use client";

import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

import cn from "@core/ui/cn";
import Link, { type LinkProps } from "next/link";

const buttonVariants = cva(
    "cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
        variants: {
            variant: {
                default: "bg-black text-white shadow-xs hover:bg-black/90",
                destructive:
                    "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
                outline:
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2 has-[>svg]:px-3",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
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
    const {
        className,
        href,
        variant,
        size,
        disabled,
        asChild = false,
        ...passThroughProps
    } = props;

    // If pass an `href`-attr is passed it's `<a>`, otherwise it's a `<button />`
    const isLink = typeof props.href !== "undefined";

    const element = React.createElement("button", {
        ...passThroughProps,
        disabled,
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

    return href ? (
        <Link
            className={cn({
                "cursor-not-allowed": disabled,
            })}
            href={href}
        >
            {element}
        </Link>
    ) : (
        element
    );
});

export { Button, buttonVariants };
