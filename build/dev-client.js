/**
 * Client Side Refresh uppon HTML page changes
 */

// Provide polyfill to support EventSource in browser where it is not available
require('eventsource-polyfill');
const hotClient = require('webpack-hot-middleware/client?reload=true');

hotClient.subscribe(event => {
    if (event.action === 'reload') {
        window.location.reload()
    }
});

