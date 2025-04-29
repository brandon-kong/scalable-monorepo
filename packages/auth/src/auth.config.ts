import { type NextAuthConfig } from "next-auth";
import { baseAuthConfig } from "./base.config";
import { KyselyAdapter } from "@auth/kysely-adapter";
import { db } from "@core/db";

export const authConfig = {
    adapter: KyselyAdapter(db as any),
    ...baseAuthConfig,
} satisfies NextAuthConfig