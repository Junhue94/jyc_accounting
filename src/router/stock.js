/**
 * Sub-routes for 'stock'
 */

import StockForm from '../components/stock/StockForm';
import StockList from '../components/stock/StockList';

const baseUri = '/stock';

export const routeStock = [
    {
        path: baseUri,
        name: 'stockList',
        component: StockList
    },
    {
        path: baseUri + '/new',
        name: 'stockNew',
        component: StockForm
    },
    {
        path: baseUri + '/edit/:id',
        name: 'stockEdit',
        component: StockForm
    }
];