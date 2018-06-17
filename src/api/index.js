/**
 * API Configurations
 */

import feathersClient from './feathers-client';

/**
 * Get Authorization Header Logic
 * @returns {{headers: {Authorization: *}}}
 */
export function getAuthHeader() {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    return {
        headers: {
            Authorization: credentials.accessToken
        }
    };
}

/**
 * Base URL for API
 * @type {string}
 */
export const SERVER_URL = process.env.NODE_ENV === 'production'
    ? 'http://cms1_5.vaultdragon.com:3040'
    : 'http://localhost:3090';

/**
 * Feathers Services
 */
export const AUTH_SERVICE = feathersClient.service('auth');
export const ACCOUNT_SERVICE = feathersClient.service('account');
export const STOCK_SERVICE = feathersClient.service('stock');

/**
 * Postgres Table
 */
export const ACCOUNT_TABLE = 'Account';
export const STOCK_TABLE = 'Stock';
