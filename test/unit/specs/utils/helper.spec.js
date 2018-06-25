import {
    getQueryParams,
    generateModalId
} from 'src/utils/helper';

describe('Utils - helper', () => {
    describe('getQueryParams', () => {
        it('should return object with data key omitted', () => {
            const result = getQueryParams({
                data: 'data',
                queryParams: 'queryParams'
            });
            assert.deepEqual(result, { queryParams: 'queryParams' });
        });
    });
    
    describe('generateModalId', () => {
        it('should return # followed by id', () => {
            const result = generateModalId(10);
            assert.equal(result, '#10');
        });
    });
});