require("babel-polyfill");
require("babel-register")({
  presets: ["env"],
  plugins: ["transform-object-rest-spread"]
});
module.exports = require("./index.js");
