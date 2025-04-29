import { env as authEnv } from "@core/auth/env";
import { env as dbEnv } from "@core/db/env";

import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";
import zod from "zod";

export const env = createEnv({
    extends: [dbEnv, authEnv, vercel()],
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
