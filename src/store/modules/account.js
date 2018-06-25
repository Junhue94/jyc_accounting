/**
 * Account Store
 */

import _ from 'lodash';
import AccountService from '../../api/account-service';
import { getQueryParams } from '../../utils/helper';

const accountService = new AccountService();

const initialState = {
    accountId: null,
    accountDetails: {},
    accountList: [],
    accountListParams: {
        offset: 50,
        totalRows: null,
        currentPage: 1,
        totalPage: null,
        sortField: null,
        sortSeq: null,
        filter: {}
    }
};


const state = _.cloneDeep(initialState);

const mutations = {
    'SET_ACCOUNT_ID' (state, accountId) {
        state.accountId = accountId;
    },
    'SET_ACCOUNT_DETAILS' (state, accountDetails) {
        state.accountDetails = Object.assign({}, state.accountDetails, accountDetails);
    },
    'SET_ACCOUNT_LIST' (state, accountList) {
        state.accountList = accountList;
    },
    'SET_ACCOUNT_LIST_PARAMS' (state, accountListParams) {
        state.accountListParams = { ...accountListParams };
    },
    'CLEAR_ALL_STATE' (state) {
        state.accountId = _.cloneDeep(initialState.accountId);
        state.accountDetails = _.cloneDeep(initialState.accountDetails);
        state.accountList = _.cloneDeep(initialState.accountList);
        state.accountListParams = _.cloneDeep(initialState.accountListParams);
    }
};

const actions = {
    createAccount({ commit }, accountDetails) {
        return accountService.createAccount(accountDetails);
    },
    getAccountDetails({ commit }, accountId) {
        return accountService.getAccountDetails(accountId)
            .then((res) => {
                commit('SET_ACCOUNT_DETAILS', res);
            });
    },
    findAccountList({ commit }, options) {
        return accountService.findAccountList(options)
            .then((res) => {
                commit('SET_ACCOUNT_LIST', res.data);
                commit('SET_ACCOUNT_LIST_PARAMS', getQueryParams(res));
                return res;
            });
    },
    updateAccountDetails({ commit }, accountDetails) {
        return accountService.updateAccountDetails(accountDetails)
            .then((res) => {
                commit('SET_ACCOUNT_DETAILS', res);
            });
    },
    deleteAccount({ commit }, accountId) {
        return accountService.deleteAccount(accountId)
            .then((res) => {
                commit('CLEAR_ALL_STATE');
            });
    },
    setAccountId({ commit }, accountId) {
        commit('SET_ACCOUNT_ID', accountId);
    },
    clearState({ commit }) {
        commit('CLEAR_ALL_STATE');
    }
};

const getters = {
    accountId(state) {
        return state.accountId;
    },
    accountDetails(state) {
        return state.accountDetails;
    },
    accountList: (state) => {
        return state.accountList;
    },
    accountListParams: (state) => {
        return state.accountListParams;
    }
};

export default {
    namespaced: true,
    initialState,
    state,
    mutations,
    actions,
    getters
};