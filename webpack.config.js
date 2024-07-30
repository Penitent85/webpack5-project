const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const assert = require("assert");
let mode = "development";
let target = "web";
if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

module.exports = {
  mode: mode,
  target: target,
  output: {
    assetModuleFilename : 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg?g|gif|svg)$/i,
        exclude: /node_modules/,
        // type: "asset/resource",
        // type: "asset/inline",
        type: "asset",
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
           loader : MiniCssExtractPlugin.loader,
           options :{publicPath : "" }
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve:{
    extensions: [".js",".jsx"],
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    compress: true,
    hot: true,
    port: 9000,
  },
};
