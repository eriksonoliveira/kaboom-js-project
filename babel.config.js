module.exports = (api) => {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
        },
      ],
    ],
  };
};
