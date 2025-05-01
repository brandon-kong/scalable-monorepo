import { type NextAuthConfig } from "next-auth";
import { env } from "../../env";

// Providers
import Nodemailer from "next-auth/providers/nodemailer";
import Google from "next-auth/providers/google";

/* Supports the edge runtime for environments like NextJS middleware */

export const baseAuthConfig = {
    secret: env.AUTH_SECRET,
    providers: [
        Nodemailer({
            server: env.EMAIL_SERVER,
            from: env.EMAIL_FROM,
        }),
        Google({
            clientId: env.GOOGLE_CLIENT_ID,
            clientSecret: env.GOOGLE_CLIENT_SECRET,
        })
    ],
    pages: {
        verifyRequest: "/auth/verify"
    }
} satisfies NextAuthConfig;

