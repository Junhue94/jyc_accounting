/**
 * Configurations for Vue Instance
 */

// All External CSS Files
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-table/dist/bootstrap-table.css';
import 'font-awesome/css/font-awesome.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';
import 'toastr/build/toastr.css';
import 'src/styles/main.css';

// All external JS Files
import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap-table/dist/bootstrap-table.min';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ValidatePlugin from './plugins/validate.plugin';
import DatePicker from 'vue-bootstrap-datetimepicker';

// Use third-party modules in Vue
Vue.use(ValidatePlugin);
Vue.use(DatePicker);

/**
 * Initialize a Vue instance
 * @returns {Vue} - Vue Instance
 */
function initApp() {
    return new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    });
}

// Initialize app
initApp();