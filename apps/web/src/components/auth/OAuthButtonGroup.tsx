"use client";

import { Button } from "@core/ui/next/button";
import { signIn } from "next-auth/react";

export default function OAuthButtonGroup() {
    return (
        <div className={"w-full"}>
            <Button onClick={() => signIn("google")} variant={"secondary"}>
                Continue with Google
            </Button>
        </div>
    );
}
