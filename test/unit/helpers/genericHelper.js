import _ from 'lodash';

export const mockQueryParam = {
    offset: 600,
    currentPage: 12,
    sortField: '',
    sortSeq: '',
    filter: {}
};

export const getQueryData = result => result.data;

export const getQueryParams = result => _.omit(result, 'data');

export const returnTrue = () => true;
