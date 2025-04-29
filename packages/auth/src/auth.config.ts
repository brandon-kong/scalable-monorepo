import { type NextAuthConfig } from "next-auth";
import { baseAuthConfig } from "./base.config";
import { KyselyAdapter } from "@auth/kysely-adapter";

export const authConfig = {
    adapter: KyselyAdapter(db)
    ...baseAuthConfig,
} satisfies NextAuthConfig