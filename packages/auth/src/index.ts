import NextAuth, { type NextAuthResult } from "next-auth";

import { authConfig } from "./configs/auth.config";
import { baseAuthConfig } from "./configs/base.config";

const result = NextAuth(authConfig);

// https://github.com/nextauthjs/next-auth/discussions/9950#discussioncomment-12937660
export const handlers: NextAuthResult["handlers"] = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;

const edgeAuth = NextAuth(baseAuthConfig);

export { authConfig, baseAuthConfig, edgeAuth };
