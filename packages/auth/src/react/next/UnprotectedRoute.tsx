import { redirect } from "next/navigation";
import type { ReactNode } from "react";
import { auth } from "../../index";

interface UnprotectedRouteParams {
    children?: ReactNode;
}

export default async function UnprotectedRoute({
    children,
}: UnprotectedRouteParams) {
    const session = await auth();

    if (session !== null) {
        return null;
    }

    return children;
}
