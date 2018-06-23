import _ from 'lodash';

export const mockQueryParam = {
    offset: 600,
    currentPage: 12,
    sortField: '',
    sortSeq: '',
    filter: {}
};

export const getQueryData = (result) => {
    return result.data;
};

export const getQueryParams = (result) => {
    return _.omit(result, 'data');
};

export const returnTrue = () => true;