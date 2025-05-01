import { InputField, Separator } from "@core/ui/form";
import { Button } from "@core/ui/next/button";
import Typography from "@core/ui/typography";
import OAuthButtonGroup from "~/components/auth/OAuthButtonGroup";

export default function LoginPage() {
    return (
        <main className={"p-20 max-w-2xl mx-auto flex flex-col gap-4"}>
            <Typography variant={"h2"}>Login</Typography>
            <InputField label={"Email"} showAsteriskIndicator />
            <Button>Send Link</Button>
            <Separator>or</Separator>
            <OAuthButtonGroup />
        </main>
    );
}
