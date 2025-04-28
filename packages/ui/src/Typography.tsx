import { type VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const typographyVariants = cva("", {
    variants: {
        variant: {
            h1: "scroll-m-20 font-semibold leading-none tracking-normal text-6xl text-balance",
            h2: "scroll-m-20 text-4xl font-semibold tracking-tight first:mt-0",
            h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
            h4: "scroll-m-20 text-xl font-semibold tracking-tight",
            p: "text-lg",
        },
    },
    defaultVariants: {
        variant: "p",
    },
});

type Element = "p" | "h1" | "h2" | "h3" | "h4";

function Typography({
    children,
    className,
    variant,
}: React.ComponentProps<Element> & VariantProps<typeof typographyVariants>) {
    const Comp = variant ?? "p";

    return (
        <Comp
            className={twMerge(
                typographyVariants({ variant, className }),
                className,
            )}
        >
            {children}
        </Comp>
    );
}

export default Typography;
export { typographyVariants };
