"use client";

import { EmailField, Separator } from "@core/ui/form";
import { Button } from "@core/ui/next/button";
import Typography from "@core/ui/typography";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { FormProvider, type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import OAuthButtonGroup from "~/components/auth/OAuthButtonGroup";

type FormValues = {
    email: string;
};

export default function LoginPage() {
    // set up the form schema
    const [loading, setLoading] = useState<boolean>(false);

    const formSchema = z.object({
        email: z.string().email(),
    });

    const methods = useForm<FormValues>({ resolver: zodResolver(formSchema) });
    const {
        register,
        formState: { errors },
    } = methods;

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        setLoading(true);
        const res = await signIn("nodemailer", {
            email: data.email,
            redirect: true,
            redirectTo: "/auth/verify",
        });
    };

    return (
        <main className={"p-20 max-w-2xl mx-auto flex flex-col gap-4"}>
            <Typography variant={"h2"}>Get back into the action</Typography>
            <FormProvider {...methods}>
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className={"space-y-4"}
                >
                    <EmailField
                        error={errors.email?.message}
                        disabled={loading}
                        label={"Email"}
                        {...register("email")}
                        showAsteriskIndicator
                    />
                    <Button
                        disabled={loading}
                        loading={loading}
                        type={"submit"}
                    >
                        Send Link
                    </Button>
                </form>
            </FormProvider>

            <Separator>or</Separator>
            <OAuthButtonGroup disabled={loading} />
            <Typography variant={"p"} className={"text-sm text-center"}>
                Don&apos;t have an account?{" "}
                <Button
                    href={"/auth/register"}
                    size={"sm"}
                    variant={"link"}
                    className={"inline font-normal p-0 text-purple-700"}
                >
                    Create one
                </Button>
            </Typography>
        </main>
    );
}
