import { auth } from "@core/auth";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

interface ProtectedRouteParams {
    redirectUrl?: `/${string}`;
    children?: ReactNode;
}

export default async function ProtectedRoute({
    redirectUrl = "/login",
    children,
}: ProtectedRouteParams) {
    const session = await auth();

    if (session === null) {
        return redirect(redirectUrl);
    }

    return children;
}
