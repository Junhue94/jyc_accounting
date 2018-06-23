import _ from 'lodash';
import store from 'src/store/modules/stock';
import {
    GET_STOCK,
    FIND_STOCK_LIST
} from 'src/api/_mock/stock/stock-mock-result';
import {
    mockQueryParam,
    getQueryData,
    getQueryParams
} from '../../../helpers/genericHelper';

const {
    SET_STOCK_ID,
    SET_STOCK_DETAILS,
    SET_STOCK_LIST,
    SET_STOCK_LIST_PARAMS,
    CLEAR_ALL_STATE
} = store.mutations;

describe('Stock Store', () => {
    let state;
    const stockList = FIND_STOCK_LIST(mockQueryParam);
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('should mutate stockId using SET_STOCK_ID', () => {
            const id = '1';
            const mutation = SET_STOCK_ID(state, id);
            assert.equal(state.stockId, id);
        });

        it('should mutate stockList using SET_STOCK_LIST', () => {
            const updatedList = getQueryData(stockList);
            const mutation = SET_STOCK_LIST(state, updatedList);
            assert.deepEqual(state.stockList, updatedList);
        });
    
        it('should mutate stockDetails using SET_STOCK_DETAILS', () => {
            const updatedDetails = GET_STOCK;
            const mutation = SET_STOCK_LIST_PARAMS(state, updatedDetails);
            assert.deepEqual(state.stockListParams, updatedDetails);
        });
        
        it('should mutate stockListParams using SET_STOCK_LIST_PARAMS', () => {
            const updatedParams = getQueryParams(stockList);
            const mutation = SET_STOCK_DETAILS(state, updatedParams);
            assert.deepEqual(state.stockDetails, updatedParams);
        });
    
        it('should reset state using CLEAR_ALL_STATE', () => {
            state.stockId = '1';
            state.stockDetails = GET_STOCK;
            state.stockList = getQueryData(stockList);
            state.stockListParams = getQueryParams(stockList);
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
    });
});