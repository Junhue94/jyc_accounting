/**
 * Inventory - Medicine Store - Action Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/medicine';
import { actionHelper } from '../../../utils/actionHelper';
import MedicineMockResult from 'src/api/_mock/inventory/medicine-mock-result';

const {
    createMedicine,
    getMedicineDetails,
    updateMedicineDetails,
    deleteMedicine,
    setMedicineId,
    clearState
} = store.actions;

const medicineMockResult = new MedicineMockResult();

describe('Inventory - Medicine Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getMedicineDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = medicineMockResult.getMedicine();
                actionHelper(getMedicineDetails, payload, state, [
                    { type: 'SET_MEDICINE_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updateMedicineDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = medicineMockResult.updateMedicine();
                actionHelper(updateMedicineDetails, payload, state, [
                    { type: 'SET_MEDICINE_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteMedicine action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteMedicine, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setMedicineId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setMedicineId, payload, state, [
                    { type: 'SET_MEDICINE_ID', payload }
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