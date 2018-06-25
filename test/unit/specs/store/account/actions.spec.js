import _ from 'lodash';
import store from 'src/store/modules/account';
import { actionHelper } from '../../../helpers/actionHelper';
import {
    mockQueryParam,
    getQueryData,
    getQueryParams
} from '../../../helpers/genericHelper';
import {
    CREATE_ACCOUNT,
    GET_ACCOUNT,
    UPDATE_ACCOUNT,
    FIND_ACCOUNT_LIST
} from 'src/api/_mock/account/account-mock-result';

const {
    createAccount,
    getAccountDetails,
    updateAccountDetails,
    deleteAccount,
    findAccountList,
    setAccountId,
    clearState
} = store.actions;

describe('Account Store', () => {
    let state;
    
    beforeEach(() => {
        state = _.cloneDeep(store.initialState);
    });
    
    describe('Actions', () => {
        describe('createAccount action', () => {
            it('should not dispatch mutations', (done) => {
                actionHelper(createAccount, CREATE_ACCOUNT, state, [], done);
            });
        });
        
        describe('getAccountDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                actionHelper(getAccountDetails, GET_ACCOUNT, state, [
                    { type: 'SET_ACCOUNT_DETAILS', payload: GET_ACCOUNT }
                ], done);
            });
        });
        
        describe('updateAccountDetails action', () => {
            it('should dispatch the correct mutations', (done) => {
                actionHelper(updateAccountDetails, UPDATE_ACCOUNT, state, [
                    { type: 'SET_ACCOUNT_DETAILS', payload: UPDATE_ACCOUNT }
                ], done);
            });
        });

        describe('deleteAccount action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(deleteAccount, payload, state, [
                    { type: 'CLEAR_ALL_STATE' }
                ], done);
            });
        });
        
        describe('findAccountList action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = FIND_ACCOUNT_LIST(mockQueryParam);
                actionHelper(findAccountList, payload, state, [
                    { type: 'SET_ACCOUNT_LIST', payload: getQueryData(payload) },
                    { type: 'SET_ACCOUNT_LIST_PARAMS', payload: getQueryParams(payload) }
                ], done);
            });
        });

        describe('setAccountId action', () => {
            it('should dispatch the correct mutations', (done) => {
                const payload = { id: '1' };
                actionHelper(setAccountId, payload, state, [
                    { type: 'SET_ACCOUNT_ID', payload }
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