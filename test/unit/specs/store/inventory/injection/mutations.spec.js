/**
 * Inventory - Injection Store - Mutation Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/injection';
import InjectionMockResult from 'src/api/_mock/inventory/injection-mock-result';

const injectionMockResult = new InjectionMockResult();

const { CLEAR_ALL_STATE, SET_INJECTION_ID, SET_INJECTION_DETAILS } = store.mutations;

describe('Inventory - Injection Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.injectionId = '1';
            state.injectionDetails = injectionMockResult.getInjection();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store injection id using SET_INJECTION_ID', () => {
            const id = '1';
            const mutation = SET_INJECTION_ID(state, id);
            assert.equal(state.injectionId, id);
        });
        
        it('store injection details using SET_INJECTION_DETAILS', () => {
            const injection = injectionMockResult.getInjection();
            const mutation = SET_INJECTION_DETAILS(state, injection);
            assert.deepEqual(state.injectionDetails, injection);
        });
    });
});