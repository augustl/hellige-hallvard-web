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
            hostname: 'ocb-wordpress-media-library.s3.eu-north-1.amazonaws.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
}

module.exports = nextConfig
