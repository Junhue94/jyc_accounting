/**
 * Logger
 * Levels: ['debug', 'info', 'warn', 'error']
 */

import jsLogger from 'js-logger';

class Logger {
    constructor() {
        jsLogger.useDefaults();
    }
    error(message) {
        return jsLogger.error(message);
    }
}

export default Logger;
