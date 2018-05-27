/**
 * System Setup - Template Mc Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/templateMc';

const { mcDetails, mcList } = store.getters;

describe('System Setup - Template Mc Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return mc details', () => {
            const result = mcDetails(state);
            assert.equal(result, state.mcDetails);
        });
        
        it('should return mc list', () => {
            const result = mcList(state);
            assert.equal(result, state.mcList);
        });
    });
});