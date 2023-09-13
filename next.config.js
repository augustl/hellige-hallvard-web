/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'helligehallvardmenighet.files.wordpress.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
