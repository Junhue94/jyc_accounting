/**
 * Inventory - Procedure Store - Mutation Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/procedure';
import ProcedureMockResult from 'src/api/_mock/inventory/procedure-mock-reesult';

const procedureMockResult = new ProcedureMockResult();

const { CLEAR_ALL_STATE, SET_PROCEDURE_ID, SET_PROCEDURE_DETAILS } = store.mutations;

describe('Inventory - Procedure Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.procedureId = '1';
            state.procedureDetails = procedureMockResult.getProcedure();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store procedure id using SET_PROCEDURE_ID', () => {
            const id = '1';
            const mutation = SET_PROCEDURE_ID(state, id);
            assert.equal(state.procedureId, id);
        });
        
        it('store procedure details using SET_PROCEDURE_DETAILS', () => {
            const procedure = procedureMockResult.getProcedure();
            const mutation = SET_PROCEDURE_DETAILS(state, procedure);
            assert.deepEqual(state.procedureDetails, procedure);
        });
    });
});