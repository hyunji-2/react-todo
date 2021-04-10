require("dotenv").config({ silent: true });

const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/"
    : "http://fe-star.herokuapp.com/";

module.exports = {
  entry: {
    app: [path.resolve("src/index.jsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        BASE_URL: JSON.stringify(baseURL),
      },
    }),
    new HTMLWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "[name]_[hash].css",
      chunkFilename: "[id]_[hash].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { cacheDirectory: process.env.NODE_ENV === "development" },
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)?$/,
        loader: "url-loader",
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000,
        },
      },
    ],
  },
};
