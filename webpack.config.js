const path = require('path');
const config = require('./tasks/config');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  context: process.cwd(),
  mode: process.env.NODE_ENV,
  entry: {
    app: config.scripts.app,
    main: config.scripts.main,
  },
  output: {
    path: config.scripts.output,
    filename: '[name].js',
    library: {
      name: 'components',
      type: 'umd',
    },
  },
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: false,
            },
          },
        ],
        exclude: '/node_modules/',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    overlay: false,
  },
};
