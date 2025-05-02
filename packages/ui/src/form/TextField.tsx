"use client";

import { cva } from "class-variance-authority";
import React, { forwardRef, useId, useState } from "react";

import { cn } from "@core/ui/cn";
import { HintsOrErrors } from "./HintOrErrors";
import { Label } from "./Label";
import type { InputFieldProps, InputProps } from "./types";

export const inputStyles = cva(
    [
        // Base styles
        "rounded-xl border",
        "leading-none font-normal",

        // Colors
        "bg-white",
        "border-black/20",
        "text-black",
        "placeholder:text-muted",

        // States
        "hover:border-black",
        "focus:ring-0",
        "focus:shadow-gray-500",

        // Disabled state
        "disabled:opacity-50",
        "disabled:cursor-not-allowed",

        // Shadow
        "shadow-outline-gray-rested",

        // Transitions
        "transition",
    ],
    {
        variants: {
            size: {
                sm: "h-8 px-2 py-1 text-xs",
                md: "h-10 px-3 py-2 text-sm",
            },
        },
        defaultVariants: {
            size: "md",
        },
    },
);

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ isFullWidth = true, size = "md", className, ...passThrough }, ref) => {
        return (
            <input
                {...passThrough}
                ref={ref}
                className={cn(
                    inputStyles({ size }),
                    isFullWidth && "w-full",
                    className,
                )}
            />
        );
    },
);

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    (props, ref) => {
        const id = useId();
        const [inputValue, setInputValue] = useState<string>("");
        const name = props.name || "";

        const {
            label = name,
            labelProps,
            labelClassName,
            disabled,
            LockedIcon,
            placeholder = "",
            className,
            addOnLeading,
            addOnSuffix,
            addOnClassname,
            inputIsFullWidth,
            hint,
            type,
            hintErrors,
            labelSrOnly,
            noLabel,
            containerClassName,
            readOnly,
            showAsteriskIndicator,
            onClickAddon,
            t: __t,
            dataTestid,
            size,
            ...passThrough
        } = props;

        return (
            <div className={cn(containerClassName)}>
                {!noLabel && (
                    <Label
                        htmlFor={id}
                        className={cn(
                            labelClassName,
                            props.error && "text-error",
                        )}
                        {...labelProps}
                    >
                        {label}
                        {showAsteriskIndicator ? (
                            <span className={"ml-1 font-medium"}>*</span>
                        ) : null}
                    </Label>
                )}
                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    size={size}
                    className={cn(
                        className,
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                    )}
                    {...passThrough}
                    readOnly={readOnly}
                    ref={ref}
                    isFullWidth={inputIsFullWidth}
                    disabled={readOnly || disabled}
                />
                <HintsOrErrors hintErrors={hintErrors} fieldName={name} />
            </div>
        );
    },
);
