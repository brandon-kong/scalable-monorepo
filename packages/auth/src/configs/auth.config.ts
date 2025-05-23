import { type NextAuthConfig } from "next-auth";
import { baseAuthConfig } from "./base.config";
import { KyselyAdapter } from "../adapters/kysely-adapter";
import { db } from "@core/db";

export const authConfig = {
    adapter: KyselyAdapter(db),
    session: { strategy: "jwt" },
    ...baseAuthConfig,
} satisfies NextAuthConfig