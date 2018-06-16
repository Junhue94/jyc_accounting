/**
 * Logger
 * Levels: ['debug', 'info', 'warn', 'error']
 */

import jsLogger from 'js-logger';

class JsLogger {
    constructor() {
        jsLogger.useDefaults();
    }
    error(message) {
        return jsLogger.error(message);
    }
}

export const Logger = new JsLogger();
