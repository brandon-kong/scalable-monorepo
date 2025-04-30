import { Input, InputField } from "@core/ui/form";
import { Button } from "@core/ui/next/button";
import Typography from "@core/ui/typography";

export default function LoginPage() {
    return (
        <main className={"p-20 max-w-lg mx-auto"}>
            <Typography variant={"h2"}>Login</Typography>
            <InputField label={"Email"} showAsteriskIndicator />
            <InputField
                type="password"
                label={"Password"}
                showAsteriskIndicator
            />
            <Button>Log in</Button>
        </main>
    );
}
