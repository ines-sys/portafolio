/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    basePath: '/portafolio',
    assetPrefix: '/portafolio',
    images: {
        unoptimized: true, // Desactiva la optimización de imágenes
    },
}

export default nextConfig;
