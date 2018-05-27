/**
 * Inventory - Consultation Store - Getter Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/consultation';

const { consultationId, consultationDetails } = store.getters;

describe('Inventory - Consultation Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return consultationId', () => {
            const result = consultationId(state);
            assert.equal(result, state.consultationId);
        });
        
        it('should return consultationDetails', () => {
            const result = consultationDetails(state);
            assert.equal(result, state.consultationDetails);
        });
    });
});