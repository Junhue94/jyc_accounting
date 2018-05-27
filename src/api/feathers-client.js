/**
 * Feathers Client Configurations
 */

'use strict';

import feathers from 'feathers/client';
import hooks from 'feathers-hooks';
import auth from 'feathers-authentication-client';
import rest from 'feathers-rest/client';
import jQuery from 'jquery';

import { SERVER_URL } from './index';

const feathersClient = feathers()
    .configure(hooks())
    .configure(rest(SERVER_URL).jquery(jQuery))
    .configure(auth({ storage: localStorage }));

export default feathersClient;