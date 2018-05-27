/**
 * Utilities Functions for Webpack Configurations
 */

const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Assets Path
 * @desc
 * Joins static folder to specified path
 *
 * @param _path
 */
exports.assetsPath = function (_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production'
        ? config.build.assetsSubDirectory
        : config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path)
};

/**
 * Style Loaders
 * @desc
 * Configure css and style loaders for different environment
 *
 * @param options
 * @returns {Array}
 */
exports.styleLoaders = options => {
    const cssLoader = {
        loader: 'css-loader',
        options: {
            minimize: process.env.NODE_ENV === 'production',
            sourceMap: options.sourceMap
        }
    };
    
    return [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: cssLoader,
                fallback: 'vue-style-loader'
            })
        }
    ];
};
