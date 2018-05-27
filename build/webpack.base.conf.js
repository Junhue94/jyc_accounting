/**
 * Webpack Base Configurations for all environments
 *
 */

const webpack = require('webpack');
const path = require('path');
const config = require('../config');

/**
 * Resolve Path
 *
 * @param dir
 * @returns {*}
 */
function resolvePath(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    // The point to enter the application. At this point the application starts executing
    entry: {
        app: './src/main.js'
    },
    // The point to enter the application. At this point the application starts executing
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        // Path when using on-demand-loading or loading external resources like images, files, etc
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        // Automatically resolve extensions
        extensions: ['.js', '.vue', '.json'],
        // Create aliases to import or require certain modules more easily
        alias: {
            'src': resolvePath('src')
        }
    },
    // These options determine how the different types of modules within a project will be treated
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                // Check source files to ensure they are not modified by other loaders
                enforce: 'pre',
                exclude: /node_modules/,
                include: [resolvePath('src'), resolvePath('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    extractCSS: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [resolvePath('src'), resolvePath('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                loader: 'url-loader',
                /*options: {
                    limit: 10000,
                    name: 'img/[name].[hash:7].[ext]'
                }*/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                /*options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }*/
            }
        ]
    },
    plugins: [
        // Automatically load modules globally
        // jQuery is required to load modules including Bootstrap
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};