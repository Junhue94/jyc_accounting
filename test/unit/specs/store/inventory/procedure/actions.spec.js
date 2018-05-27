/**
 * Inventory - Procedure Store - Action Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/procedure';
import { actionHelper } from '../../../utils/actionHelper';
import ProcedureMockResult from 'src/api/_mock/inventory/procedure-mock-reesult';

const {
    createProcedure,
    getProcedureDetails,
    updateProcedureDetails,
    deleteProcedure,
    setProcedureId,
    clearState
} = store.actions;

const procedureMockResult = new ProcedureMockResult();

describe('Inventory - Procedure Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getProcedureDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = procedureMockResult.getProcedure();
                actionHelper(getProcedureDetails, payload, state, [
                    { type: 'SET_PROCEDURE_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updateProcedureDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = procedureMockResult.updateProcedure();
                actionHelper(updateProcedureDetails, payload, state, [
                    { type: 'SET_PROCEDURE_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteProcedure action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteProcedure, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setProcedureId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setProcedureId, payload, state, [
                    { type: 'SET_PROCEDURE_ID', payload }
                ], done);
            });
        });
        
        describe('clearState action', () => {
            it('should dispatch the correct mutations', (done) => {
                actionHelper(clearState, null, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
    });
});