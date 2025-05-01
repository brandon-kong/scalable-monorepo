import { InputField, Separator } from "@core/ui/form";
import { Button } from "@core/ui/next/button";
import Typography from "@core/ui/typography";
import OAuthButtonGroup from "~/components/auth/OAuthButtonGroup";

export default function LoginPage() {
    return (
        <main className={"p-20 max-w-2xl mx-auto flex flex-col gap-4"}>
            <Typography variant={"h2"}>Create an account</Typography>
            <OAuthButtonGroup />
            <Separator>or</Separator>
            <InputField label={"Email"} showAsteriskIndicator />
            <Button>Send Link</Button>
            <Typography variant={"p"} className={"text-sm text-center"}>
                Already have an account?{" "}
                <Button
                    href={"/auth/login"}
                    size={"sm"}
                    variant={"link"}
                    className={"inline font-normal p-0 text-purple-700"}
                >
                    Log in
                </Button>
            </Typography>
        </main>
    );
}
