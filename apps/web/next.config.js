/** @type {import('next').NextConfig} */
const nextConfig = {
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
