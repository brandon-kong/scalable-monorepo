"use client";

import { Button } from "@core/ui/next/button";
import { signOut } from "next-auth/react";

export default function SignoutButton() {
    return <Button onClick={() => signOut()}>Sign out</Button>;
}
