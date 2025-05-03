import type { VariantProps } from "class-variance-authority";

import type { inputStyles } from "./TextField";

export type InputFieldProps<
    Translations extends Record<string, string> = object,
> = {
    label?: React.ReactNode;
    hint?: string;
    hintErrors?: string[];
    inputIsFullWidth?: boolean;
    error?: string;
    labelSrOnly?: boolean;
    containerClassName?: string;
    showAsteriskIndicator?: boolean;
    className?: string;
    placeholder?: string;
    dataTestid?: string;
    noLabel?: boolean;
    onClickAddon?: () => void;
} & InputProps & {
        labelProps?: React.ComponentProps<typeof Label>;
        labelClassName?: string;
    };

export type InputProps = Omit<
    React.JSX.IntrinsicElements["input"],
    "size" | "ref"
> &
    VariantProps<typeof inputStyles> & {
        isFullWidth?: boolean;
    };
