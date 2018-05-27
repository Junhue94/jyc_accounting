/**
 * API Auth Service
 */

import { AUTH_SERVICE } from '.';
import AuthMockHook from './_mock/auth-mock-hook';

class AuthService {
    constructor() {
        this.service = AUTH_SERVICE;
        if (process.env.NODE_ENV !== 'production') {
            this.service.hooks(AuthMockHook);
        }
    }
    /**
     * Login
     * @param {Object} credentials - Credentials Object
     * @param {string} credentials.serverkey - Server Key
     * @param {string} credentials.serverpass - Server Password
     * @param {string} credentials.database - Database Name
     * @param {string} credentials.username - Username
     * @param {string} credentials.password - Password
     * @param {string} credentials.remoteUrl - Url for Cloudant Ac
     */
    login(credentials) {
        return this.service.create(credentials);
    }
}

export default AuthService;

/*
export default {
    // Send a request to the login URL and save the returned JWT
    /!**
     * Login Logic
     * @param {Object} credentials - Credentials Object
     * @param {string} credentials.serverkey - Server Key
     * @param {string} credentials.serverpass - Server Password
     * @param {string} credentials.database - Database Name
     * @param {string} credentials.username - Username
     * @param {string} credentials.password - Password
     * @param {string} credentials.remoteUrl - Url for Cloudant Ac
     *!/
    login(credentials) {
        context.$http.post(LOGIN_URL, credentials)
            .then((res) => res.body)
            .then((res) => {
                // Store 'credentials' to localStorage
                localStorage.setItem('credentials', JSON.stringify(res));
                // Redirect page
                router.push(redirectIndex);
            })
            .catch((err) => {
                context.invalid = true;
            });
    },
    
    /!**
     * Logout Logic
     *!/
    logout() {
        // Remove credentials from localStorage
        localStorage.removeItem('credentials');
        // Redirect page
        router.push(redirectLogin);
    },
    
    /!**
     * Check User Authentication Logic
     *!/
    checkAuth() {
        // Get 'credentials' from localStorage
        const credentials = localStorage.getItem('credentials');
        // Redirect accordingly
        if (credentials) {
            // Redirect to current page
            router.go(1);
        }
        else {
            router.push(redirectLogin);
        }
    }
};*/
