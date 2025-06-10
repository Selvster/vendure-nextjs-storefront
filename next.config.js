/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    pageExtensions: ['page.tsx', 'page.ts'],
    swcMinify: true,
    reactStrictMode: true,
    output: 'standalone',
    typescript: {
        ignoreBuildErrors: true,
    }
};

module.exports = nextConfig;
