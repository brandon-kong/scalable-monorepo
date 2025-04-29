import { ProtectedRoute, UnprotectedRoute } from "@core/auth/react/next";
import Typography from "@core/ui/Typography";
import Link from "next/link";
import SignoutButton from "~/components/auth/signout";

export default function Home() {
    return (
        <div className={"bg-background h-screen p-8 md:p-20"}>
            <div className={"max-w-(--content-max-width) mx-auto"}>
                <div
                    className={
                        "mx-auto w-full flex flex-col gap-4 items-center justify-center max-w-2xl"
                    }
                >
                    <Typography
                        variant={"h1"}
                        className={"mx-auto text-center max-w-2xl"}
                    >
                        The better way to schedule your meetings
                    </Typography>
                    <UnprotectedRoute>
                        <Typography>
                            You are not logged in. 
                        </Typography>
                        <Link href={'/api/auth/signin'}>
                            Sign in
                        </Link>
                    </UnprotectedRoute>
                    <ProtectedRoute redirect={false}>
                        <Typography>
                            Welcome to the protected section of the application.
                            Only authorized users can see this content.
                        </Typography>
                        <Typography>
                            You are logged in. 
                        </Typography>
                        <SignoutButton />
                    </ProtectedRoute>
                </div>
            </div>
        </div>
    );
}
