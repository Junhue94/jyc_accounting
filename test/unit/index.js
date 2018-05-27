/**
 * Unit Test Setup for Test Files
 */

import Vue from 'vue';

Vue.config.productionTip = false;
Vue.config.devtools = false;

// Require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// Require all src files except main.js for coverage
const srcContext = require.context('../../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);
