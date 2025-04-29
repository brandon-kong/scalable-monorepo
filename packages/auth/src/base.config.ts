import { type NextAuthConfig } from "next-auth";
import { env } from "../env";
import Nodemailer from "next-auth/providers/nodemailer";

/* Supports the edge runtime for environments like NextJS middleware */

export const baseAuthConfig = {
    secret: env.AUTH_SECRET,
    providers: [Nodemailer({
        server: env.EMAIL_SERVER,
        from: env.EMAIL_FROM,
    })],
    callbacks: {},
} satisfies NextAuthConfig;

