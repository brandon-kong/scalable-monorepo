import type React from "react";

import cn from "@core/ui/cn";

export function Label(props: React.JSX.IntrinsicElements["label"]) {
    const { className, htmlFor, ...restProps } = props;
    return (
        <label
            className={cn(
                "text-default text-emphasis mb-2 block text-sm font-medium leading-none",
                className,
            )}
            htmlFor={htmlFor}
            {...restProps}
        >
            {props.children}
        </label>
    );
}
