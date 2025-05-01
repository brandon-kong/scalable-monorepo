"use client";

import { Button } from "@core/ui/next/button";
import { signIn } from "next-auth/react";

interface OAuthButtonGroupProps {
    disabled?: boolean;
}

export default function OAuthButtonGroup({ disabled }: OAuthButtonGroupProps) {
    return (
        <div className={"w-full"}>
            <Button
                disabled={disabled}
                onClick={() => signIn("google")}
                variant={"secondary"}
            >
                Continue with Google
            </Button>
        </div>
    );
}
