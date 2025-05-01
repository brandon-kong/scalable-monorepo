import { forwardRef } from "react";
import { InputField } from "./TextField";
import type { InputFieldProps } from "./types";

export const EmailField = forwardRef<HTMLInputElement, InputFieldProps>(
    (props, ref) => {
        return (
            <InputField
                ref={ref}
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                inputMode="email"
                {...props}
            />
        );
    },
);
