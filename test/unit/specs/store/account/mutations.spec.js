import _ from 'lodash';
import store from 'src/store/modules/account';
import {
    GET_ACCOUNT,
    FIND_ACCOUNT_LIST
} from 'src/api/_mock/account/account-mock-result';
import {
    mockQueryParam,
    getQueryData,
    getQueryParams
} from '../../../helpers/genericHelper';

const {
    SET_ACCOUNT_ID,
    SET_ACCOUNT_DETAILS,
    SET_ACCOUNT_LIST,
    SET_ACCOUNT_LIST_PARAMS,
    CLEAR_ALL_STATE
} = store.mutations;

describe('Account Store', () => {
    let state;
    const accountList = FIND_ACCOUNT_LIST(mockQueryParam);
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Mutations', () => {
        it('should mutate accountId using SET_ACCOUNT_ID', () => {
            const id = '1';
            const mutation = SET_ACCOUNT_ID(state, id);
            assert.equal(state.accountId, id);
        });
    
        it('should mutate accountDetails using SET_ACCOUNT_DETAILS', () => {
            const updatedParams = getQueryParams(accountList);
            const mutation = SET_ACCOUNT_DETAILS(state, updatedParams);
            assert.deepEqual(state.accountDetails, updatedParams);
        });

        it('should mutate accountList using SET_ACCOUNT_LIST', () => {
            const updatedList = getQueryData(accountList);
            const mutation = SET_ACCOUNT_LIST(state, updatedList);
            assert.deepEqual(state.accountList, updatedList);
        });
    
        it('should mutate accountListParams using SET_ACCOUNT_LIST_PARAMS', () => {
            const updatedDetails = GET_ACCOUNT;
            const mutation = SET_ACCOUNT_LIST_PARAMS(state, updatedDetails);
            assert.deepEqual(state.accountListParams, updatedDetails);
        });
    
        it('should reset state using CLEAR_ALL_STATE', () => {
            state.accountId = '1';
            state.accountDetails = GET_ACCOUNT;
            state.accountList = getQueryData(accountList);
            state.accountListParams = getQueryParams(accountList);
            const mutation = CLEAR_ALL_STATE(state);
            assert.deepEqual(state, store.initialState);
        });
    });
});