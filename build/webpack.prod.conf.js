/**
 * Webpack Production Configurations
 *
 */

const path = require('path');
const config = require('../config');
const utils = require('./utils');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const env = process.env.NODE_ENV === 'testing'
    ? require('../config/test.env')
    : config.build.env;

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        // Configure for css and style loaders
        rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap
        })
    },
    // This option controls if and how source maps are generated
    devtool: config.build.productionSourceMap ? '#source-map' : false,
    // Create
    output: {
        path: config.build.assetsRoot,
        filename: utils.assetsPath('js/[name].[chunkhash].js'),
        // This option determines the name of on-demand loaded chunk files
        chunkFilename: utils.assetsPath('js/[id].[chunkhash].js')
    },
    plugins: [
        // Create global constants which can be configured at compile time
        new webpack.DefinePlugin({
            'process.env': env
        }),
        // Compress js files
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        }),
        // Compile all CSS files into a single CSS file
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash].css')
        }),
        // Compress extracted CSS
        new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        // Auto include output files in index.html
        new HtmlWebpackPlugin({
            filename: config.build.index,
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true
            },
            // Allows to control how chunks should be sorted before they are included to the html
            // Necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        // Split vendor js into its own file
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: module => {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        }),
        // Extract webpack runtime and module manifest to its own file to
        // Prevent vendor hash from being updated if there is no changes to vendor.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        // Copy custom static assets
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.build.assetsSubDirectory
            }
        ])
    ]
});


// Data compression and original data can be restored by un-zipping the compressed file
if (config.build.productionGzip) {
    const CompressionPlugin  = require('compression-webpack-plugin');
    
    webpackConfig.plugins.push(
        new CompressionPlugin({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: new RegExp(
                '\\.(' +
                config.build.productionGzipExtensions.join('|') +
                ')$'
            ),
            threshold: 10240,
            minRatio: 0.8
        })
    )
}

// Represents bundle content as convenient interactive treemap
if (config.build.bundleAnalyzerReport) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
    webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig;