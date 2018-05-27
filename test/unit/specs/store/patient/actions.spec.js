/**
 * Patient Store - Action Test
 */
import _ from 'lodash';
import store from 'src/store/modules/patient/patientDetails';
import { actionHelper } from '../../utils/actionHelper';
import PatientDetailsMockResult from 'src/api/_mock/patient/patient-details-mock-result';

const {
    createPatient,
    getPatientDetails,
    updatePatientDetails,
    deletePatient,
    setPatientId,
    clearState
} = store.actions;

const patientDetailsMockResult = new PatientDetailsMockResult();

describe('Patient Deetails Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getPatientDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = patientDetailsMockResult.getPatientDetails();
                actionHelper(getPatientDetails, payload, state, [
                    { type: 'SET_PATIENT_DETAILS', payload }
                ], done);
            });
        });
        
        describe('updatePatientDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = patientDetailsMockResult.updatePatientDetails();
                actionHelper(updatePatientDetails, payload, state, [
                    { type: 'SET_PATIENT_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deletePatient action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deletePatient, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setPatientId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setPatientId, payload, state, [
                    { type: 'SET_PATIENT_ID', payload }
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