import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));
await jiti.import("./src/env")

/** @type {import('next').NextConfig} */
const nextConfig = {
    /* Next.js announced Node.js runtimes in the middleware */
    /* https://nextjs.org/blog/next-15-2#nodejs-middleware-experimental */
    experimental: {
        nodeMiddleware: true,
    },
    /* Enables hot reloading for internal packages in the monorepo */
    transpilePackages: [
        "@core/ui"
    ],

    /* We already do linting and typechecking as separate tasks in CI */
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    }
};

export default nextConfig;
