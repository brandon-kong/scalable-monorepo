import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { auth } from "../../index";

interface ProtectedRouteParams {
    redirect?: boolean;
    redirectUrl?: `/${string}`;
    children?: ReactNode;
}

export default async function ProtectedRoute({
    redirect: shouldRedirect = true,
    redirectUrl = "/login",
    children,
}: ProtectedRouteParams) {
    const session = await auth();

    if (session === null) {
        if (shouldRedirect === true) {
            return redirect(redirectUrl);
        }
        return null;
    }

    return children;
}
