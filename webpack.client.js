const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: ["./src/client.js", "./src/styles/styles.css"],
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(c|sc)ss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].min.css",
              outputPath: "assets/css/"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  }
};
