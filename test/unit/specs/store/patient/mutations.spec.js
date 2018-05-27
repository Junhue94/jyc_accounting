/**
 * Patient Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/patient/patientDetails';
import PatientDetailsMockResult from 'src/api/_mock/patient/patient-details-mock-result';

const patientDetailsMockResult = new PatientDetailsMockResult();

const { CLEAR_ALL_STATE, SET_PATIENT_ID, SET_PATIENT_DETAILS, SET_PATIENT_LIST } = store.mutations;

describe('Patient Details Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.patientId = '1';
            state.patientDetails = patientDetailsMockResult.getPatientDetails();
            state.patientList = patientDetailsMockResult.getPatientList();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store patient Id using SET_PATIENT_ID', () => {
            const id = '1';
            const mutation = SET_PATIENT_ID(state, id);
            assert.equal(state.patientId, id);
        });
        
        it('store patient details using SET_PATIENT_DETAILS', () => {
            const patientDetails = patientDetailsMockResult.getPatientDetails();
            const mutation = SET_PATIENT_DETAILS(state, patientDetails);
            assert.deepEqual(state.patientDetails, patientDetails);
        });
    
        it('store patient list using SET_PATIENT_LIST', () => {
            const patientList = patientDetailsMockResult.getPatientList();
            const mutation = SET_PATIENT_LIST(state, patientList);
            assert.deepEqual(state.patientList, patientList);
        });
    });
});