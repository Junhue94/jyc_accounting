/**
 * API Configurations
 */

import feathersClient from './feathers-client';

/**
 * Base URL for API
 * @type {string}
 */
export const SERVER_URL = process.env.NODE_ENV === 'production'
    ? 'http://jyc_accounting.com'
    : 'http://localhost:3090';

/**
 * Feathers Services
 */
export const ACCOUNT_SERVICE = feathersClient.service('account');
export const STOCK_SERVICE = feathersClient.service('stock');

/**
 * Postgres Table
 */
export const ACCOUNT_TABLE = 'Account';
export const STOCK_TABLE = 'Stock';
