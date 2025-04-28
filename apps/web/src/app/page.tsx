import Typography from "@core/ui/Typography";

export default function Home() {
    return (
        <div className={"bg-background h-screen max-w-(--content-max-width) sprout-grid"}>
            <Typography
            variant={'h1'}
            className={'text-center max-w-2xl'}
            >
                The better way to schedule your meetings
            </Typography>
        </div>
    );
}
