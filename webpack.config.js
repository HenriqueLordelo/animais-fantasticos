const path = require("path");

module.exports = {
  entry: "./js/script.js",
  output: {
    path: path.resolve(__dirname, "public"), // Coloque a pasta de saída como "public"
    filename: "main.js", // O arquivo gerado pelo Webpack
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
