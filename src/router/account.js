/**
 * Sub-routes for 'account'
 */

import AccountForm from '../components/account/AccountForm';
import AccountList from '../components/account/AccountList';

const baseUri = '/account';

export const routeAccount = [
    {
        path: baseUri,
        name: 'accountList',
        component: AccountList
    },
    {
        path: baseUri + '/new',
        name: 'accountNew',
        component: AccountForm
    },
    {
        path: baseUri + '/edit/:id',
        name: 'accountEdit',
        component: AccountForm
    }
];