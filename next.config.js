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
          {
            protocol: 'https',
            hostname: 'dq48ad80olhv4.cloudfront.net',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
