/** @type {import('next').NextConfig} */

return {
  output: "standalone",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: { subsets: ["latin", "cyrilic"] },
      },
    ],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
};
