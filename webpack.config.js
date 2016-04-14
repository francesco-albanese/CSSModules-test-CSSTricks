var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      // {
      //   // appending styles in a <style> tag in the <head> of the document for testing purposes
      //   test: /\.css/,
      //   loaders: ['style', 'css'],
      //   include: __dirname + '/src'
      // },
      {
        test: /\.css/,
        // the crazy expression below basically will add the generated text at the end of the class name
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ]
};
