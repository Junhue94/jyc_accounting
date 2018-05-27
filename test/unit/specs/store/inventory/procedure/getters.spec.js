/**
 * Inventory - Procedure Store - Getter Test
 */

import _ from 'lodash';
import store from 'src/store/modules/inventory/procedure';

const { procedureId, procedureDetails } = store.getters;

describe('Inventory - Procedure Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return procedureId', () => {
            const result = procedureId(state);
            assert.equal(result, state.procedureId);
        });
        
        it('should return procedureDetails', () => {
            const result = procedureDetails(state);
            assert.equal(result, state.procedureDetails);
        });
    });
});