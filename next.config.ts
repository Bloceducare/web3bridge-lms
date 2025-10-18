import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Handle *.svg?url as file URLs
    config.module?.rules?.push({
      test: /\.svg$/i,
      resourceQuery: /url/, // *.svg?url
      type: 'asset/resource',
    });

    // Handle normal *.svg imports as React components
    config.module?.rules?.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: { not: [/url/] },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;

