const path = require("path");

module.exports = {
  entry: {
    blocks: "./js/blocks.js",
    "toolbar-text-resize": "./js/toolbar-text-resize.js",
    "custom-block-margin-padding": "./js/custom-block-margin-padding.js",
    "responsive": "./js/responsive.js",
    "content-with": "./js/content-with.js", 
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  mode: "production",
  devtool: "source-map",
};
