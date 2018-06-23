/**
 * Logger
 * Levels: ['debug', 'info', 'warn', 'error']
 */

import jsLogger from 'js-logger';
jsLogger.useDefaults();

export const logError = message => jsLogger.error(message);
