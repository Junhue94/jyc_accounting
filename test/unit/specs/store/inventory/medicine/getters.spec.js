/**
 * Inventory - Medicine Store - Getter Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/medicine';

const { medicineId, medicineDetails } = store.getters;

describe('Inventory - Medicine Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return medicineId', () => {
            const result = medicineId(state);
            assert.equal(result, state.medicineId);
        });
        
        it('should return medicineDetails', () => {
            const result = medicineDetails(state);
            assert.equal(result, state.medicineDetails);
        });
    });
});