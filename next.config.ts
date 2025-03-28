module.exports = {
  webpack(config: import('webpack').Configuration): import('webpack').Configuration {
    interface SvgRule {
      test: RegExp;
      use: string[];
    }

    const svgRule: SvgRule = {
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    };

    config.module?.rules?.push(svgRule);
    return config;
  },
};

