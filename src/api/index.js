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
export const CONTACT_SERVICE = feathersClient.service('contact');

/**
 * Mock Cloudant Views
 */
export const CONTACT_VIEW = 'contact';

/**
 * List of all DOCTYPE in API
 * @type {string}
 */
export const DOCTYPE_CONTACTS = 'contacts';