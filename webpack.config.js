const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Other webpack configuration options...

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your HTML template file
      filename: 'index.html', // Output HTML filename
      // Other options...
    }),
  ],
};

const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// ...

plugins: [
  // ...
  new ReactRefreshPlugin(),
  // ...
]