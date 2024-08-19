/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'publish',
    cleanDistDir: true,
    // dir: "./app/", // 移除这个无效的配置项
    assetPrefix: ".",
    productionBrowserSourceMaps: true,
    reactStrictMode: true,
    webpack: (config, options) => {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        }
        return config
    },
}

module.exports = nextConfig
