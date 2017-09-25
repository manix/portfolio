const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const dev = process.env.NODE_ENV === "development";

module.exports = {
  entry: path.join(__dirname, "src", "main.js"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "main.js"
  },
  externals: {
    "luri": "luri",
    "History": "history"
  },
  module: {
    loaders: [
      {
        test: /\.(html|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src'
        }
      }, {
        test: /\.scss$/,
        loader: dev ?
          "style-loader!css-loader!sass-loader" : ExtractTextPlugin.extract([
            {
              loader: "css-loader",
              options: {
                minimize: true
              }
            }, {
              loader: "sass-loader"
            }
        ])
      }
    ]
  },
  plugins: dev ? [

  ] : [
    new ExtractTextPlugin("[name].css"),
  ],

}
