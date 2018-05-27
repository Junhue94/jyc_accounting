/**
 * Production Build
 */

// Set environment to production
process.env.NODE_ENV = 'production';

const rm = require('rimraf');
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.prod.conf');

console.log('Building for production...');
// Remove previous build folder and replace with new one
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err;
    webpack(webpackConfig, (err, stats) => {
        if (err) throw err;
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n');
        
        console.log('Build complete');
    });
});