"use client";

import { Button } from "@core/ui/next/button";
import Typography from "@core/ui/typography";

type FormValues = {
    email: string;
};

export default function LoginPage() {
    // set up the form schema
    return (
        <main className={"p-20 max-w-2xl mx-auto flex flex-col gap-4"}>
            <Typography variant={"h2"}>We sent you an email</Typography>
            <Typography>
                Check your email for a verification link. If you didn’t receive
                an email, click the button below to resend it.
            </Typography>
            <Button
                variant={"secondary"}
                onClick={() =>
                    alert("Resend email functionality not implemented yet.")
                }
            >
                Resend Email
            </Button>
        </main>
    );
}
