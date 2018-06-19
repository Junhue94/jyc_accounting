import _ from 'lodash';

export const getQueryParams = res => _.omit(res, 'data');

export const generateModalId = id => `#${id}`;
