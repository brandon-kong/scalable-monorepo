import { createEnv } from "@t3-oss/env-nextjs";
import zod from "zod";

export const env = createEnv({
    server: {
        AUTH_SECRET: zod.string().min(8),

        // Email Provider
        EMAIL_SERVER: zod.string().url().nonempty(),
        EMAIL_FROM: zod.string().email().nonempty(),

        // Google Provider
        GOOGLE_CLIENT_ID: zod.string().nonempty(),
        GOOGLE_CLIENT_SECRET: zod.string().nonempty(),
    },

    experimental__runtimeEnv: {},
    skipValidation:
        !!process.env.CI || process.env.npm_licecycle_event === "lint",
});
