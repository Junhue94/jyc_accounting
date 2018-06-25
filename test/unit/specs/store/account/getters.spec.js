import _ from 'lodash';
import store from 'src/store/modules/account';

const {
    accountId,
    accountDetails,
    accountList,
    accountListParams
} = store.getters;

describe('Account Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Getters', () => {
        it('should return accountId', () => {
            const result = accountId(state);
            assert.equal(result, state.accountId);
        });
        
        it('should return accountDetails', () => {
            const result = accountDetails(state);
            assert.equal(result, state.accountDetails);
        });
        
        it('should return accountList', () => {
            const result = accountList(state);
            assert.equal(result, state.accountList);
        });
    
        it('should return accountListParams', () => {
            const result = accountListParams(state);
            assert.equal(result, state.accountListParams);
        });
    });
});