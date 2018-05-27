/**
 * Inventory - Investigation Store - Action Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/investigation';
import { actionHelper } from '../../../utils/actionHelper';
import InvestigationMockResult from 'src/api/_mock/inventory/investigation-mock-result';

const {
    createInvestigation,
    getInvestigationDetails,
    updateInvestigationDetails,
    deleteInvestigation,
    setInvestigationId,
    clearState
} = store.actions;

const investigationMockResult = new InvestigationMockResult();

describe('Inventory - Investigation Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getInvestigationDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = investigationMockResult.getInvestigation();
                actionHelper(getInvestigationDetails, payload, state, [
                    { type: 'SET_INVESTIGATION_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updateInvestigationDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = investigationMockResult.updateInvestigation();
                actionHelper(updateInvestigationDetails, payload, state, [
                    { type: 'SET_INVESTIGATION_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteInvestigation action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteInvestigation, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setInvestigationId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setInvestigationId, payload, state, [
                    { type: 'SET_INVESTIGATION_ID', payload }
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