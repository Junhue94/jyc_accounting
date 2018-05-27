/**
 * Inventory - Investigation Store - Getter Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/investigation';

const { investigationId, investigationDetails } = store.getters;

describe('Inventory - Investigation Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return investigationId', () => {
            const result = investigationId(state);
            assert.equal(result, state.investigationId);
        });
        
        it('should return investigationDetails', () => {
            const result = investigationDetails(state);
            assert.equal(result, state.investigationDetails);
        });
    });
});