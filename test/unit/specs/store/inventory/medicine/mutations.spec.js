/**
 * Inventory - Medicine Store - Mutation Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/medicine';
import MedicineMockResult from 'src/api/_mock/inventory/medicine-mock-result';

const medicineMockResult = new MedicineMockResult();

const { CLEAR_ALL_STATE, SET_MEDICINE_ID, SET_MEDICINE_DETAILS } = store.mutations;

describe('Inventory - Medicine Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.medicineId = '1';
            state.medicineDetails = medicineMockResult.getMedicine();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store medicine id using SET_MEDICINE_ID', () => {
            const id = '1';
            const mutation = SET_MEDICINE_ID(state, id);
            assert.equal(state.medicineId, id);
        });
        
        it('store medicine details using SET_MEDICINE_DETAILS', () => {
            const medicine = medicineMockResult.getMedicine();
            const mutation = SET_MEDICINE_DETAILS(state, medicine);
            assert.deepEqual(state.medicineDetails, medicine);
        });
    });
});