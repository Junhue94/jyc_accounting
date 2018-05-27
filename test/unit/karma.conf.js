/**
 * Karma Configurations for Unit Test
 */

const webpackConfig = require('../../build/webpack.test.conf');

module.exports = config => {
    config.set({
        // Set browser for to run test
        browsers: ['ChromeDebugging'],
        customLaunchers: {
            ChromeDebugging: {
                base: 'Chrome',
                flags: ['--remote-debugging-port=9333']
            }
        },
        frameworks: ['mocha', 'sinon-chai'],
        // Reporters
        reporters: ['spec', 'coverage'],
        specReporter: {
            // Do not print error summary
            suppressErrorSummary: true,
            // Do not print information about failed tests
            suppressFailed: false,
            // Do not print information about passed tests
            suppressPassed: false,
            // Do not print information about skipped tests
            suppressSkipped: true,
            // Print the time elapsed for each spec
            showSpecTiming: true,
            // Test would finish with error when a first fail occurs
            failFast: false
        },
        // Determines which files are included in the browser and which files are watched
        files: ['./index.js'],
        logLevel: config.LOG_INFO,
        preprocessors: {
            './index.js': ['webpack', 'sourcemap']
        },
        plugins: [
            // Test Launchers
            'karma-chrome-launcher',
            // Test Libraries
            'karma-mocha',
            'karma-sinon-chai',
            // Pre-processors
            'karma-webpack',
            'karma-sourcemap-loader',
            // Reports
            'karma-spec-reporter',
            'karma-coverage'
        ],
        // End test on a single run
        singleRun: false,
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },
        coverageReporter: {
            dir: './coverage',
            reporters: [
                { type: 'html', subdir: '.' },
                { type: 'text-summary' }
            ]
        }
    });
};