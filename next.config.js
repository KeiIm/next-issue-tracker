/** @type {import('next').NextConfig} */
// const nextConfig = {}

// If Google Avatar is not loading:
const nextConfig = {
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    { key: 'referrer-policy', value: 'no-referrer' }
                ]
            }
        ]
    }
}

module.exports = nextConfig
