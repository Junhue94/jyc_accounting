/**
 * System Setup - Template Letter Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/templateLetter';

const { letterDetails, letterList } = store.getters;

describe('System Setup - Template Letter Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return letter details', () => {
            const result = letterDetails(state);
            assert.equal(result, state.letterDetails);
        });
        
        it('should return letter list', () => {
            const result = letterList(state);
            assert.equal(result, state.letterList);
        });
    });
});