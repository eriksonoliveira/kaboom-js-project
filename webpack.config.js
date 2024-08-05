/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");



module.exports = (env, argv) => {
  const devMode = argv.mode !== "production";

  return {
    mode: argv.mode,
    entry: ["./src/main.ts"],
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
    },
    devServer: {
      port: 3000,
      hot: true,
    },
    // devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.ts(x)?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: [
            devMode ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: "file-loader",
        },
        {
          test: /\.png$/,
          use: [
            {
              loader: "url-loader",
              options: {
                mimetype: "image/png",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "public", "index.html"),
      }),
      new CleanWebpackPlugin(),
    ]
      .concat(devMode ? [] : [new MiniCssExtractPlugin()])
      .filter(Boolean),
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
  };
};
