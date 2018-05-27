/**
 * Main Store Configurations
 */

import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import contact from './modules/contact/contact';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        contact
    }
});