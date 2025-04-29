import Typography from "@core/ui/Typography";
import ProtectedRoute from "~/components/server/ProtectedRoute";

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
                    <ProtectedRoute>
                        <Typography>
                            Welcome to the protected section of the application.
                            Only authorized users can see this content.
                        </Typography>
                    </ProtectedRoute>
                </div>
            </div>
        </div>
    );
}
