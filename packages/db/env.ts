import { createEnv } from "@t3-oss/env-nextjs";
import zod from "zod";

export const env = createEnv({
    server: {
        DATABASE_URL: zod.string().url().nonempty()
    },

    experimental__runtimeEnv: {},
    skipValidation:
        !!process.env.CI || process.env.npm_licecycle_event === "lint",
});
