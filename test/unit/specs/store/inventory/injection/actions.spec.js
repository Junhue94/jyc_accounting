/**
 * Inventory - Injection Store - Action Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/injection';
import { actionHelper } from '../../../utils/actionHelper';
import InjectionMockResult from 'src/api/_mock/inventory/injection-mock-result';

const {
    createInjection,
    getInjectionDetails,
    updateInjectionDetails,
    deleteInjection,
    setInjectionId,
    clearState
} = store.actions;

const injectionMockResult = new InjectionMockResult();

describe('Inventory - Injection Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getInjectionDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = injectionMockResult.getInjection();
                actionHelper(getInjectionDetails, payload, state, [
                    { type: 'SET_INJECTION_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updateInjectionDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = injectionMockResult.updateInjection();
                actionHelper(updateInjectionDetails, payload, state, [
                    { type: 'SET_INJECTION_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteInjection action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteInjection, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setInjectionId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setInjectionId, payload, state, [
                    { type: 'SET_INJECTION_ID', payload }
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