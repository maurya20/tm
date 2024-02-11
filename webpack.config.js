const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: "./src/developer.js",
  output: {
    path: path.join(__dirname, "/build"),
    filename: "bundle.js",
    publicPath: "/tm/",
  },
  mode: "production",
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/script/default-script.js", to: "./app-bundle.js" },
      ],
    }),
    new MiniCssExtractPlugin(),
  ],
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
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        // use: [

        //   {
        //     loader: "style-loader",
        //   },
        //   {
        //     loader: "css-loader",
        //   },
        //   {
        //     loader: "postcss-loader",
        //     options: {
        //       postcssOptions: {
        //         plugins: () => [require("autoprefixer")],
        //       },
        //     },
        //   },
        //   {
        //     loader: "sass-loader",
        //   },
        // ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: {
          limit: 10000,
          name: "assets/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  devServer: {
    //compress: true,
    historyApiFallback: true,
    // contentBase: "./",
    hot: true,
    static: "./",
    host: "dev.mysite.com",
    port: 1995,
  },
};
