/**
 * PSystem Setup - rovider Store - Mutation Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/provider';
import ProviderMockResult from 'src/api/_mock/systemSetup/providers-mock-result';

const providerMockResult = new ProviderMockResult();

const { CLEAR_ALL_STATE, SET_PROVIDER_ID, SET_PROVIDER_DETAILS, SET_PROVIDER_LIST } = store.mutations;

describe('System Setup - Provider Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('reset state using CLEAR_ALL_STATE', () => {
            state.providerId = '1';
            state.providerDetails = providerMockResult.getProviderDetails();
            state.providerList = providerMockResult.getProvidersList();
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
        
        it('store provider id using SET_PROVIDER_ID', () => {
            const id = '1';
            const mutation = SET_PROVIDER_ID(state, id);
            assert.equal(state.providerId, id);
        });
        
        it('store provider details using SET_PROVIDER_DETAILS', () => {
            const provider = providerMockResult.getProviderDetails();
            const mutation = SET_PROVIDER_DETAILS(state, provider);
            assert.deepEqual(state.providerDetails, provider);
        });
        
        it('store provider list using SET_PROVIDER_LIST', () => {
            const providerList = providerMockResult.getProvidersList();
            const mutation = SET_PROVIDER_LIST(state, providerList);
            assert.deepEqual(state.providerList, providerList);
        });
    });
});