/**
 * Webpack Testing Configurations
 *
 */

const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackConfig = merge(baseConfig, {
    module: {
        rules: utils.styleLoaders({
                sourceMap: config.dev.cssSourceMap
        })
    },
    // Use inline-source-map for karma-sourcemap-loader
    devtool: '#inline-source-map',
    plugins: [
        // Create global constants which can be configured at compile time
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env')
        }),
        // Compile all CSS files into a single CSS file
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
    ]
});

// Does not require app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;
