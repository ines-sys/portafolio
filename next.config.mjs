/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true, // Desactiva la optimización de imágenes
    },
}

export default nextConfig;
