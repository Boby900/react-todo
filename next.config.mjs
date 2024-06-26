/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    return config;
  }

};

export default nextConfig;
