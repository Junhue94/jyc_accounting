/**
 * Sub-routes for 'login'
 */

import Login from '../components/Login.vue';

const baseUri = '/login';

export const routeLogin = [
    {
        path: baseUri,
        name: 'login',
        component: Login
    }
];