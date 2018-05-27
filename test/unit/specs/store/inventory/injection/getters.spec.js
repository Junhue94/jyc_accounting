/**
 * Inventory - Injection Store - Getter Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/injection';

const { injectionId, injectionDetails } = store.getters;

describe('Inventory - Injection Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return injectionId', () => {
            const result = injectionId(state);
            assert.equal(result, state.injectionId);
        });
        
        it('should return injectionDetails', () => {
            const result = injectionDetails(state);
            assert.equal(result, state.injectionDetails);
        });
    });
});