/**
 * Inventory - Credit Store - Mutation Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/credit';
import CreditMockResult from 'src/api/_mock/inventory/credit-mock-result';

const creditMockResult = new CreditMockResult();

const { CLEAR_ALL_STATE, SET_CREDIT_ID, SET_CREDIT_DETAILS } = store.mutations;

describe('Inventory - Credit Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.creditId = '1';
            state.creditDetails = creditMockResult.getCredit();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store credit id using SET_CREDIT_ID', () => {
            const id = '1';
            const mutation = SET_CREDIT_ID(state, id);
            assert.equal(state.creditId, id);
        });
        
        it('store credit details using SET_CREDIT_DETAILS', () => {
            const credit = creditMockResult.getCredit();
            const mutation = SET_CREDIT_DETAILS(state, credit);
            assert.deepEqual(state.creditDetails, credit);
        });
    });
});