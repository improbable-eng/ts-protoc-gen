// used for flow type stripping and
module.exports = function(api) {
  api.cache(false);
  return {
    presets: ["@babel/preset-env", "@babel/preset-flow"]
  };
};
