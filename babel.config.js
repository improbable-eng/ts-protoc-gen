// used for flow type stripping
module.exports = function(api) {
  // https://babeljs.io/docs/en/config-files#apicache
  api.cache.forever()
  return {
    presets: ["@babel/preset-env", "@babel/preset-flow"]
  };
};
