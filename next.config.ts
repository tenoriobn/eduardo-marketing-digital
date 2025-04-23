import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
