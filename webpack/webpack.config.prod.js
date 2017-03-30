/* eslint-env node */

const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: resolve(__dirname, '../src'),
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  'es2015',
                  {
                    modules: false,
                    'loose': true
                  }
                ],
                'react',
                [
                  'env',
                  {
                    targets: {
                      browsers: ['last 2 versions', 'IE >= 11']
                    }
                  }
                ],
                'babili'
              ],
              plugins: [
                'transform-react-remove-prop-types',
                'transform-react-inline-elements'
              ]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require('postcss-import')({
                      addDependencyTo: webpack
                    }),
                    require('postcss-url')(),
                    require('postcss-cssnext')(),
                    require('postcss-browser-reporter')(),
                    require('postcss-reporter')()
                  ];
                }
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: ['file-loader', 'image-webpack-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'webpack/production.html'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: {
        discardComments: {
          removeAll: true
        }
      }
    }),
    new ExtractTextPlugin('app.css')
  ],

  resolve: {
    extensions: ['.js'],
    alias: {
      Common: resolve(__dirname, '../src/Common/'),
      Page1: resolve(__dirname, '../src/Page1/'),
      Page2: resolve(__dirname, '../src/Page2/'),
      assets: resolve(__dirname, '../assets/'),
      scss: resolve(__dirname, '../scss/'),
    }
  }
};
