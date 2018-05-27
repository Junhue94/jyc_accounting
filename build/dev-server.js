/**
 * Development Server Setup and Configurations
 *
 * @type {*}
 */

// Set up NODE_ENV variable
const config = require('../config');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

const express = require('express');
const path = require('path');
const opn = require('opn');
// Default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;
const url = 'http://localhost:' + port;

// Webpack Middleware Setup
const webpack = require('webpack');
const webpackConfig = process.env.NODE_ENV === 'testing'
    ? require('./webpack.prod.conf')
    : require('./webpack.dev.conf');
const compiler = webpack(webpackConfig);
const hotMiddleware = require("webpack-hot-middleware")(compiler);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

// Create a dev server
const app = express();

// Handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());
// Make the client-side application part of Node Dev Server
app.use(devMiddleware);
// Auto refresh upon changes made
app.use(hotMiddleware);
// Force HTML page reload when 'html-webpack-plugin' template changes
compiler.plugin('compilation', compilation => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, callback) => {
        hotMiddleware.publish({ action: 'reload' });
        callback()
    })
});

// Serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

// Server Connection
console.log('> Starting dev server...');
// Wait until Webpack compiles all files
devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + url + '\n');
    // Auto open browser
    opn(url)
});
const server = app.listen(port);