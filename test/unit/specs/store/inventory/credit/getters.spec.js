/**
 * Inventory - Credit Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/inventory/credit';

const { creditId, creditDetails } = store.getters;

describe('Inventory - Credit Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return creditId', () => {
            const result = creditId(state);
            assert.equal(result, state.creditId);
        });
        
        it('should return creditDetails', () => {
            const result = creditDetails(state);
            assert.equal(result, state.creditDetails);
        });
    });
});