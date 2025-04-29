import { createEnv } from "@t3-oss/env-nextjs";
import zod from "zod";

export const env = createEnv({
    server: {
        AUTH_SECRET: zod.string().min(8),
    },

    experimental__runtimeEnv: {},
    skipValidation:
        !!process.env.CI || process.env.npm_licecycle_event === "lint",
});
