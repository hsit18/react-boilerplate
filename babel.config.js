module.exports = (api) => {
  api.cache(true);
  const config = {
    presets: [
      [
        "@babel/preset-env",
        {
          loose: true,
          modules: false,
          targets: {
            node: "current",
          },
        },
      ],
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
  };

  // if (process.env.NODE_ENV === "test") {
  //   return {
  //     ...config,
  //     plugins: [
  //       ...config.plugins,
  //       ["@babel/plugin-transform-modules-commonjs", { loose: true }],
  //     ],
  //   };
  // }
  return config
};
