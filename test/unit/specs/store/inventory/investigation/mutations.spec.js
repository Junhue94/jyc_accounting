/**
 * Inventory - Investigation Store - Mutation Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/investigation';
import InvestigationMockResult from 'src/api/_mock/inventory/investigation-mock-result';

const investigationMockResult = new InvestigationMockResult();

const { CLEAR_ALL_STATE, SET_INVESTIGATION_ID, SET_INVESTIGATION_DETAILS } = store.mutations;

describe('Inventory - Investigation Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.investigationId = '1';
            state.investigationDetails = investigationMockResult.getInvestigation();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store investigation id using SET_INVESTIGATION_ID', () => {
            const id = '1';
            const mutation = SET_INVESTIGATION_ID(state, id);
            assert.equal(state.investigationId, id);
        });
        
        it('store investigation details using SET_INVESTIGATION_DETAILS', () => {
            const investigation = investigationMockResult.getInvestigation();
            const mutation = SET_INVESTIGATION_DETAILS(state, investigation);
            assert.deepEqual(state.investigationDetails, investigation);
        });
    });
});