/**
 * Inventory List Store - Getter Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/inventoryList';

const { inventoryList } = store.getters;

describe('Inventory List Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return inventoryList', () => {
            const result = inventoryList(state);
            assert.equal(result, state.inventoryList);
        });
    });
});