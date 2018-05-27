/**
 * Inventory - Credit Store - Action Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/credit';
import { actionHelper } from '../../../utils/actionHelper';
import CreditMockResult from 'src/api/_mock/inventory/credit-mock-result';

const {
    createCredit,
    getCreditDetails,
    updateCreditDetails,
    deleteCredit,
    setCreditId,
    clearState
} = store.actions;

const creditMockResult = new CreditMockResult();

describe('Inventory - Credit Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getCreditDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = creditMockResult.getCredit();
                actionHelper(getCreditDetails, payload, state, [
                    { type: 'SET_CREDIT_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updateCreditDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = creditMockResult.updateCredit();
                actionHelper(updateCreditDetails, payload, state, [
                    { type: 'SET_CREDIT_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteCredit action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteCredit, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setCreditId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setCreditId, payload, state, [
                    { type: 'SET_CREDIT_ID', payload }
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