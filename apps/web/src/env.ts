import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";
import zod from "zod";

export const env = createEnv({
    extends: [vercel()],
    shared: {
        NODE_ENV: zod
            .enum(["development", "production", "test"])
            .default("development"),
    },

    server: {},
    client: {},

    experimental__runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
    },
});
