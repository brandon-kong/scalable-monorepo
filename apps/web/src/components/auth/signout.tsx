"use client";

import { signOut } from "next-auth/react";

export default function SignoutButton() {
    return (
        <button
        type={'button'}
        onClick={() => signOut()}
        >
            Sign out
        </button>
    )
}