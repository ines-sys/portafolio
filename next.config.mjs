/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    // Solo en producción (GitHub Pages). En local: http://localhost:3000
    ...(isProd
        ? {
            basePath: '/portafolio',
            assetPrefix: '/portafolio',
          }
        : {}),
    images: {
        unoptimized: true,
    },
}

export default nextConfig;
