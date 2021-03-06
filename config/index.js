/**
 * All Environments Configuration Setup
 *
 */

const path = require('path');
const proxy = 'http://localhost:8300';

module.exports = {
    // Configurations for PRODUCTION environment
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '',
        assetsSubDirectory: 'static',
        productionSourceMap: false,
        productionGzip: false,
        productionGzipExtensions: ['js', 'css', 'html'],
        bundleAnalyzerReport: false
    },
    // Configurations for DEVELOPMENT environment
    dev: {
        env: require('./dev.env'),
        port: 3000,
        assetsPublicPath: '/',
        assetsSubDirectory: 'static',
        cssSourceMap: false,
        proxyTable: {
            '/api': { target: proxy }
        }
    }
};