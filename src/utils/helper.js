import _ from 'lodash';

export const getPaginationDetails = res => _.omit(res, 'data');

export const generateModalId = id => `#${id}`;
