import Typography from "@core/ui/Typography";
import ProtectedRoute from "~/components/server/ProtectedRoute";

export default function Home() {
    return (
        <div className={"bg-background h-screen"}>
            <div className={"max-w-(--content-max-width) mx-auto sprout-grid"}>
                <div className={"mx-0 w-full"}>
                    <ProtectedRoute>Test</ProtectedRoute>
                    <Typography variant={"h1"} className={"text-left"}>
                        The better way to schedule your meetings
                    </Typography>
                </div>
            </div>
        </div>
    );
}
