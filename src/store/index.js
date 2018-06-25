/**
 * Main Store Configurations
 */

import Vue from 'vue';
import Vuex from 'vuex';

import account from './modules/account';
import stock from './modules/stock';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        account,
        stock
    }
});