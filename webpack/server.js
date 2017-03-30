/* eslint-env node */
/*eslint no-console: "off"*/
const { resolve } = require('path');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    host: '0.0.0.0',
    contentBase: resolve(__dirname, '../assets'),
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(3000, '0.0.0.0', function(err) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:3000');
});
