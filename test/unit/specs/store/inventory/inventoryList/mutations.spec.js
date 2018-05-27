/**
 * Inventory List Store - Mutation Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/inventoryList';
import InventoryListMockResult from 'src/api/_mock/inventory/inventory-list-mock-result';

const inventoryListMockResult = new InventoryListMockResult();

const { SET_INVENTORY_LIST } = store.mutations;

describe('Inventory List Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('store inventory list using SET_INVENTORY_LIST', () => {
            const inventoryList = inventoryListMockResult.getInventoryList();
            const mutation = SET_INVENTORY_LIST(state, inventoryList);
            assert.deepEqual(state.inventoryList, inventoryList);
        });
    });
});