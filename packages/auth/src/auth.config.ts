import { type NextAuthConfig } from "next-auth";
import { baseAuthConfig } from "./base.config";

export const authConfig = {
    ...baseAuthConfig,
} satisfies NextAuthConfig