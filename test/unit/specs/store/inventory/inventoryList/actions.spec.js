/**
 * Inventory List Store - Action Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/inventoryList';
import { actionHelper } from '../../../utils/actionHelper';
import InventoryListMockResult from 'src/api/_mock/inventory/inventory-list-mock-result';

const {
    getInventoryList
} = store.actions;

const inventoryListMockResult = new InventoryListMockResult();

describe('Inventory List Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getInventoryList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = inventoryListMockResult.getInventoryList();
                actionHelper(getInventoryList, payload, state,  [
                    { type: 'SET_INVENTORY_LIST', payload }
                ], done);
            });
        });
    });
});