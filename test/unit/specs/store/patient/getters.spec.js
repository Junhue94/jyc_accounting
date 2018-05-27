/**
 * Patient Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/patient/patientDetails';

const { patientId, patientDetails, patientList } = store.getters;

describe('Patient Details Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return patientId', () => {
            const result = patientId(state);
            assert.equal(result, state.patientId);
        });
        
        it('should return patientDetails', () => {
            const result = patientDetails(state);
            assert.equal(result, state.patientDetails);
        });
    
        it('should return patientList', () => {
            const result = patientList(state);
            assert.equal(result, state.patientList);
        });
    });
});