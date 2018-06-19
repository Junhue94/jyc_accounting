import _ from 'lodash';
import store from 'src/store/modules/stock';

const {
    stockId,
    stockDetails,
    stockList,
    stockListParams
} = store.getters;

describe('Stock Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return stockId', () => {
            const result = stockId(state);
            assert.equal(result, state.stockId);
        });
        
        it('should return stockDetails', () => {
            const result = stockDetails(state);
            assert.equal(result, state.stockDetails);
        });
        
        it('should return stockList', () => {
            const result = stockList(state);
            assert.equal(result, state.stockList);
        });
    
        it('should return stockListParams', () => {
            const result = stockListParams(state);
            assert.equal(result, state.stockListParams);
        });
    });
});