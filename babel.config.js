module.exports = {
  presets: ['@babel/preset-env'],
  env: {
    test: {
      plugins: ['istanbul'],
    },
  },
};
