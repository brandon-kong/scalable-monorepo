"use client";

import Typography from "@core/ui/typography";
import { redirect, useSearchParams } from "next/navigation";

export default function LoginPage() {
    const searchParams = useSearchParams();

    const authType = searchParams.get("type");

    if (authType !== "email") {
        return redirect("/auth/login");
    }

    return (
        <main className={"p-20 max-w-2xl mx-auto flex flex-col gap-4"}>
            <Typography variant={"h2"}>We sent you an email</Typography>
            <Typography>
                Check your email for a verification link. If you didn’t receive
                an email, click the button below to resend it.
            </Typography>
        </main>
    );
}
