/**
 * Inventory - Consultation Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/inventory/consultation';
import ConsultationMockResult from 'src/api/_mock/inventory/consultation-mock-result';

const consultationMockResult = new ConsultationMockResult();

const { CLEAR_ALL_STATE, SET_CONSULTATION_ID, SET_CONSULTATION_DETAILS } = store.mutations;

describe('Inventory - Consultation Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.consultationId = '1';
            state.consultationDetails = consultationMockResult.getConsultation();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store consultation id using SET_CONSULTATION_ID', () => {
            const id = '1';
            const mutation = SET_CONSULTATION_ID(state, id);
            assert.equal(state.consultationId, id);
        });
        
        it('store consultation details using SET_CONSULTATION_DETAILS', () => {
            const consultation = consultationMockResult.getConsultation();
            const mutation = SET_CONSULTATION_DETAILS(state, consultation);
            assert.deepEqual(state.consultationDetails, consultation);
        });
    });
});