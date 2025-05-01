import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { auth } from "../../index";

interface UnprotectedRouteParams {
    redirect?: boolean;
    redirectUrl?: string;
    children?: ReactNode;
}

export default async function UnprotectedRoute({
    redirect: shouldRedirect,
    redirectUrl = "/",
    children,
}: UnprotectedRouteParams) {
    const session = await auth();

    if (session !== null) {
        if (shouldRedirect) {
            return redirect(redirectUrl);
        }
        return null;
    }

    return children;
}
