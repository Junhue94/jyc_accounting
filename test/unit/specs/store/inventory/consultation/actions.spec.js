/**
 * Inventory - Consultation Store - Action Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/consultation';
import { actionHelper } from '../../../utils/actionHelper';
import ConsultationMockResult from 'src/api/_mock/inventory/consultation-mock-result';

const {
    createConsultation,
    getConsultationDetails,
    updateConsultationDetails,
    deleteConsultation,
    setConsultationId,
    clearState
} = store.actions;

const consultationMockResult = new ConsultationMockResult();

describe('Inventory - Consultation Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getConsultationDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = consultationMockResult.getConsultation();
                actionHelper(getConsultationDetails, payload, state, [
                    { type: 'SET_CONSULTATION_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updateConsultationDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = consultationMockResult.updateConsultation();
                actionHelper(updateConsultationDetails, payload, state, [
                    { type: 'SET_CONSULTATION_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteConsultation action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteConsultation, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setConsultationId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setConsultationId, payload, state, [
                    { type: 'SET_CONSULTATION_ID', payload }
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