/**
 * System Setup - rovider Store - Getter Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/provider';

const { providerId, providerDetails, providerList } = store.getters;

describe('System Setup - Provider Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return provider id', () => {
            const result = providerId(state);
            assert.equal(result, state.providerId);
        });
        
        it('should return provider details', () => {
            const result = providerDetails(state);
            assert.equal(result, state.providerDetails);
        });
    
        it('should return provider list', () => {
            const result = providerList(state);
            assert.equal(result, state.providerList);
        });
    });
});