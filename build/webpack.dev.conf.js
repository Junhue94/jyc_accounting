/**
 * Webpack Development Configurations
 *
 */

const config = require('../config');
const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

// Add Webpack Hot Middleware to entry
Object.keys(baseWebpackConfig.entry).forEach(name => {
    // Add 'dev-client.js' to initiate page refresh when HTML page changes
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
});

module.exports = merge(baseWebpackConfig, {
    module: {
        // Configure for css and style loaders
        rules: utils.styleLoaders({
            sourceMap: config.dev.cssSourceMap
        })
    },
    // This option controls if and how source maps are generated
    devtool: '#eval-source-map',
    // This option is used to customize the webpack build process in a variety of way
    plugins: [
        // Create global constants which can be configured at compile time
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        // Compile all CSS files into a single CSS file
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
        // Plug-in for Webpack Hot Middleware for auto-refresh upon changes made
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // Auto include output files in index.html
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            // All javascript resources will be placed at the bottom of the body element
            inject: true
        }),
        // Better error and logging presentation on command line
        new FriendlyErrorsPlugin()
    ]
});