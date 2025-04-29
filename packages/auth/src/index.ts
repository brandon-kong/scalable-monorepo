import NextAuth from "next-auth";

import { authConfig } from "./auth.config";
import { baseAuthConfig } from "./base.config";

const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
const edgeAuth = NextAuth(baseAuthConfig);

export {
    handlers,
    auth,
    signIn,
    signOut,
    authConfig,
    baseAuthConfig,
    edgeAuth,
};
