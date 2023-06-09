await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: true,

    /**
     * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
     * out.
     *
     * @see https://github.com/vercel/next.js/issues/41980
     */
    swcMinify: true,
    images: {
        domains: [
            "cdn.gro.care",
            "content-uploads-staging.s3.ap-south-1.amazonaws.com",
        ],
    },
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
};
export default config;
