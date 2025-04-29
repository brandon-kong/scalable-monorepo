import NextAuth from "next-auth";

import { authConfig } from "./configs/auth.config";
import { baseAuthConfig } from "./configs/base.config";

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
