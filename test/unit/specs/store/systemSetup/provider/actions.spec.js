/**
 * System Setup - Provider Store - Action Test
 */
import _ from 'lodash';
import store from 'src/store/modules/systemSetup/provider';
import { actionHelper } from '../../../utils/actionHelper';
import ProviderMockResult from 'src/api/_mock/systemSetup/providers-mock-result';

const {
    createProvider,
    getProviderDetails,
    getProviderList,
    updateProviderDetails,
    deleteProvider,
    setProviderId,
    clearState
} = store.actions;

const providerMockResult = new ProviderMockResult();

describe('System Setup - Provider Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('getProviderDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = providerMockResult.getProviderDetails();
                actionHelper(getProviderDetails, payload, state,  [
                    { type: 'SET_PROVIDER_DETAILS', payload }
                ], done);
            });
        });
    
        describe('getProviderList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = providerMockResult.getProvidersList();
                actionHelper(getProviderList, payload, state,  [
                    { type: 'SET_PROVIDER_LIST', payload }
                ], done);
            });
        });
        
        describe('updateProviderDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = providerMockResult.updateProviders();
                actionHelper(updateProviderDetails, payload, state, [
                    { type: 'SET_PROVIDER_DETAILS', payload }
                ], done);
            });
        });
        
        describe('deleteProvider action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '2' };
                actionHelper(deleteProvider, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('setProviderId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '3' };
                actionHelper(setProviderId, payload, state, [
                    { type: 'SET_PROVIDER_ID', payload }
                ], done);
            });
        });
        
        describe('clearState action', () => {
            it('should dispatch the correct mutations', (done) => {
                actionHelper(clearState, null, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
    });
});