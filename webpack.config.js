const path = require('path');
const webpack = require('webpack');

const javascript = {
  test: /\.(js)$/,
  exclude: /(node_modules|bower_components)/,
  use: [{
    loader: 'babel-loader',
    options: { presets: ['es2015'] }
  }],
};

const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
  compress: { warnings: false }
});

const config = {
  entry: {
    App: './public/javascripts/how-much-sugar-app.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [javascript]
  },

};

process.noDeprecation = true;

module.exports = config;
